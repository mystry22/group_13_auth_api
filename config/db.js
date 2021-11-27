const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/mad';
const dbUrl = '';
mongoose.connect(testDb, {useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('db connection to group 13 okay');
});