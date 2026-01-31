// const emailLimiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 minutes
//   max: 5,
//   message: {
//     message: "Too many requests from this IP, please try again later.",
//   },
//   standardHeaders: true,
//   legacyHeaders: false,
// });

// // ===== Gmail OAuth 2.0 setup =====
// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URI,
// );
// oAuth2Client.setCredentials({
//   refresh_token: process.env.REFRESH_TOKEN,
// });

// async function sendEmail(name, email, message) {
//   // Get a fresh access token
//   const accessToken = await oAuth2Client.getAccessToken();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.EMAIL_USER, // your Gmail address
//       clientId: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       refreshToken: process.env.REFRESH_TOKEN,
//       accessToken: accessToken.token,
//     },
//   });

//   await transporter.sendMail({
//     from: email, // sender (the visitor)
//     to: process.env.EMAIL_USER, // your Gmail address
//     subject: `New Contact Form Sanjeevani`,
//     html: `
//       <h3>Contact Details</h3>
//       <p><b>Name:</b> ${name}</p>
//       <p><b>Email:</b> ${email}</p>
//       <p><b>Message:</b> ${message}</p>
//     `,
//   });
// }

// ===== Express route =====
// app.post("/send-email", emailLimiter, async (req, res) => {
//   const { name, email, message } = req.body;
//   console.log({
//     name,
//     email,
//     message,
//     clientId: process.env.CLIENT_ID,
//     secret: process.env.CLIENT_SECRET,
//     redirect: process.env.REDIRECT_URI,
//   });

//   try {
//     await sendEmail(name, email, message);
//     res.json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });
