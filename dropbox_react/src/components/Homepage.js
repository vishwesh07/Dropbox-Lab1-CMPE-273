import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
import * as API_File from '../api/API_File';
// import PropTypes from 'prop-types';

class HomePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                email: '',     // problem
                username: '',
                user_files: []
            },
        };
    }

    componentWillMount(){
        // this.props.handleIsSignedIn()
    }

    componentDidMount() {
        API_File.getFiles()
            .then((data) => {
                console.log(data);
                this.setState({
                    user_files: data
                });
            });
    };

    handleFileUpload = (event) => {

        const payload = new FormData();

        payload.append('myfile', event.target.files[0]);

        API_File.uploadFile(payload)
            .then((status) => {

                if (status === 204) {
                    API_File.getFiles()
                        .then((data) => {
                            this.setState({
                                user_files: data
                            });
                        });
                }

            });
    };

    render() {

        console.log("In RENDER HomePage");

        return (

            <div className="container-fluid">

                <div className="row">

                    <div className="col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-sm-2 col-md-2 col-lg-2" style={{border: "10px"}}>

                    </div>

                    <div className="col-sm-offset-8 col-md-offset-8 col-lg-offset-8 col-sm-8 col-md-8 col-lg-8">
                        <br/> <br/> <br/> <br/>

                        <input
                            type="button"
                            value="Sign Out"
                            className="btn btn-primary"
                            onClick={this.props.handleSignOut}
                        />

                        <br/> <br/>

                        Welcome

                        <br/> {this.props.username}

                        <br/> <br/>

                        <input
                            className={'fileupload'}
                            type="file"
                            name="myfile"
                            onChange={this.handleFileUpload}
                            // multiple={"multiple"}
                        />

                        {/*{this.state.images.map(tile => (*/}
                            {/*<p>*/}
                                {/*<img src={'http://localhost:3001/'+tile.img} alt={'myimage'}/>*/}
                            {/*</p>*/}
                        {/*))}*/}

                    </div>

                    <div className="col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-sm-2 col-md-2 col-lg-2">

                    </div>

                </div>

            </div>

        );

    }

}

export default withRouter(HomePage);