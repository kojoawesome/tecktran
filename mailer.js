import nodemailer from "nodemailer";
import express from "express";

const router = express.Router();

// Validation middleware
const validateFormData = (req, res, next) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: "Name, email, and message are required fields" 
    });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: "Please provide a valid email address" 
    });
  }
  
  next();
};

router.post("/send-email", validateFormData, async (req, res) => {
  const { name, email, company, phone, service, message } = req.body;

  // Create a transporter object using SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "localhost",
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // HTML email content for better formatting
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 5px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ''}
        <div style="margin-top: 20px;">
          <strong>Message:</strong>
          <p style="background: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #666;">
        This email was sent from the Tecktran contact form.
      </p>
    </div>
  `;

  const mailOptions = {
    from: `"${name}" <${process.env.SMTP_USER}>`, // Use authenticated email as sender
    replyTo: email, // Allow replies to the form submitter
    to: "info@tecktran.com",
    subject: `New Inquiry from ${name} - Tecktran Contact Form`,
    html: htmlContent,
    text: `
Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}
${phone ? `Phone: ${phone}\n` : ''}
${service ? `Service: ${service}\n` : ''}
Message: ${message}
    `.trim(),
  };

  try {
    // Test the transporter configuration first
    await transporter.verify();
    
    // Send the email
    await transporter.sendMail(mailOptions);
    
    // Also send a confirmation email to the submitter
    const confirmationOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting Tecktran",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting Tecktran!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you shortly. Our team is reviewing your inquiry and will respond as soon as possible.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3>Your message:</h3>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Best regards,<br>The Tecktran Team</p>
          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            If you didn't submit this form, please ignore this email.
          </p>
        </div>
      `,
    };
    
    await transporter.sendMail(confirmationOptions);
    
    res.status(200).json({ 
      message: "Email sent successfully! We'll be in touch soon." 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      message: "Failed to send email. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;
