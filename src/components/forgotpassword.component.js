import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Board from "./extra/board";

import { connect } from "react-redux";
import { register } from "../actions/auth";
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

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};





class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(this.state.username, this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      
      
        <div className="col-md-12">
  
<div className="card-group">
  <div className="card">
  <div className="card-body">
      <h5 className="card-title" style={style4}>Forgot your Password</h5>
      <p>Please enter your registered email,<br /> we
will send you the email to reset your password</p>
      
      <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
              

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    style={{borderRadius: '25px', border: '2px solid blue'}}
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

              
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Reset Password</button>
                </div>
              </div>
            )}

            {message && (
              <div className="form-group">
                <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
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
  </div>
  <Board />
  

</div><br /><br /><br /><br />
      </div>
     
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
