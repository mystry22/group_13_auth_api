const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/mad';
const dbUrl = 'mongodb+srv://mystry:mystry.123@lautek.p2i2k.mongodb.net/lautek?retryWrites=true&w=majority';
mongoose.connect(testDb, {useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('db connection to group 13 okay');
});