
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + "/date.js");
app.use(bodyParser.urlencoded({ extended: true }));
//Setting up EJS
app.set('view engine', 'ejs');
//loading static files.
app.use(express.static("public"));
let items = [];
let workItems = [];
let weekItems = [];

// Start of get and post requests.

// home route
app.get('/', (req, res) => {

    let day = date.getDate();
    res.render('list', { listTitle: day, newListItems: items });

})
// Post request at home route
app.post("/", (req, res) => {

    let workSubmit = req.body.list; // This gives is the form post button value.


    // Switch statement
    switch (workSubmit) {

        case "Work":
            let workItem = req.body.newLi;
            workItems.push(workItem);
            res.redirect("/work");
            break;
        case "Weekend":
            let weekItem = req.body.newLi;
            weekItems.push(weekItem);
            res.redirect("/weekend");
            break;

        default:
            let item = req.body.newLi;
            items.push(item);
            res.redirect('/');
            break;


    }
})



app.get("/work", (req, res) => {

    res.render('list', { listTitle: "Work", newListItems: workItems });

})

app.get("/weekend", (req, res) => {

    res.render("list", { listTitle: "Weekend", newListItems: weekItems })
})

app.get("/contact", (req, res) => {
    res.render("contact");
})




// Ignore Write code above this line.

app.listen(3000, (req, res) => {
    console.log('listening on 3000.');
})