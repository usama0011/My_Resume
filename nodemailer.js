import nodemailer from 'nodemailer';
const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;


export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    pool:true,
    port: 465,
    secure: true,
    service:'gmail',
    auth:{
        user:email,
        pass:password
    }
})

