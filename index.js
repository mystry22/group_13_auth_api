const express = require('express');
const app = express();
const db_conn = require('./config/db');
const cors = require('cors');
//const cart = require('./routes/cart');
//const product = require('./routes/products');
//const token = require('./routes/token');
const registration = require('./route/registration');
const auth = require('./route/auth');



//initialisations

app.use(cors());
app.use(express.json());



//routes

app.use('/api/registration',registration);
app.use('/api/auth',auth);


const PORT = process.env.PORT || 3222;

app.listen(PORT, ()=>{
    console.log('listening to port ' + PORT);
})
