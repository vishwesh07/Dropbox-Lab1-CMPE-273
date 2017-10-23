import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import SignUp from "./SignUp";
import * as API_SignUp from '../api/API_SignUp';
import SignIn from "./SignIn";
import * as API_SignIn from '../api/API_SignIn';
// import * as API_IsSignedIn from "../api/API_IsSignedIn";
import Homepage from "./HomePage";
import * as API_SignOut from "../api/API_SignOut";

class RoutingComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            signInMessage: undefined,
            signUpMessage: undefined,
            email: undefined,
            username: undefined
        };
    }

    // handleIsSignedIn = () => {
    //
    //     console.log("In handle IsSignedIn, isSignedIn ="+this.state.isSignedIn)
    //
    //     if(!this.state.isSignedIn)
    //     {
    //         API_IsSignedIn.checkIsSignedIn()
    //             .then( (response) => {
    //
    //                 if(response.status === 304){
    //
    //                     this.setState( (state) =>{
    //                         state.isSignedIn = true;
    //                         state.username = response.username;
    //                     });
    //
    //                     console.log("In handle IsSignedIn, status = "+ response.status+" isSignedIn = "+this.state.isSignedIn+" remaining in same page"+response.username);
    //
    //                     return response;
    //                 }
    //
    //
    //                 else{
    //
    //                     this.setState( (state) =>{
    //                         state.isSignedIn = false;
    //                         state.username = '';
    //                     });
    //
    //                     console.log("In handle IsSignedIn, status = "+ response.status+" isSignedIn = "+this.state.isSignedIn+" pushing to SignIn");
    //
    //                     return response;
    //                 }
    //                 return response;
    //             });
    //     }
    //
    //
    // }

    handleSignUp = (state) => {

        console.log("In handle SignUp, isSignedIn ="+this.state.isSignedIn)

        API_SignUp.doSignUp(state)
            .then( (response) => {

                if(response.status === 200){

                    this.setState({
                        ...this.state,
                        isSignedIn: true,
                        signUpMessage: undefined,
                        signInMessage: undefined,
                        email: response.email,
                        username: response.username
                    });

                    console.log("In handle SignUp, status = "+ response.status+" isSignedIn = "+this.state.isSignedIn+" pushing to HomePage");

                    this.props.history.push("/HomePage");
                }

                else if(response.status === 401){

                    this.setState({
                        ...this.state,
                        isSignedIn: false,
                        signInMessage: undefined,
                        username: undefined,
                        email: undefined,
                        signUpMessage: 'User Already Exists'
                    });

                }

                else if(response.status === 303){

                    this.setState({
                        ...this.state,
                        isSignedIn: false,
                        signInMessage: undefined,
                        username: undefined,
                        email: undefined,
                        signUpMessage: '!! Required Fields are not filled !! '
                    });

                }

            });
    }

    handleSignIn = (state) => {

        console.log("In handle SignIn, isSignedIn ="+this.state.isSignedIn)

        API_SignIn.doSignIn(state)
            .then( (response) => {

                console.log("In response of Sign In : "+response.status);

                if(response.status === 200){

                    this.setState({
                        ...this.state,
                        isSignedIn: true,
                        signInMessage: undefined,
                        signUpMessage: undefined,
                        email: response.email,
                        username: response.username
                    });

                    console.log("usernameSet : "+this.state.username);

                    this.props.history.push("/HomePage");
                }

                else if(response.status === 401){

                    this.setState({
                        ...this.state,
                        isSignedIn: false,
                        signUpMessage: undefined,
                        username: undefined,
                        email: undefined,
                        signInMessage: 'Invalid Username or Password'
                    });

                    console.log("In handle SignIn, status = "+ response.status+" isSignedIn = "+this.state.isSignedIn+" remaining in same page");

                }

                else if(response.status === 303){

                    this.setState({
                        ...this.state,
                        isSignedIn: false,
                        signUpMessage : undefined,
                        username: undefined,
                        email: undefined,
                        signInMessage: '!! Required Fields are not filled !! '
                    });

                }

            });
    }

    handleSignOut = () => {

        API_SignOut.doSignOut()
            .then( (response) => {

                if(response.status === 304){

                    this.setState({
                        ...this.state,
                        isSignedIn: false,
                        signInMessage: undefined,
                        signUpMessage: undefined,
                        email: undefined,
                        username: undefined
                    });

                    console.log("usernameUnSet : "+this.state.username);

                    this.props.history.push("/");
                }
            });
    }

    render() {
        return (

            <div className="container-fluid">

                <Route exact path="/" render={() => (
                    <SignIn message={this.state.signInMessage} username={this.state.username} handleSignIn={this.handleSignIn} />
                )}/>

                <Route exact path="/SignUp" render={() => (
                    <SignUp message={this.state.signUpMessage} username={this.state.username} handleSignUp={this.handleSignUp} />
                )}/>

                <Route exact path="/SignIn" render={() => (
                    <SignIn message={this.state.signInMessage} username={this.state.username} handleSignIn={this.handleSignIn} />
                )}/>

                <Route exact path="/HomePage" render={() => (
                    <Homepage email={this.state.email} username={this.state.username} handleSignOut={this.handleSignOut} />
                )}/>

                <Route exact path="/Activity" render={() => (
                    <Homepage email={this.state.email} username={this.state.username} handleSignOut={this.handleSignOut} />
                )}/>

            </div>

        );
    }
}

export default withRouter(RoutingComponent);