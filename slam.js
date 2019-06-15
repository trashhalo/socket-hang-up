const axios = require('axios');
const test = Array(1000).fill(0);
Promise.all(test.map(() =>{
    return axios.get('http://localhost:3000')
}))
.then(() => console.log('done'))
