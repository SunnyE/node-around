// loads in the express library
const express = require('express'); 
const hbs = require('hbs');

// sets the app up 
var app = express(); 
var currentYear = new Date().getFullYear()

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>  {
    // res.send('<h1> Hello Express! </h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear,
        welcomeMessage: 'Welcome one and all'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear
    });
});

// bad send back json with error message

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'error handling request'
    });
});

app.get('/help', (req, res) => {
    res.send();
});


app.listen(3000, () => {
    console.log('server listening on port 3000');
});