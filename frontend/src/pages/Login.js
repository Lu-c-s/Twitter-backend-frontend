import React, { Component } from "react";
import "./Login.css";
import twitterLogo from "../twitter.svg";
import { Icon } from 'antd';


export class Login extends Component {
  state = {
    username: ""
  };

  handleInputChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem("@GoTwitter:username", username);

    this.props.history.push("/timeline");
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-leftSide">
            <div className="login-quotes-wrapper">
                <div className="login-quotes-container">
                    <Icon type="search" style={{color: '#fff', fontSize: 25,marginRight: 12}} />
                    <h3 className="login-quote">Follow your interests.</h3>
                </div>
                <div className="login-quotes-container">
                    <Icon type="team" style={{color: '#fff', fontSize: 25 ,marginRight: 12}}/>
                    <h3 className="login-quote">Hear what people are talking about.</h3>
                </div>
                <div className="login-quotes-container">
                    <Icon type="message" style={{color: '#fff', fontSize: 25 ,marginRight: 12}}/>
                    <h3 className="login-quote">Join the conversation.</h3>
                </div>
          </div>
        </div>
        <div className="login-rightSide">
         <img src={twitterLogo} alt="GoTwitter" />
            <form onSubmit={this.handleSubmit}>
            <input
                value={this.state.username}
                onChange={this.handleInputChange}
                placeholder="Nome de usuário"
            />
            <input
                value={this.state.username}
                onChange={this.handleInputChange}
                placeholder="Senha"
            />
            
            <button type="submit">Entrar</button>
        </form>
        </div>
      </div>
    );
  }
}


export default Login;
