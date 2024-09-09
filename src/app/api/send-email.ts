import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";
import type { EmailFormData, EmailResponse } from "../../../types";

// why not a POST?
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body as EmailFormData;
}

// create a transporter object
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   secure: process.env.SMTP_SECURE === "true",
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });
