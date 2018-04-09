const express = require('express');

const port = 4000;

var app = express();

app.get('/' , (req , res)=> {
    res.status(404).send('Hello World');
});

// http GET /users
app.get('/user' , (req , res) => {
    // var user = {name : 'Amin' , age: 24};
    res.send([{
        name : 'Amin',
        age : 24
    }]);
});


app.listen(port , () => {
    console.log(`Listening port on ${port}`)
});

module.exports.app = app;