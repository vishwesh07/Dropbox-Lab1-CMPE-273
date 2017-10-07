import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Homepage from "./Homepage";

class RoutingComponent extends Component {

<<<<<<< HEAD
    state = {
        isSignedIn: false,
        message: '',
        username: ''
    };

    handleIsSignedIn = () => {

=======
    constructor(props) {
        super(props);
        this.state = {
            isSignedIn: false,
            message: '',
            email: ''
        };
    }

    handleIsSignedIn = (email) => {
        // API.doSignUp(this.state)
        //     .then( (response) => {
        //         this.setState({
        //             ...this.state,
        //             message: response.message
        //         });
        //         this.props.handleIsSignedIn();
        //         this.props.history.push("/SignIn");
        //     });
>>>>>>> master
    }

    render() {
        return (
            <div className="container-fluid">

              <Route exact path="/" render={() => (
<<<<<<< HEAD
                    <SignUp isSignedIn={this.state.isSignedIn}/>
                )}/>


                <Route exact path="/SignUp" render={() => (
                    <SignUp isSignedIn={this.state.isSignedIn}/>
                )}/>

                <Route exact path="/SignIn" render={() => (
                    <SignIn isSignedIn={this.state.isSignedIn}/>
=======
                    <SignUp isSignedIn={this.props.isSignedIn}  handleIsSignedIn={this.handleIsSignedIn.bind(this)}/>
                )}/>

                <Route exact path="/SignUp" render={() => (
                    <SignUp isSignedIn={this.props.isSignedIn} handleIsSignedIn={this.handleIsSignedIn.bind(this)}/>
                )}/>

                <Route exact path="/SignIn" render={() => (
                    <SignIn isSignedIn={this.props.isSignedIn} handleIsSignedIn={this.handleIsSignedIn.bind(this)}/>
                )}/>

                <Route exact path="/HomePage" render={() => (
                    <Homepage isSignedIn={this.props.isSignedIn} handleIsSignedIn={this.handleIsSignedIn.bind(this)}/>
>>>>>>> master
                )}/>

            </div>
        );
    }
}

export default withRouter(RoutingComponent);