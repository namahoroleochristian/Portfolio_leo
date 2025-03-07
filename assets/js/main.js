
AOS.init();
AOS.init({
    offset: 120,
    delay: 0,
    easing: 'ease',
    duration: 700,
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});
//_______________--_____________ tred using sendgrid_________________maybe it was down____so i used emailjs____
// // THIS IS TO IMPORT SENDGRID IT ,MUST BE INSTALLED FIRST BY NPM I @SENDGRID/MAIL
// const sendgrid = require('@sendgrid/mail')
// // THIS IS IMPORTING DOTENV I HOPE ITS GLOBALLY INTO OUR FILE
// require('dotenv').config();
// //CREATING AN ASYNCHRONOUS FUNCTION FOR ENDING EMAIL WITH 3 PARAMETERS TO,FROM,SUBJECT AND CONTENT
// async function sendMail(to, from, subject, content) {
//     //using try and catch to identify any error if present(debugging purposes)
//     try {
//         //INITIALISING SENDGRID
//         sendgrid.setApiKey(process.env.SENDGRID_KEY)
//         //initialing  THE EMAIL
//         const email = await sendgrid.send({
//             to, from, subject, text: content
        
//         })
//         return email
//     }
//     catch (error){
//         //throwing or showing the error inthe concole
//         console.error('Error:'+error)

//     }
// }
// //I HOPE THIS IS INVOKING THE SENDMAIL FUNCTION WITH THE ARGUMENTS FOR THE INITIALIZED PARAMETERS
// (async () => {
//     //to view the respone of the email/instanciation of the parameters
//    const emailResponse= sendMail('leonamahoro1@gmail.com', 'sendgridexample@example.com', 'this is a test', 'this willl tell you that test was a great success');
// console.log(emailResponse);
// })
/*    ---------  beginning of email js ---------- */

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_5fb5za8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('email sent');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});