import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3004'

export const doSignIn = (payload) =>

    axios({
        method: 'POST',
        url: api+'/SignIn',
        headers: {
            'Content-Type': 'application/json'
        },
        data: payload
    }).then( res => {
        return res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

// fetch(`${api}/signIn/`, {
//     method: 'GET',
//     headers: {
//         ...headers,
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(payload)
// })