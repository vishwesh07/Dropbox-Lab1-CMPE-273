import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

class SignIn extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                email: '',
                password: ''
            },
            message: ''
        };
    }

    componentWillMount(){
        // this.props.handleIsSignedIn()
    }

    render() {

        console.log("In RENDER SignIn");

        return (

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
                                    required="required"
                                    value={this.state.userData.email}
                                    onChange={(event) => {
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
                                    onChange={(event) => {
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
                                <input
                                    type="button"
                                    value="Sign In"
                                    className="btn btn-primary"
                                    onClick={() => this.props.handleSignIn(this.state)}
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
                        {this.props.message && (
                        <div  className="alert alert-warning" role="alert">
                        <b>Result :</b>
                        <br/>
                        {this.props.message}
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