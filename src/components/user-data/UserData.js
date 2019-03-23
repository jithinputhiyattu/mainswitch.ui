import React, { Component } from 'react'

import { Button, Form } from 'react-bootstrap';

import './UserData.scss';

class UserData extends Component {
    render() {
        return (
            <div className="user-data">
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="Full name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Contact number</Form.Label>
                        <Form.Control placeholder="Contact number" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control placeholder="Address line 1" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control placeholder="Address line 2" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Address Line 3</Form.Label>
                        <Form.Control as="textarea" rows="2" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Charege per unit</Form.Label>
                        <Form.Control placeholder="Charege per unit" />
                    </Form.Group>
                    <Button className="form-button">Continue</Button>
                </Form>
            </div>
        )
    }
}


export default UserData;