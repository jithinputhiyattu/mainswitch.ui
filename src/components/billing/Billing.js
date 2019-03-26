import React, { Component } from 'react'
import { Button, Col, Table, Form } from 'react-bootstrap';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import './Billing.scss';
import BillHeader from '../bill-header/BillHeader';
class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charePerUnit: 140,
            tableHeader: ["#", "Item Name", "Unit"],
            totalUnits: 0,
            totalItems: 0,
            itemOptionList: [{ itemName: "Fan Point", id: 1 }],
            itemName: "",
            total: 0,
            unit: 1.5,
            tableData: []
        };
        this.onChange = this.onChange.bind(this);
        this.toPdf = this.toPdf.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    toPdf() {

        const rowHeight = 14;
        const input = document.querySelector("#capture");
        const table = input.childNodes[0];
        const thead = table.childNodes[0];
        const tbody = table.childNodes[1];
        const rows = tbody.childNodes;
        const pdf = new jsPDF();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const pageWidth = pdf.internal.pageSize.getWidth();
        console.dir(pageWidth);
        let currentPageHeight = rowHeight;
        let promises = [];
        const leftX = 10;
        const rightY = 10;

        const widthDivider = 10;
        const heightDivider = 10;

        html2canvas(thead)
            .then((canvas) => {

                currentPageHeight += rowHeight;
                const imgData = canvas.toDataURL('image/png');
                pdf.addImage(imgData, 'png', leftX, rightY, pageWidth - 2 * rightY, canvas.height / heightDivider);
            }).then(() => {
                rows.forEach((tableRow) => {
                    promises.push(html2canvas(tableRow));
                })
            }).then(() => {
                Promise.all(promises).then((canvases) => {
                    canvases.forEach((canvas) => {
                        currentPageHeight += rowHeight;
                        if (currentPageHeight + rowHeight >= pageHeight) {
                            currentPageHeight = rowHeight;
                            pdf.addPage();
                        }
                        const imgData = canvas.toDataURL('image/png');
                        pdf.addImage(imgData, 'png', leftX, currentPageHeight, pageWidth - 2 * rightY, canvas.height / heightDivider);
                    });
                }).then(() => {
                    pdf.save('Bill[No.].pdf');
                });
            });
    }

    onChange(event) {
        console.dir(event.target.name);
        console.dir(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.itemName) {
            let newData = this.state.tableData;
            let totalUnits = this.state.totalUnits + parseFloat(this.state.unit);
            let totalItems = this.state.totalItems + 1;
            newData.push({ itemName: this.state.itemName, unit: this.state.unit });
            this.setState({
                //itemName: "", id: null, unit: 1,
                tableData: newData,
                totalUnits: totalUnits,
                totalItems: totalItems
            })
        }
    }
    render() {

        let tableHeader = this.state.tableHeader.map((header, key) => (
            <td key={key}> {header}</td>
        ));

        let tableFooter = (<tr>
            <td colSpan="2">Total units </td>
            <td> {this.state.totalUnits}</td>
        </tr>);



        let tableData = this.state.tableData.map((rowData, key) => (

            <tr key={key}>
                <td>{key + 1}</td>
                <td>{rowData.itemName}</td>
                <td>{rowData.unit}</td>
            </tr>
        ));

        return (
            <div className="bill-data">
                            <BillHeader></BillHeader>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="items">
                            <Form.Label>Select item</Form.Label>
                            <Form.Control as="select" name="itemName" onChange={this.onChange} value={this.state.itemName}>
                                <option>Choose...</option>
                                <option>Fan point</option>
                                <option>Light point</option>
                                <option>Motor point</option>
                                <option>Exhaust fan point</option>
                                <option>GI box andearthing the point </option>
                                <option>Call bell point</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} xs lg="2" controlId="unit">
                            <Form.Label>Unit</Form.Label>
                            <Form.Control type="number" name="unit" value={this.state.unit} onChange={this.onChange} step="0.1" placeholder="Unit" />
                        </Form.Group>
                    </Form.Row>
                    <Button className="add-button" type="submit">Add</Button>
                </Form>

                <hr></hr>
                <div id="capture">
                    <Table >
                        <thead>
                            <tr>
                                {tableHeader}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData}
                            {tableFooter}
                            <tr>
                                <td colSpan="2">Grand Total </td>
                                <td >{this.state.charePerUnit * this.state.totalUnits}</td>
                            </tr>
                        </tbody>

                    </Table>
                </div>

                <Button onClick={this.toPdf} >Download as PDF</Button>
            </div>
        )
    }
}


export default Billing;