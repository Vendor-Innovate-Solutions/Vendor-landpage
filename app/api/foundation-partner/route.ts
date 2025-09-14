import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, company, title, challenge } = await request.json();

    // Create transporter using your Gmail configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'venkatesh.k21062005@gmail.com',
        pass: 'ywqc fghh kgdv kaqe', // Your app password
      },
    });

    // Email content
    const mailOptions = {
      from: 'venkatesh.k21062005@gmail.com',
      to: 'venkatesh.k21062005@gmail.com',
      subject: '🚀 New Foundation Partner Application - CFN',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Foundation Partner Application</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #3b82f6); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #2563eb; }
            .field-label { font-weight: bold; color: #1e40af; margin-bottom: 5px; }
            .field-value { color: #374151; }
            .challenge-box { background: #eff6ff; padding: 20px; border-radius: 8px; border: 1px solid #dbeafe; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; }
            .urgency { background: #fef2f2; color: #dc2626; padding: 10px; border-radius: 6px; margin-top: 20px; text-align: center; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🧠 CFN Foundation Partner Application</h1>
              <p>New application received for the exclusive Foundation Partner Program</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Applicant Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">🏢 Company:</div>
                <div class="field-value">${company}</div>
              </div>
              
              <div class="field">
                <div class="field-label">💼 Title/Position:</div>
                <div class="field-value">${title}</div>
              </div>
              
              <div class="field">
                <div class="field-label">⚠️ Biggest Supply Chain Challenge:</div>
                <div class="challenge-box">
                  ${challenge}
                </div>
              </div>
              
              <div class="urgency">
                ⏰ This application was submitted on ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background: #f0f9ff; border-radius: 8px; border: 1px solid #0ea5e9;">
                <h3 style="color: #0369a1; margin-top: 0;">🎯 Next Steps:</h3>
                <ul style="color: #374151;">
                  <li>Review application within 48 hours</li>
                  <li>Schedule strategic consultation call</li>
                  <li>Assess fit for Foundation Partner Program</li>
                  <li>Send invitation or feedback</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was automatically generated from the CFN website foundation partner form.</p>
              <p><strong>Cognitive Freight Network</strong> - Building the Future of Supply Chain Intelligence</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New CFN Foundation Partner Application

Name: ${name}
Company: ${company}
Title: ${title}
Supply Chain Challenge: ${challenge}

Submitted: ${new Date().toLocaleString()}

Next Steps:
- Review application within 48 hours
- Schedule strategic consultation call
- Assess fit for Foundation Partner Program
- Send invitation or feedback
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}