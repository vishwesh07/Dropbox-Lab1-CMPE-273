import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Homepage from "./Homepage";

class RoutingComponent extends Component {

    state = {
        isSignedIn: false,
        message: '',
        username: ''
    };

    handleIsSignedIn = () => {

    }

    render() {
        return (
            <div className="container-fluid">

              <Route exact path="/" render={() => (
                    <SignUp isSignedIn={this.state.isSignedIn}/>
                )}/>


                <Route exact path="/SignUp" render={() => (
                    <SignUp isSignedIn={this.state.isSignedIn}/>
                )}/>

                <Route exact path="/SignIn" render={() => (
                    <SignIn isSignedIn={this.state.isSignedIn}/>
                )}/>

            </div>
        );
    }
}

export default withRouter(RoutingComponent);