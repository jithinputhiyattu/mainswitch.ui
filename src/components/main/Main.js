import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { BrowserRouter, Route } from "react-router-dom";
import ChooseWork from './../choose-work/ChooseWork';
import UserData from './../user-data/UserData';
import CustomerData from './../customer-data/CustomerData';
import { Link } from "react-router-dom";
import Billing from '../billing/Billing';
import './Main.scss';



export default class Main extends Component {
    render() {
        return (

            <BrowserRouter>
   
                <div className="menu-bar">
                    <ButtonToolbar>
                        <Link to="/choose-work">
                            <Button className="menu-bar-buttons" variant="warning">Select Work</Button>
                        </Link>
                        <Link to="/user-data">
                            <Button className="menu-bar-buttons" variant="warning">Contractor's  Data</Button>
                        </Link>
                        <Link to="/customer-data">
                            <Button className="menu-bar-buttons" variant="warning">Customer Data</Button>
                        </Link>
                        <Link to="/billing">
                            <Button className="menu-bar-buttons" variant="warning">Billing</Button>
                        </Link>
                        <Link to="/user-data">
                            <Button className="menu-bar-buttons" variant="warning">Downlod</Button>
                        </Link>
                    </ButtonToolbar>
                    <hr></hr>
                </div>
                <div>
                <header className="App-header">
                <Route path="/user-data" component={UserData}></Route>
                <Route path="/choose-work" component={ChooseWork}></Route>
                <Route path="/customer-data" component={CustomerData}></Route>
                <Route path="/billing" component={Billing}></Route>
                </header>
            
                </div>
            </BrowserRouter>
        )
    }
}
