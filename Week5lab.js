let express = require('express');
let router = express.Router();
let path2Views = __dirname + "/views";
//const morgan = require('morgan');

let db = [];


router.get('/', function (req, res) { //home page
    res.sendFile(path2Views + '/index.html');
});

router.get('/addTask', function (req, res) { //adding task page
    res.sendFile(path2Views + '/addTask.html');
});

router.post('/formTask', function (req, res) {
    console.log(req.body.newTask);
    console.log(req.body.newDue);
    console.log(req.body.newDesc);

    let newTaskName = req.body.newTask;
    let newTaskDue = req.body.newDue;
    let newTaskDesc = req.body.newDesc;

    let obj = {
        taskName: newTaskName,
        taskDue: newTaskDue,
        taskDesc: newTaskDesc
    };
    console.log("////////////////////////////////////////////////////");
    console.log(obj);
    db.push(obj);
    //res.send('Your input has been saved.')
    res.render("listTask.html", {
        taskDb: db
    });
})

router.get('/listTask', function (req, res) { //listing task page
    res.render("listTask.html", {
        taskDb: db
    });

});



module.exports = router;