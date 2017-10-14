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
                user_docs: []
            },
        };
    }

    componentWillMount(){
        if(this.props.username === undefined){
            this.props.history.push("/");
        }
    }

    componentDidMount() {
        API_File.getFiles()
            .then((data) => {
                console.log(data);
                this.setState({
                    user_docs: data
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
                                user_docs: data
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

                        <div class="upload-btn-wrapper">
                            <button class="btn">Upload a file</button>
                            <input className={'fileupload'} type="file" name="myfile" onChange={this.handleFileUpload}/>
                        </div>

                        {this.state.user_docs && (this.state.user_docs.map(doc => (
                            <p>
                                {doc.DocName}
                            </p>
                        )))}

                    </div>

                    <div className="col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-sm-2 col-md-2 col-lg-2">

                    </div>

                </div>

            </div>

        );

    }

}

export default withRouter(HomePage);