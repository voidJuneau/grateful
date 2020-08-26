const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const postRouter = require('./routers/post');

const port = process.env.PORT

const app = express();

app.use(express.json());
app.use('/app/user', userRouter);
app.use('/app/post', postRouter);


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})