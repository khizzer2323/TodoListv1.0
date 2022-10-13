
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static("public"));
let items = [];
let workItems = [];
let weekItems = [];

app.get('/', (req, res) => {

    const today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    }
    let day = today.toLocaleDateString("en-US", options);
    res.render('list', { listTitle: day, newListItems: items });

})

app.post("/", (req, res) => {

    let workSubmit = req.body.list;

    // if (workSubmit === "Work") {
    //     let workItem = req.body.newLi;
    //     workItems.push(workItem);
    //     res.redirect("/work");
    //  }
    //   if(workSubmit ==="weekend"){
    //     let weekItem = req.body.newLi;
    //     weekItems.push(weekItem);
    //     res.redirect("/weekend");
    //  }
    //   else {
    //     let item = req.body.newLi;
    //     items.push(item);
    //     res.redirect('/');

    //  }

    // Using Switch Statement

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





// Ignore Write code above this line.

app.listen(3000, (req, res) => {
    console.log('listening on 3000.');
})