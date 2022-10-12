
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static("public"));
var items = [];

app.get('/', (req, res) => {

    const today = new Date();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    }
    let day = today.toLocaleDateString("en-US", options);
    res.render('list', { kindOfDay: day, newListItems:items});

})

app.post('/', (req, res) => {
     let item = req.body.newLi;
   items.push(item);
   res.redirect('/');


})


// Ignore Write code above this line.

app.listen(3000, (req, res) => {
    console.log('listening on 3000.');
})