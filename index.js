const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())

const fruits = {
    name: 'banana', 
    price: 400
}

app.get('/', (req, res) => {
    res.send('thank you for your response nodemon');
});

app.get('/fruits/banana', (req, res) => {
    res.send(fruits)
});
const user = ['kamal', 'jamal', 'sabir', 'jabil'];

app.get('/users/:id', (req, res) => {
    const Id = req.params.id
    const name = user[Id]
    // res.send(name)
    res.send({Id, name})
})

app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 55;
    res.send(req.body)
})

app.listen(8000, () => console.log('Listening to port 8000'));