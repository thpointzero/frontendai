import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Board from "./extra/board";
import "../../src/style.css";

import { connect } from "react-redux";
import { register } from "../actions/auth";
//import RICIBs from '../../src/ReactIndividualCharacterInputBoxes';

import styled, {createGlobalStyle} from 'styled-components';
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
const GlobalStyle = createGlobalStyle`
  body {
    top: 0;
    left: 0;
    height: 120%
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#066dad+0,309dcf+100 */
    background: rgb(6, 109, 173); /* Old browsers */
    background: -moz-linear-gradient(
      top,
      rgba(6, 109, 173, 1) 0%,
      rgba(48, 157, 207, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(6, 109, 173, 1) 0%,
      rgba(48, 157, 207, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(6, 109, 173, 1) 0%,
      rgba(48, 157, 207, 1) 100%
    ) fixed; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    background-size: cover;
    filter: progid:DXImageTransform.Microsoft.gradient(
        startColorstr='#066dad',
        endColorstr='#309dcf',
        GradientType=0
      ); /* IE6-9 */
  }
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
      
     
        <div class="mb-6 text-center">
        <p>Please enter the verification<br /> 
code that was sent to your email</p>
  <div id="otp" class="flex justify-center">
    <input class="m-2 text-center form-control1 form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="first" maxlength="1" />
    <input class="m-2 text-center form-control1 form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="second" maxlength="1" />
    <input class="m-2 text-center form-control1 form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="third" maxlength="1" />
    <input class="m-2 text-center form-control1 form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="fourth" maxlength="1" />
    <input class="m-2 text-center form-control1 form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="fifth" maxlength="1" />
    <input class="m-2 text-center form-control1 form-control-solid rounded focus:border-blue-400 focus:shadow-outline" type="text" id="sixth" maxlength="1" />
  </div>
  <button className="btn btn-primary btn-block">Send to verify</button>
  <p>Didnt get it? <a href="#" onclick="">Resend it!</a></p>
</div>
     
    <script type="text/javascript" src="/scripts.js"></script>   
       
      </Container>
    )
  }
}
export default App