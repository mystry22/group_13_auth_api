const nodemailer = require('nodemailer');


// Email Transporter
const transport =()=>{
    const transport = nodemailer.createTransport({
        host: "mail.fink.com.ng",
        port: 587,
        secure: false, 
        auth: {
          user: "talkto@fink.com.ng",
          pass: 'Mystry.22'
        },
        tls:{
            rejectUnauthorized:false
        }
      });

      return transport;
}
// generate OTP
const genOTP =()=>{
    const min =1000;
    const max = 9999;
    const delta = max-min;
    const gen = Math.random();
    const initVal = delta * gen;
    const floored = Math.floor(initVal);
    const conToString = floored.toString();
    const OTP = conToString;
    return OTP;
}

// get today's date
const toDate =()=>{
    const today = new Date();
    return today;
}



//Generate And Send Mail Function
const mailOTP = async(to)=>{
    const reg_date = toDate();
    const OTP = genOTP();
    setUserOTP(to,OTP,reg_date);
    let msg = '';
    const transporter = transport();
    const custom = `
                <h2>Molenu</h2><br /> <br />

                 Hi Dear, <br />
                    Kindly use the code ${OTP} to complete your registration <br /> <br />
                    
                Best Regards
                 `;
   const mailOptions = {
       from: '<talkto@fink.com.ng>',
       to: to,
       subject: "Molenu Email Verification",
       html: custom
   }

   const mailRes = await transporter.sendMail(mailOptions);
   msg =  mailRes.response
   return msg.substring(4,6);

   
}


const welcome = async(to)=>{
    let msg = '';
    const transporter = transport();
    const custom = `
                <h2>Group 13 Capstone Project</h2><br /> <br />

                 Hi Dear , <br /><br />

                    Thank you for your interest in our (MAD) test project we wish you enjoy the app<br /><br />

                     <br />
                Best Regards
                 `;
   const mailOptions = {
       from: 'Group 13 <talkto@fink.com.ng>',
       to: to,
       subject: "MAD Group 13",
       html: custom
   }

   const mailRes = await transporter.sendMail(mailOptions);
   msg =  mailRes.response
   return msg.substring(4,6);
}

module.exports.mailOTP = mailOTP;
module.exports.toDate = toDate;
module.exports.welcome =welcome;