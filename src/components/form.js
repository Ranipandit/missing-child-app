import React , {Component} from 'react';
import Image from './images/profile.png';
import axios from 'axios';


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
            State : "",
            city : "",
            pincode : "",
            gender : "",
            loading: false,
            message: "" 

        }
    }
    render() {
        return(
            <div className="form">
                <img src={Image} className="profile" />
                <h1>Submit Form</h1>
                <form>
                    <div className="form-group">
                        <label>FirstName</label>
                        <input type="text" name="firstname" className="form-control" id="firstname"
                         placeholder="firstname" value={this.state.firstname} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>LastName</label>
                        <input type="text" name="lastname" className="form-control" id="lastname" 
                        placeholder="lastname" value={this.state.lastname} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="number" name="mobile" className="form-control" id="mobile" 
                        placeholder="mobile" value={this.state.mobile} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>EmailId</label>
                        <input type="email" name="emailid" className="form-control" id="emailid" 
                        placeholder="email@.com" value={this.state.emailid} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" id="password" 
                        placeholder="password" value={this.state.password} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" name="address" className="form-control" id="address" 
                        placeholder="address" value={this.state.address} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" name="State" className="form-control" id="state" 
                        placeholder="state" value={this.state.State} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" name="city" className="form-control" id="city" 
                        placeholder="city" value={this.state.city} onChange={this.dataChange}/>
                    </div>
                    <div className="form-group">
                        <label>Pincode</label>
                        <input type="number" name="pincode" className="form-control" id="pincode" 
                        placeholder="pincode" value={this.state.pincode} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <input type="text" name="gender" className="form-control" id="gender" 
                        placeholder="gender" value={this.state.gender} onChange={this.dataChange} />
                    </div>
                    <div className="form-group">
                        <button>Submit</button>
                    </div>
                    </form>
            </div>
        )
    }
}

export default Form;