//RECEBENDO AS REQUISIÇÕES E FORMULANDO OS RES 
const axios = require('axios');

module.exports = {

     async store(req, res) {
           
         const { username } = req.body;

         const response = await  axios.get(`https://wakatime.com//api/v1/users/${username}`);
          console.log(response.data)

         return res.json(response.data);

     }
};

// https://wakatime.com/api/v1/users/filhosergio 
// resolver 401 error api wakatime  