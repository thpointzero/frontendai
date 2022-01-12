import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Group47 from "../components/Group47";
import Board from "../components/extra/board";
import { connect } from "react-redux";
import { login } from "../actions/auth";

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

const style7 ={
  borderRadius: '25px!important',
  border: '2px solid #609',
  padding: '20px',
  width: '200px',
  height: '15px'
};

const style6 ={
    color: 'white',
    fontFamily: 'var(--font-family-raleway)',
    fontSize: 'var(--font-size-xxxxxl)',
    fontWeight: '500',
    fontStyle: 'normal',
  //  position: 'absolute',
    top: '597px',
    left: '173px',
    letterSpacing: '0px'
};

const style5 ={
    color: 'white',
    fontFamily: 'var(--font-family-raleway)',
    fontSize: '70px',
    fontWeight: '700',
    fontStyle: 'normal',
    //position: 'absolute',
    top: '396px',
    left: '173px',
    letterSpacing: '0px'
};

const style2 ={
  width: '18rem'
};

const style3 ={
  backgroundColor: 'blue',
};

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history} = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message, style45  } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="col-md-12">
     {/*   <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
            */}
        {/*
        <div className="card-deck">
        <div className="card">
       </div> <div className="card">
       </div>
       <div className="card" style={style2}>
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div><div className="card" style={style2}>
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
 */}
<div className="card-group">
  <div className="card">
   {/* <img className="card-img-top" src="..." alt="Card image cap" />
     */}<div className="card-body">
      <h5 className="card-title" style={style4}>Welcome Back!<br />Log into your Account</h5>
      
      {/*<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      */}<Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                style={{borderRadius: '25px', border: '2px solid blue'}}
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                style={{borderRadius: '25px', border: '2px solid blue'}}
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <br />
            <p className="card-text"><small className="text-muted"><a href="/forgot" onClick={this}>Forgot your password</a></small></p>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
      <p className="card-text"><small className="text-muted">Don't have an account<a href="/register" onClick={this}>Create One</a></small></p>
    </div>
  </div>
  <Board />
  
 {/*
 <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
 */} 
</div><br /><br /><br /><br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);
