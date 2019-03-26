import React, { Component } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";


class ChooseWork extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onProceedClick = this.onProceedClick.bind(this);
        this.state = {
            dropdownOpen: false,
            selectedWork: 'Choose your work'
        };
    }

    onProceedClick(event) {
        console.dir(event.target.textContent);
    }

    onClick(event) {
        console.dir(event.target.textContent);
        this.setState({
            selectedWork: event.target.textContent
        });
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <div>
                <div className="app-title-div">
                </div>
                <div>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="selection-dropdown" caret color="danger">{this.state.selectedWork}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.onClick}>ELECTRICAL WORKS</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={this.onClick}>PLUMBING WORKS</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <Link to="/user-data">
                        <Button onClick={this.onProceedClick} className="confirm-button" color="primary"> Proceed</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ChooseWork;