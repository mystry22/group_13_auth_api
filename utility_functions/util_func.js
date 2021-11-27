const nodemailer = require('nodemailer');

const genAccontNumber = ()=>{
    const custom = "0";
    const min =100000000;
    const max = 999999999;
    const delta = max-min;
    const gen = Math.random();
    const initVal = delta * gen;
    const floored = Math.floor(initVal);
    const conToString = floored.toString();
    const accountNumber = custom  + conToString;
    return accountNumber;
    

}

const transRef = ()=>{
    const custom = "22";
    const min =1000000000;
    const max = 9999999999;
    const delta = max-min;
    const gen = Math.random();
    const initVal = delta * gen;
    const floored = Math.floor(initVal);
    const conToString = floored.toString();
    const transRef = custom  + conToString;
    return transRef;
    

}

const getCustomDate = ()=>{
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    const day = today.getDate();

    const factor = "0"
    if(month <= 9){
        month = factor + month ;
    }

    const todate = day + '-' + month + '-' + year;
    return today;
    
}

const getCustomDatePlus = ()=>{
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
  
    return tomorrow;
    
}

const getCustomDateMinus = ()=>{
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() - 1);
  
    return tomorrow;
    
}

const notificationRef = ()=>{
    const custom = "Ref";
    const min =1000000000;
    const max = 9999999999;
    const delta = max-min;
    const gen = Math.random();
    const initVal = delta * gen;
    const floored = Math.floor(initVal);
    const conToString = floored.toString();
    const transRef = custom  + conToString;
    return transRef;

}

const transport =()=>{
    const transport = nodemailer.createTransport({
        host: "mail.lautekgloballimited.com.ng",
        port: 587,
        secure: false, 
        auth: {
          user: "talk@lautekgloballimited.com.ng",
          pass: 'talk2lautek'
        },
        tls:{
            rejectUnauthorized:false
        }
      });

      return transport;
}





module.exports.genAccontNumber = genAccontNumber;
module.exports.getCustomDate = getCustomDate;
module.exports.transRef = transRef;
module.exports.notificationRef = notificationRef;
module.exports.transport = transport;
module.exports.getCustomDatePlus = getCustomDatePlus;
module.exports.getCustomDateMinus = getCustomDateMinus;