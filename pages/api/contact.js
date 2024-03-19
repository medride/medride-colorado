"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(req, res) {
    console.log("in api");
    const { name, email, message } = req.body;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PW
        }
    });

    const mailData = {
        from: "medridetech@outlook.com", // sender address
        replyTo: email,
        to: "medridetech@gmail.com",
        // to: "medridetransportation@gmail.com",
        subject: `Contact form submission from ${name}`,
        html: `
            <p><strong>From: </strong> ${email}</p>
            <p><strong>Message: </strong> ${message}</p>
            `
    }

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    console.log("Message sent: %s", mailData.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    return res.status(200).json({ error: "" });

}

main().catch(console.error);
export default main