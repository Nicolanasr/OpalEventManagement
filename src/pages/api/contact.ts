import { NextApiResponse, NextApiRequest } from "next";

const nodemailer = require('nodemailer');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body['first-name']);

    try {
        const message = {
            from: req.body.email,
            to: "info@opaleventmanagement.com",
            subject: `${req.body["first-name"]} ${req.body["last-name"]} - ${req.body["email"]} - ${req.body["phone-number"] }`,
            text: req.body.message,
            html: `<b>First Name: </b> <span>${req.body["first-name"]}</span> <br />
<b>Last Name: </b> <span>${req.body["last-name"]}</span> <br />
<b>Email: </b> <span>${req.body["email"]}</span> <br />
<b>Phone number: </b> <span>${req.body["phone-number"]}</span> <br />
<b>Message: </b> <span>${req.body["message"]}</span> <br />`,
          };
        
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "opaleventmanagementlb@gmail.com",
                pass: "kihzelwbwasdjcdt",
            },
        });

        transporter.sendMail(message, (err: any, info: any) => {
            if (err) {
                res.status(404).json({
                    error: `Connection refused at ${err.address}`
                });
            } else {
                console.log(info)
                res.status(200).json({
                    success: `Message delivered to ${info.accepted}`
                });
            }
        });
    } catch (error:any) {
        res.status(500).json({"message":error.message})
    }

  }