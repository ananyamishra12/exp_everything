const express = require("express");
const app= express();
const path= require('path');
const PORT= process.env.PORT || 5000;
const logger=require('./logger');
const exphbs= require('express-handlebars');
// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


//Initializing middleware
//app.use(logger);

//HandleBars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.self('view engine', 'handlebars');

//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//sets static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, ()=>
    console.log("Listening at 5000")
);