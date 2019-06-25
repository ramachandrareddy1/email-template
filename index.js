let key='';//add send grid api key
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var options = {
    auth: {
        api_key: key
    }
}
var mailer = nodemailer.createTransport(sgTransport(options));
const ejs = require('ejs');
const EmailTemplate = require('email-templates-v2').EmailTemplate;
var path = require('path')

    var templateDir = path.join(__dirname, 'templates', 'test');
    var newsletter = new EmailTemplate(templateDir)
    var user = {name: 'Joe', pasta: 'spaghetti'}
    newsletter.render(user,(err,result)=>{
        if(err) console.log(err);
        else {
            console.log(result);
            var mailOptions = {
                from: 'rcrmca1000@gmail.com',
                to: 'ramachandrareddy.mean@gmail.com',
                subject: 'some subject data',
                text: "A user subject line has won.\n",
                html: result.html
            }
            mailer.sendMail(mailOptions,(err,data)=>{
                if(err) console.log(err);
                else{
                    console.log('sucess:',data);
                }
            })
        }
    });

 

