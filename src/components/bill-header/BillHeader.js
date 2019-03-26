import React, { Component } from 'react'
import { Button, Col, colSpan, Table, Form } from 'react-bootstrap';

import './BillHeader.scss';
class BillHeader extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
              <tr>
                <td className ="bill-header" >{'ELECTRICAL/ PLUMBING BILL'}</td>
                <td className ="bill-header" >Dated: {'03/12/2019'}</td>
              </tr>
  
          </thead>
          <tbody>
          <tr>
              <td>Customer name: {'Vijayashree IN'}
              <br></br>
              Mobile No: {'+9199995799957'}     <br></br>Location per unit: {'Hubli'}</td>
              <td>Contractor name: {'Shashank MN'}
              <br></br>Mobile No: {'+9199995799957'}     <br></br>Charege per unit: {'140'}</td>
            </tr>
          </tbody>
        </Table>
        <hr></hr>
      </div>


    )
  }
}


export default BillHeader;