import React,{Component} from 'react';
import * as API from '../api/API_SignIn';
import { withRouter } from 'react-router-dom';

class SignIn extends Component{

    constructor(props) {
        super(props);
        this.state = {
            signInUserData: {
                email: undefined,
                password: undefined
            },
            isSignedIn: undefined,
            message: undefined
        };
    }

    componentWillMount(){
        this.setState({
            signInUserData: {
                email: this.props.email,
                password: ''
            },
            isSignedIn: this.props.isSignedIn,
            message: ''
        });
    }

    handleSignIn = () => {
        console.log("In handle sign in "+this.state.signInUserData.email+" "+this.state.signInUserData.password);
        API.doSignIn(this.state)
            .then( (response) => {

                if(response.status === 201){
                    this.setState({
                        ...this.state,
                        isSignedIn: true,
                        message: "message : "+response.message+" , status : "+response.status
                    });
                }

                else if(response.status === 401){
                    this.setState({
                        ...this.state,
                        message: response.message+" , status : "+response.status
                    });
                }
            });
    }

    render(){

        //check with the node js sessions using API calls made from handleIsSignedIn that user is signedIn or not?



            return(

                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="span3">
                            <form>

                                <br/> <br/> <br/>

                                <div className="form-group">
                                    <h2>Sign In</h2>
                                </div>

                                <div className="form-group">
                                    <label>Email </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="span3"
                                        placeholder="Enter Email Address"
                                        value={this.state.signInUserData.email}
                                        onChange={ (event) => {
                                            this.setState({
                                                signInUserData: {
                                                    ...this.state.signInUserData,
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
                                        value={this.state.signInUserData.password}
                                        onChange={ (event) => {
                                            this.setState({
                                                signInUserData: {
                                                    ...this.state.signInUserData,
                                                    password: event.target.value
                                                }
                                            });
                                        }}
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="button"
                                        value="Sign In"
                                        className="btn btn-primary"
                                        onClick={() =>
                                            this.setState({
                                                    ...this.state,
                                                },
                                                function(){this.handleSignIn()})
                                        }
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="button"
                                        value="Sign Up"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            this.props.history.push("/SignUp");
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
                    </div>
                </div>

            );

        }
}

export default withRouter(SignIn);