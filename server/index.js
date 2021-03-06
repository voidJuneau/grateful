
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
require('./db/mongoose');

const userRouter = require('./routers/user');
const postRouter = require('./routers/post');

const port = process.env.PORT

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use(express.static(path.join('public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');  
    next();
})

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})