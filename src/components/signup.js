import React , {Component} from 'react';
import Image from './images/profile.png';
import axios from 'axios';
import {Redirect} from 'react-router';


class Form extends Component {
    constructor() {
        super()

        this.state = {
            firstname : "",
            lastname : "",
            mobile : "",
            emailid : "",
            password : "",
            address : "",
            state : "",
            city : "",
            pincode : "",
            gender : "",
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

        const firstname = this.state.firstname
        const lastname = this.state.lastname
        const mobile = parseInt(this.state.mobile)
        const emailid = this.state.emailid
        const password = this.state.password
        const address = this.state.address
        const state = this.state.state
        const city = this.state.city
        const pincode = parseInt(this.state.pincode)
        const gender = this.state.gender

        const data = {
            firstname,
            lastname,
            mobile,
            emailid,
            password,
            address,
            state,
            city,
            pincode,
            gender
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
        return(
            <div className="form">
                <img src={Image} className="profile" />
                <h1>Submit Form</h1>
                <form onSubmit={this.postData} >
                    <div className="form-group">
                        <input type="text" name="firstname" className="form-control" id="firstname"
                         placeholder="firstname" value={this.state.firstname} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="lastname" className="form-control" id="lastname" 
                        placeholder="lastname" value={this.state.lastname} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="number" name="mobile" className="form-control" id="mobile" 
                        placeholder="mobile" value={this.state.mobile} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="email" name="emailid" className="form-control" id="emailid" 
                        placeholder="email@.com" value={this.state.emailid} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" id="password" 
                        placeholder="password" value={this.state.password} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="address" className="form-control" id="address" 
                        placeholder="address" value={this.state.address} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="state" className="form-control" id="state" 
                        placeholder="state" value={this.state.state} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="city" className="form-control" id="city" 
                        placeholder="city" value={this.state.city} onChange={this.dataChange}/>
                    </div>
                    <div className="form-group">
                        <input type="number" name="pincode" className="form-control" id="pincode" 
                        placeholder="pincode" value={this.state.pincode} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="gender" className="form-control" id="gender" 
                        placeholder="gender" value={this.state.gender} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <button onClick={this.setRedirect}>Submit</button>
                    </div>
                    </form>
                        {this.renderRedirect()}
            </div>
        )
    }
}

export default Form;