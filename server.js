// loads in the express library
const express = require('express'); 
const hbs = require('hbs');

// sets the app up 
var app = express(); 


// sets up the server to handle partials 
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// registers the get year function as a helper so it can be accessed easier
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase(); 
});

app.get('/', (req, res) =>  {
    // res.send('<h1> Hello Express! </h1>');
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome one and all'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        
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