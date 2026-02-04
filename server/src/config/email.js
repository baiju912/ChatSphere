import nodemailer from "nodemailer";

const sendEmail = async (to, subject, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Maa Baglamukhi Mandir" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: message,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;










// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: false,
//   auth: {
//     user: "apikey",
//     pass: process.env.SMTP_PASS,
//   },
// });

// const sendEmail = async (to, subject, html) => {
//   try {
//     await transporter.sendMail({
//       from: process.env.SMTP_FROM,
//       to,
//       subject,
//       html,
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// };

// export default sendEmail;






// import SibApiV3Sdk from "sib-api-v3-sdk";

// const client = SibApiV3Sdk.ApiClient.instance;
// client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

// const sendEmail = async (to, subject, html) => {
//   const api = new SibApiV3Sdk.TransactionalEmailsApi();

//   const email = {
//     sender: {
//       name: "Shree Baglamukhi Mandir",
//       email: "shreebaglamukhi0@gmail.com", // OK for dev
//     },
//     to: [{ email: to }],
//     subject,
//     htmlContent: html,
//   };

//   await api.sendTransacEmail(email);
// };

// export default sendEmail;