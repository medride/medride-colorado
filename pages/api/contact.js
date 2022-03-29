import nodemailer from "nodemailer";

export default async (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PW
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            replyTo: email,
            to: "medridetransportation@gmail.com",
            subject: `Contact form submission from ${name}`,
            html: `
            <p><strong>From: </strong> ${email}</p>
            <p><strong>Message: </strong> ${message}</p>
            `
        });
    } catch (error) {
        return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });
};