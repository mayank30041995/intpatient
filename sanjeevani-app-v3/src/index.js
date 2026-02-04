const express = require("express");
// const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
const rateLimit = require("express-rate-limit");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const { doctors } = require("../public/lib");
const { treatments } = require("../public/lib/treatment");
const { sanitize, isValidEmail } = require("../public/js/validation");
require("dotenv").config();

const app = express();
app.use(cors());

app.set("view engine", "ejs");

// Body parsers
app.use(express.json()); // For JSON requests (fetch)
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // For HTML form submissions

app.use((req, res, next) => {
  // By Default Meta Data
  res.locals.site = {
    title:
      "Sanjeevani Kaya Hospital | Naturopathy, Physiotherapy & Wellness Center",
    description:
      "Sanjeevani Kaya Hospital offers naturopathy, physiotherapy, yoga, hydrotherapy, and holistic wellness treatments using natural, drug-free methods for better health and recovery.",
    keywords:
      "Sanjeevani Kaya Hospital, naturopathy, physiotherapy, yoga therapy, hydrotherapy, wellness center, natural healing, rehabilitation, holistic care",
  };
  res.locals.pages = {
    home: "/",
    about: "/about",
    doctors: "/doctors",
    infrastructure: "/infrastructure",
    contact: "/contact",
    bookAppointment: "https://what.sapp.link/sanjeevani",
  };

  res.locals.meta = {}; // page-level override container
  next();
});

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Rate limiter
const emailLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many requests from this IP, please try again later.",
  },
});

async function sendEmail(name, email, message) {
  const msg = {
    to: process.env.EMAIL_USER, // your inbox, e.g., info@sanjeevaniindia.com
    from: {
      email: process.env.EMAIL_USER, // VERIFIED sender: contact@sanjeevaniindia.com
      name: "Sanjeevani India – Website Enquiry",
    },
    replyTo: {
      email: email, // visitor's email
      name: name,
    },
    subject: "New patient enquiry from Sanjeevani India website",
    text: `
New enquiry from Sanjeevani India website

Name: ${name}
Email: ${email}

Message:
${message}
`,
    html: `
<div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
  <div style="max-width:600px; margin:0 auto; padding:20px; border:1px solid #e0e0e0; border-radius:8px; background-color:#f9f9f9;">
    <h2 style="color:#10B981; text-align:center;">New Patient Enquiry</h2>
    <p style="text-align:center; color:#555;">You have received a new message from your website contact form.</p>
    
    <table style="width:100%; border-collapse:collapse; margin-top:20px;">
      <tr>
        <td style="padding:8px; font-weight:bold; width:30%;">Name:</td>
        <td style="padding:8px; background-color:#fff; border-radius:4px;">${name}</td>
      </tr>
      <tr>
        <td style="padding:8px; font-weight:bold;">Email:</td>
        <td style="padding:8px; background-color:#fff; border-radius:4px;">${email}</td>
      </tr>
      <tr>
        <td style="padding:8px; font-weight:bold;">Message:</td>
        <td style="padding:8px; background-color:#fff; border-radius:4px;">${message}</td>
      </tr>
    </table>

    <p style="margin-top:20px; color:#777; font-size:12px; text-align:center;">
      This email was sent from the Sanjeevani India contact form.
    </p>
  </div>
</div>
`,
  };

  await sgMail.send(msg);
}

// ===== Express route =====
app.post("/send-email", emailLimiter, async (req, res) => {
  let { name, email, message } = req.body;

  try {
    name = sanitize(name);
    email = sanitize(email);
    message = sanitize(message);

    if (!name || !email || !message)
      return res.status(400).json({ message: "All fields required" });

    if (!isValidEmail(email))
      return res.status(400).json({ message: "Invalid email" });

    if (message.length > 1000)
      return res.status(400).json({ message: "Message too long" });

    await sendEmail(name, email, message);

    return res.status(200).json({
      message: "Thank you! Your message has been sent. Redirecting...",
      redirect: "success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to send email",
    });
  }
});

// Lists of apis (note : will add express-router letter as per requirments)

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/success", (req, res) => {
  res.render("pages/success");
});

app.get("/about", (req, res) => {
  res.render("pages/about", {
    meta: {
      title: "About Us | Sanjeevani Kaya Hospital",
      description:
        "Learn about Sanjeevani Kaya Hospital, our philosophy, doctors, and holistic approach to natural healing.",
      keywords:
        "about sanjeevani kaya hospital, holistic healthcare, naturopathy doctors",
    },
  });
});

// Doctors api
app.get("/doctors", (req, res) => {
  res.render("pages/doctors/index", {
    meta: {
      title: "Our Doctors | Sanjeevani Kaya Hospital",
      description:
        "Meet the experienced acupressure doctors at Sanjeevani Kaya Hospital, dedicated to personalized, natural healing through holistic and drug-free treatment approaches.",
      keywords:
        "Sanjeevani Kaya Hospital doctors, acupressure specialists, holistic doctors, natural healing experts, acupressure physician team",
    },
  });
});

// Dynamic doctor page api
app.get("/doctors/:slug", (req, res) => {
  const slug = req.params.slug;

  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    return res.status(404).send("Doctor not found");
  }

  res.render("pages/doctors/doctor", { doctor });
});

app.get("/infrastructure", (req, res) => {
  res.render("pages/infrastructure", {
    meta: {
      title: "Infrastructure Sanjeevani Kaya Hospital",
      description:
        "Discover naturopathy at Sanjeevani Kaya Hospital – a drug-free healing system using diet therapy, hydrotherapy, mud therapy, sun therapy, and massage for natural wellness and detox.",
      keywords:
        "Sanjeevani Kaya Hospital, Naturopathy, natural healing, hydrotherapy, mud therapy, sun therapy, massage therapy, detox treatments, holistic wellness",
    },
  });
});
app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    meta: {
      title: "Contact Sanjeevani Kaya Hospital | Sanjeevani Contact Us",
      description:
        "Contact Sanjeevani Kaya Hospital for acupressure treatments and holistic healthcare services. Get in touch for appointments, inquiries, and wellness support.",
      keywords:
        "Contact Sanjeevani Kaya Hospital, acupressure hospital contact, holistic care contact, natural therapy hospital, acupressure appointment",
    },
  });
});

app.get("/awas", (req, res) => {
  res.render("pages/awas", {
    meta: {
      title:
        "Awas Sanjeevani Kaya Hospital  | Sanjeevani Living with Modern Amenitie",
      description:
        "Sanjeevani Kaya Hospital Awas offers wellness-focused residential living with modern amenities including free Wi-Fi, swimming pool, dining area, and meeting hall, designed for healthy and comfortable lifestyles.",
      keywords:
        "Sanjeevani Kaya Hospital Awas, wellness housing, hospital awas, healthy living residence, affordable wellness homes, Sanjeevani Kaya Awas",
    },
  });
});

app.get("/:slug", (req, res) => {
  const slug = req.params.slug;

  const treatment = treatments.find((d) => d.slug === slug);

  if (!treatment) {
    return res.status(404).send("Treatment not found");
  }

  res.render("pages/treatment", {
    treatment,
    meta: {
      ...treatment.meta,
    },
  });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
