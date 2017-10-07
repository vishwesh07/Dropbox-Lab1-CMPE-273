import axios from 'axios';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3004'

export const doSignUp = (payload) =>
<<<<<<< HEAD
=======

>>>>>>> master
    axios({
        method: 'POST',
        url: api+'/SignUp',
        headers: {
            'Content-Type': 'application/json'
        },
<<<<<<< HEAD
=======
        credentials:'include',
>>>>>>> master
        data: payload
    }).then( res => {
        return res.data;
    })
        .catch(error => {
            console.log("This is error");
            return error;
<<<<<<< HEAD
        });

// fetch(`${api}/SignUp`, {
//     method: 'POST',
//     headers: {
//         ...headers,
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(payload)
// })
=======
        });
>>>>>>> master
