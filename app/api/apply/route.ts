import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const location = formData.get("location") as string;
    const phone = formData.get("phone") as string;
    const file = formData.get("cv") as File;

    const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_SMTP_SERVER,
          port: Number(process.env.EMAIL_SMTP_PORT),
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        } as SMTPTransport.Options);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #2F8BDD 0%, #6FDEF7 100%); padding: 40px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 26px; letter-spacing: -0.5px;">New Job Application</h1>
          <p style="color: rgba(255,255,255,0.9); margin-top: 8px; font-size: 16px;">A candidate has submitted their CV</p>
        </div>
        
        <div style="padding: 32px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Candidate Name</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Email Address</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2F8BDD; text-decoration: none; font-weight: 500;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Location</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${location || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;"><strong>Phone</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${phone || "Not Provided"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1; text-align: center;">
            <p style="margin: 0; color: #475569; font-size: 14px;">
              📎 <strong>Attachment:</strong> ${file.name}
            </p>
            <p style="margin: 5px 0 0 0; color: #94a3b8; font-size: 12px;">The CV is attached to this email.</p>
          </div>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
          Sent via Careers Portal • ${new Date().toLocaleDateString()}
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Careers | Aventura3" <${process.env.EMAIL_USER}>`,
      to: "info@aventra3.com",
      replyTo: email,
      subject: `📄 Job Application: ${name}`,
      html: htmlTemplate,
      attachments: [{ filename: file.name, content: buffer }],
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
