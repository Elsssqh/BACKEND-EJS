const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

//ejs
app.set('view engine', 'ejs');

// layout
app.use(expressLayouts);

//static express
app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.render('home')
});

app.get('/about', (req, res) => {
    res.render('About', { title: 'About',layout:'home' });
})
app.get('/ourBooks', (req, res) => {
    res.render('ourBooks', { title: 'ourBooks',layout:'ourBooks' });
})

app.get('/search', (req, res) => {
    res.render('search', { title: 'search',layout:'search' });
})
app.get('/trolley', (req, res) => {
    res.render('trolley', { title: 'trolley',layout:'trolley' });
})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})
