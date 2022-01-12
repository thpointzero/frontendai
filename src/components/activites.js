import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Board from "./extra/board";
import "../../src/style.css";
import React, { Component, useState } from "react";
import { Redirect,Link } from 'react-router-dom';

import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
//import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import 'reactjs-popup/dist/index.css';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';


import { connect } from "react-redux";
import { register } from "../actions/auth";
//import RICIBs from '../../src/ReactIndividualCharacterInputBoxes';

//import styled, {createGlobalStyle} from 'styled-components';
const style4 ={
  color: 'var(--black)',
  fontFamily: 'var(--font-family-raleway)',
  fontSize: '40px',
  fontWeight: '400',
  fontStyle: 'normal',
  minHeight: '104px',
  alignSelf: 'center',
 // marginTop: '116px',
  marginLeft: '14px',
 // minWidth: '404px',
  letterSpacing: '0px'
};




const Container = styled.div`
  top: 0;
  left: 0;
  height: 120%
  margin: 0px auto;
  max-width: 960px;
`

const Wrapper = styled.div`
  margin: auto;
  padding: 10px;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
  color: white;
  width: 100%;
  text-align: center;
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
`

const Header = styled.div`
  border-bottom: 1px solid rgb(235, 237, 240);
  color: white;
  margin: auto;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
  Arial sans-serif;
  padding: 10px;
  text-align: center;
`

const Footer = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial sans-serif;
  color: white;
  border-top: 1px solid rgb(235, 237, 240)
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      amount: 5,
      outputString: '',
      regEx: RegExp('^[0-9]$')
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleOutputString = this.handleOutputString.bind(this)
    this.handleRegExChange = this.handleRegExChange.bind(this)

  }

  handleRegExChange (event) {
    this.setState({ regEx: RegExp(event.target.value) })
  }

  handleChange (event) {
    this.setState({ amount: Number(event.target.value) })
  }

  handleOutputString (string) {
    this.setState({ outputString: string })
  }

  render () {
    return (
      <Container>
      <div class="row">
        <div class="col-4">
          <div class="card">1</div>
        </div>
        <div class="col-4">
          <div class="card">1</div>
        </div>
        <div class="col-4">
          <div class="card">1</div>
        </div>
        <div class="col-4">
          <div class="card">1</div>
        </div>
      </div>
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
     


      <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>

     
    <script type="text/javascript" src="/scripts.js"></script>   
       
      </Container>
    )
  }
}
export default App