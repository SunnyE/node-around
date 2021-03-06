// loads in the express library
const express = require('express'); 
const hbs = require('hbs');
const fs = require('fs');

// sets the app up 
var app = express(); 


// sets up the server to handle partials 
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`

    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log'); 
        }
    });
    console.log(log);
    next(); 
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs', {
//         pageTitle: 'Maintenance Page',
        
//     });
// });

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

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
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