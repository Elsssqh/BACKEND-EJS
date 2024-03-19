const express = require('express');
const app = express();
const port = 3000;

const expressLayouts = require('express-ejs-layouts');

//ejs
app.set('view engine', 'ejs');

// layout
app.use(expressLayouts);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home',layout:'home' });
})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})
