import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { company, name, email, service, timeline, description } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_SERVER,
      port: Number(process.env.EMAIL_SMTP_PORT),
      secure: true,
      auth: {
        type: "LOGIN",
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML Email Template updated for the new fields
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background: linear-gradient(90deg, #2F8BDD 0%, #6FDEF7 100%); padding: 35px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 800; text-transform: uppercase;">New Business Enquiry</h1>
          <p style="color: rgba(255,255,255,0.9); margin-top: 8px; font-size: 16px;">Aventra³ Infrastructure & Talent Request</p>
        </div>
        
        <div style="padding: 30px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 180px;"><strong>Client Name</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Company</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${company || "Not Provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Work Email</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2F8BDD; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Support Needed</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                <span style="background-color: #E0F7FC; color: #05183D; padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: bold; border: 1px solid #2F8BDD;">
                  ${service}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Hiring Timeline</strong></td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${timeline}</td>
            </tr>
          </table>
          
          <div style="margin-top: 35px;">
            <p style="color: #05183D; margin-bottom: 12px; font-size: 15px;"><strong>Requirement Details:</strong></p>
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; color: #334155; line-height: 1.7; border-left: 5px solid #2F8BDD; font-size: 15px;">
              ${description}
            </div>
          </div>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 25px; text-align: center; color: #94a3b8; font-size: 13px;">
          This enquiry was sent via the <strong>Aventra³ Insights</strong> Contact Form.
          <br/> Confidential Enquiry System © 2026
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Aventra3 Lead System" <${process.env.EMAIL_USER}>`,
      to: "hello@aventura3.com",
      replyTo: email,
      subject: `🚀 [New Lead] ${name} | ${service} | ${timeline}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
