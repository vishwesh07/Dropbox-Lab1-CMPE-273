import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';
// import * as API_Docs from '../api/API_Docs';
import * as API_UploadFile from '../api/API_UploadFile';
import * as API_CreateFolder from '../api/API_CreateFolder';
import * as API_GetFiles from '../api/API_GetFiles';
import * as API_StarAction from '../api/API_StarAction';
import strImg from '../components/stared.jpg';
import unstrImg from '../components/unstared.png';

class HomePage extends Component{

    constructor(props) {
        super(props);
        this.st = {currentPath: './public/upload/'+ this.props.email +'/'};
        this.state = {
            userData: {
                email: '',     // problem
                username: '',
                user_docs: []
            },
            message: '',
            foldername : '',
            currentPath : './public/upload/'+ this.props.email +'/'
        };
    }

    componentWillMount(){
        if(this.props.username === undefined){
            this.props.history.push("/");
        }
    }

    componentDidMount() {

        let state = this.state;
        console.log("In Did Mount "+state.currentPath);

        API_GetFiles.getDocs(state)
            .then((data) => {
                console.log(data);
                this.setState({
                        ...this.state,
                        user_docs: data
                });
            });
    };

    handleFileUpload = (event) => {

        const payload = new FormData();

        payload.append('myfile', event.target.files[0]);

        API_UploadFile.uploadFile(payload)
            .then((status) => {

                if (status === 204) {
                    API_GetFiles.getDocs(this.st)
                        .then((data) => {
                            this.setState({
                                ...this.state,
                                user_docs: data,
                            });
                        });
                }

                else if(status === 304){
                    this.setState({
                        ...this.state,
                        message: '!! Similar file already exists. !!'
                    });
                }

            });
    };

    handleFolderCreation = () => {

        this.st.foldername = this.state.foldername;

        console.log("In handleFolderCreation "+this.st.currentPath+" "+this.st.foldername);

        API_CreateFolder.createFolder(this.st)
            .then((status) => {

                if (status === 204) {
                    API_GetFiles.getDocs(this.st)
                        .then((data) => {
                            this.setState({
                                ...this.state,
                                user_docs: data,
                                message: ''
                            });
                        });
                }

                else if(status === 303){
                    this.setState({
                        ...this.state,
                        message: '!! Required Fields are not filled !!'
                    });
                }

                else if(status === 304){
                    this.setState({
                        ...this.state,
                        message: '!! Similar folder already exists. !!'
                    });
                }

            });
    };

    handleStarAction = (doc) => {
        API_StarAction.starAction(doc)
            .then(() => {
                API_GetFiles.getDocs(this.st)
                    .then((data) => {
                        console.log(data);
                        this.setState({
                            ...this.state,
                            user_docs: data
                        });
                    });
        });
    };

    navigateFolder = (event) => {
        console.log("In navigateFolder");
        let folder = event.target.value;
        let navigationPath = this.st.currentPath+folder +"/";
        this.st = {currentPath: navigationPath};
        console.log("New Path"+ navigationPath);
        console.log("In Navigate Folder "+this.st.currentPath);
        API_GetFiles.getDocs(this.st)
            .then((data) => {
                console.log(data);
                this.setState({
                    ...this.state,
                    user_docs: data
                });
            });
    };

    displayStar = (doc) => {
        if(doc.Star === 0){
            return (<img src={unstrImg} height={'20px'} width={'20px'} alt={'Not available'} onClick={() => this.handleStarAction(doc)}/>);
        }
        else{
            return (<img src={strImg} height={'20px'} width={'20px'} alt={'Not available'} onClick={() => this.handleStarAction(doc)}/>);
        }
    };

    displayDocument = (doc) => {
        if(doc.DocType === "folder"){
            return ( <button type="button" className="btn btn-link" onClick = {(event) => this.navigateFolder(event)} value={doc.DocName} > {doc.DocName} </button>);
        }
        else{
            return doc.DocName   ;
        }
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

                        {this.state.message}

                        <div className="form-group">
                            <label>Folder Name *</label>
                            &nbsp; &nbsp; &nbsp;
                            <input
                                type="text"
                                name="folderName"
                                className="span3"
                                placeholder="Enter Folder Name"
                                required="required"
                                autoFocus="autoFocus"
                                onChange={(event) => {
                                    this.setState({
                                        ...this.state,
                                        foldername: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <input
                            type="button"
                            value="Create Folder"
                            class="btn"
                            onClick={this.handleFolderCreation}
                        />

                        <br/> <br/>

                        <div class="upload-btn-wrapper">
                            <button class="btn">Upload a file</button>
                            <input className={'fileupload'} type="file" name="myfile" onChange={this.handleFileUpload}/>
                        </div>

                        <br/> <br/>

                        Current Path : {this.st.currentPath}

                        <br/> <br/>

                        {this.state.user_docs && (this.state.user_docs.map(doc => (
                            <p>
                                {this.displayStar(doc)}
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                {this.displayDocument(doc)}
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