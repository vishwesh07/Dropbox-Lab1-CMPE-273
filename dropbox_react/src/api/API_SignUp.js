import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3004'

export const doSignUp = (payload) =>

    axios({
        method: 'POST',
        url: api+'/SignUp',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials:'include',
        data: payload
    }).then( res => {
        return res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });