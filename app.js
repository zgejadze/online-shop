const path = require('path')  
const express = require('express');

const db = require('./data/database');

const authRoutes = require('./routes/auth.routes')  //routes related to authentification

const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));

app.use(authRoutes)


db.conectToDatabase().then(function (){
    app.listen(3000);
}).catch(function(error){
    console.log('failed to connect to the database!')
    console.log(error)
})