const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes= require('./routes/routes')

const app = express();

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(routes)

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log("Server 3000");
})