import React, { Component } from 'react';
import Image from './images/profile.png';
import axios from 'axios';
import {Redirect} from 'react-router';

class Login extends Component {
	constructor() {
        super()

        this.state = {
            emailid : "",
            password : "",
            redirect: "",
        }
    }
    dataChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    setRedirect = () => {
        this.setState({
            redirect : true
        })
    }

    postData = (event) => {
        event.preventDefault()

        const emailid = this.state.emailid
        const password = this.state.password

        const data = {
            emailid,
            password,
        }

        axios.post('https://missingchild.herokuapp.com/signup',data)
            .then(response => {
                console.log(response);
                this.setState({
                    message : response.data
                })
            }) 
            .catch(error => {
                console.log(error);
            })

    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: "/home",
                state: this.state
            }}
            />
        }
    }

  render() {
    return (
      <div className="form">
        <img src={Image} className="profile" />
        <h1>Login</h1>
        <form>
        <div className="form-group">
            <input type="email" name="emailid" className="form-control" id="emailid" 
            placeholder="email@.com" value={this.state.emailid} onChange={this.dataChange} />
        </div>
        <div className="form-group">
            <input type="password" name="password" className="form-control" id="password" 
            placeholder="password" value={this.state.password} onChange={this.dataChange} />
        </div>
        <div className="form-group">
            <button onClick={this.setRedirect}>Login</button>
        </div>
        </form>
        {this.renderRedirect()}
      </div>
    );
  }
}

export default Login;