import React,{Component} from 'react';
import * as API from '../api/API_SignUp';
import withRouter from "react-router-dom/es/withRouter";

class SignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            signUpUserData: {
                firstName: undefined,
                lastName: undefined,
                email: undefined,
                password: undefined,
            },
            isSignedIn: undefined,
            message: undefined
        };
    }

    componentWillMount(){
        this.setState({
            signUpUserData: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
            isSignedIn: this.props.isSignedIn,
            message: ''
        });
    }

    handleSignUp = () => {
        console.log("In hendleSignUp"+this.state);
        API.doSignUp(this.state)
            .then( (response) => {
                    this.setState({
                        ...this.state,
                        message: response.message
                    });
                    this.props.handleIsSignedIn(this.state.signUpUserData.email);
                    if(this.state.message === "Successful Sign up"){
                        this.props.history.push("/SignIn");
                    }
            });
    }

    render(){

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
                                required
                                onChange={ (event) => {
                                    this.setState({
                                        signUpUserData: {
                                            ...this.state.signUpUserData,
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
                                value={this.state.signUpUserData.lastName}
                                onChange={ (event) => {
                                    this.setState({
                                        signUpUserData: {
                                            ...this.state.signUpUserData,
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
                                value={this.state.signUpUserData.email}
                                onChange={ (event) => {
                                    this.setState({
                                        signUpUserData: {
                                            ...this.state.signUpUserData,
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
                                value={this.state.signUpUserData.password}
                                onChange={ (event) => {
                                    this.setState({
                                        signUpUserData: {
                                            ...this.state.signUpUserData,
                                            password: event.target.value
                                        }
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label><input type="checkbox" name="terms"/> I agree to <a href="#">Dropbox Terms</a>.</label>
                            <br/>
                            <input
                                type="button"
                                value="Sign up"
                                className="btn btn-primary"
                                onClick={() =>
                                    this.setState({
                                            ...this.state,
                                        },
                                        function(){this.handleSignUp()})
                                }
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
                        {this.state.message && (
                            <div  className="alert alert-warning" role="alert">
                                <b>Result :</b>
                                <br/>
                                {this.state.message}
                            </div>
                        )}
                    </div>

                </div>
            );

        }

}

export default withRouter(SignUp);