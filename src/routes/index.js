const express = require('express');
const axios = require("axios");

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

router.post('/confirmation', (req, res)=> {
    console.log("we hit confirmation .............http://killbill:8080/plugins/hello-world-plugin/Confirmation");
    axios({
        url: 'http://killbill:8080/plugins/hello-world-plugin/Confirmation',
        method: 'post',
        data: req.body,
        headers: { 'X-Killbill-ApiKey': 'bob', 'X-Killbill-ApiSecret': 'lazar', 'X-Killbill-CreatedBy': 'Admin' },
        auth: { username: 'admin', password: 'password' }
      })
        .then(function(response) {
          console.log('SUCCESS went and cameback with no error');
          res.status(200).json(response);
        })
        .catch(function(error) {
          console.error('something went wrong with axios http request');
          res.status(500).json(error);
        });
})



module.exports = router;
