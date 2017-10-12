import React,{Component} from 'react';
import withRouter from "react-router-dom/es/withRouter";
// import PropTypes from 'prop-types';

class SignUp extends Component{

    // static propTypes = {
    //     handleSignUp: PropTypes.func.isRequired,
    // };

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
        };
    }

    componentWillMount(){
    }

    render(){

        console.log("In RENDER SignUp");

            return(

                <div className="span3">

                    <br/> <br/> <br/>

                    <form>

                        <div className="form-group">
                            <h2>Sign Up</h2>
                        </div>

                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="name"
                                name="firstname"
                                className="span3"
                                placeholder="Enter First Name"
                                required="required"
                                onChange={ (event) => {
                                    this.setState({
                                        userData: {
                                            ...this.state.userData,
                                            firstName: event.target.value
                                        }
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="name"
                                name="lastname"
                                className="span3"
                                placeholder="Enter Last Name"
                                required="required"
                                value={this.state.userData.lastName}
                                onChange={ (event) => {
                                    this.setState({
                                        userData: {
                                            ...this.state.userData,
                                            lastName: event.target.value
                                        }
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email </label>
                            <input
                                type="email"
                                name="email"
                                className="span3"
                                placeholder="Enter Email Address"
                                required="required"
                                value={this.state.userData.email}
                                onChange={ (event) => {
                                    this.setState({
                                        userData: {
                                            ...this.state.userData,
                                            email: event.target.value
                                        }
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="span3"
                                placeholder="Enter Password"
                                required="required"
                                value={this.state.userData.password}
                                onChange={ (event) => {
                                    this.setState({
                                        userData: {
                                            ...this.state.userData,
                                            password: event.target.value
                                        }
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label><input type="checkbox" name="terms"/> I agree to Dropbox Terms.</label>
                            <br/>
                            <input
                                type="button"
                                value="Sign up"
                                className="btn btn-primary"
                                onClick={() => this.props.handleSignUp(this.state)}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="button"
                                value="Sign In"
                                className="btn btn-primary"
                                onClick={() => {
                                    this.props.history.push("/SignIn");
                                }}
                            />
                        </div>

                    </form>

                    <div className="col-md-12">
                        {this.props.message && (
                            <div  className="alert alert-warning" role="alert">
                                <b>Result :</b>
                                <br/>
                                {this.props.message}
                            </div>
                        )}
                    </div>

                </div>
            );

        }


}

export default withRouter(SignUp);