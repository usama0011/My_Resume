import { transporter } from "../../nodemailer";

export default async function handler(req, res) {
    if(req.method === "POST"){
        const data = req.body;
        const myemailaddress = process.env.EMAIL
        if(!data.name || !data.email || !data.subject || !data.message){
            res.status(400).json({message:"Bed Request something Missing"})
        }
        try {
           await transporter.sendMail({
            from:data.email,
            to:myemailaddress,
            subject:data.subject,
            text:data.message,
            html:`<h1>${data.subject}</h1><p>${data.message}</p>`
            },(err,info)=>{
                if(err){
                    console.log(err.message);
                }else{
                    console.log(info);
                }
            })
            return res.status(200).json({success:true})
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
  }
  