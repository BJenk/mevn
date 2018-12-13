
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan')


const messages = require('./db/messages');
const properties = require('./db/properties');

const app = express()

//morgan lists gets in the console
// example: GET /properties 304 - - 18.353 ms
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

  

app.use(function timeLog (req,res,next){
    console.log('time: ', Date.now())
    console.log("req.originalUrl", req.originalUrl)
    console.log("req.ip", req.ip)
    next()
})

app.get('/',(req,res) => {
    res.json({
        message:'behold'
    });
});

app.get('/test', (req, res) => {
    res.send(req.method)
})

app.get('/test/:foo', (req, res) => {
    res.send('test ' + req.params.foo)
})

app.get('/download', (req, res) => {
    res.download('./1.jpg')
})

// app.get('/messages', (req,res) => {
//     messages.getAll().then((messages) => {
//         res.json(messages)
//     })
// })

// app.post('/messages', (req, res) => {
//     //console.log(req.body);
//     messages.create(req.body).then((message) => {
//         res.json(message);
//     }).catch((error) => {
//         res.status(500);
//         res.json(error);
//     });
// });

app.get('/properties', (req,res) => {
    properties.getAll().then((properties) => {
        res.json(properties)
    })
})

app.post('/properties', (req, res) => {
    //console.log(req.body);
    properties.createProperty(req.body).then((property) => {
        res.json(property);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
});

app.get('/properties/:_id', (req,res) => {
    properties.getOneProperty(req.params._id).then((property) => {
        res.json(property)
    })
})

app.get('/properties/:_id/:todoIndex', (req,res) => {
    //res.send('test')
    //res.send(req.params._id + " " + req.params.todoIndex)
    properties.getOneTodoItem(req.params._id).then((property) => {
        var foo = property
        res.json(foo[0].todos[req.params.todoIndex])
    })
    // properties.getOneProperty(req.params._id).then((property) => {
    //     res.json(property)
    // })
})

//DELETE PROPERTY BY ID
app.delete('/properties/:_id', (req, res) => {
    properties.deleteProperty(req.params._id).then((property)=>{
        res.json(property);
    }).catch((error) => {
        res.status(500);
        res.json(error)
    })
})

const port = process.env.PORT || 4000;
app.listen(port, () =>{
    console.log(`listening on ${port}`);
});