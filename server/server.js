const path = require('path');
const express = require('express');
const request = require('request');

const app = express();
const publicPath = path.join(__dirname, '../', 'public');

let url = 'localhost:3000/';

request(url,function(err, response, body){
    if(err){
        //console.log(`error: ${error}`)
    } else {
        //console.log(`body: ${body}`);
    }
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/', (req, res) => {
    res.render('index.html');
});

app.post('/postedForms', (req, res) => {
    console.log(req.body);
    res.redirect('/postedForms')
});

app.listen(3000, () => {
    console.log(`Server is up and running on ${url}`);
});

