const express = require('express');
require('./db/mongoose');

const port = process.env.PORT

const app = express();

app.get('/server', (req, res) => {
    res.send({test: "test"});
})



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})