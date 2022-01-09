import React, { Component, useState } from "react";
import { Redirect,Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Tab, Tabs } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
//import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import 'reactjs-popup/dist/index.css';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
  borderRadius: '25px',
  background: '#FAF9F6',
  padding: '20px', 
  width: '200px',
  height: '200px'
};

const imgStyle = {
  height: '150px'
};

class Profile extends Component {

  render() {
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <Tabs defaultActiveKey="Rewards" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Badges" title="Badges">
 Your Badges<br />
 <img src="/img/badge-1-8@2x.png"/>
 <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  <ul className="mx-0">
  <Button  variant="primary">Button #1</Button>
  <Button variant="secondary" className="mx-2">Button #2</Button>
  <Button variant="success">Button #3</Button>
</ul>
  </Tab>
  <Tab eventKey="Rewards" title="Rewards">
 Your Rewards
 <div style={divStyle}><img style={imgStyle} src="/img/badge-1-8@2x.png"/></div>
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
 dffdfdfdd

  </Tab>
</Tabs>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);
