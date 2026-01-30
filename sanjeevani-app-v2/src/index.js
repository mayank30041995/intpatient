const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const { doctors } = require('../public/lib')
const { treatments } = require('../public/lib/treatment')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

app.set('view engine', 'ejs')

// Serve static files
app.use(express.static('public'))

app.use((req, res, next) => {
  // By Default Meta Data
  res.locals.site = {
    title:
      'Sanjeevani Kaya Hospital | Naturopathy, Physiotherapy & Wellness Center',
    description:
      'Sanjeevani Kaya Hospital offers naturopathy, physiotherapy, yoga, hydrotherapy, and holistic wellness treatments using natural, drug-free methods for better health and recovery.',
    keywords:
      'Sanjeevani Kaya Hospital, naturopathy, physiotherapy, yoga therapy, hydrotherapy, wellness center, natural healing, rehabilitation, holistic care',
  }
  res.locals.pages = {
    home: '/',
    about: '/about',
    doctors: '/doctors',
    infrastructure: '/infrastructure',
    contact: '/contact',
    bookAppointment: 'https://what.sapp.link/sanjeevani',
  }

  res.locals.meta = {} // page-level override container
  next()
})

// Lists of apis (note : will add express-router letter as per requirments)

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('pages/about', {
    meta: {
      title: 'About Us | Sanjeevani Kaya Hospital',
      description:
        'Learn about Sanjeevani Kaya Hospital, our philosophy, doctors, and holistic approach to natural healing.',
      keywords:
        'about sanjeevani kaya hospital, holistic healthcare, naturopathy doctors',
    },
  })
})

// Doctors api
app.get('/doctors', (req, res) => {
  res.render('pages/doctors/index', {
    meta: {
      title: 'Our Doctors | Sanjeevani Kaya Hospital',
      description:
        'Meet the experienced acupressure doctors at Sanjeevani Kaya Hospital, dedicated to personalized, natural healing through holistic and drug-free treatment approaches.',
      keywords:
        'Sanjeevani Kaya Hospital doctors, acupressure specialists, holistic doctors, natural healing experts, acupressure physician team',
    },
  })
})

// Dynamic doctor page api
app.get('/doctors/:slug', (req, res) => {
  const slug = req.params.slug

  const doctor = doctors.find((d) => d.slug === slug)

  if (!doctor) {
    return res.status(404).send('Doctor not found')
  }

  res.render('pages/doctors/doctor', { doctor })
})

app.get('/infrastructure', (req, res) => {
  res.render('pages/infrastructure', {
    meta: {
      title: 'Infrastructure Sanjeevani Kaya Hospital',
      description:
        'Discover naturopathy at Sanjeevani Kaya Hospital – a drug-free healing system using diet therapy, hydrotherapy, mud therapy, sun therapy, and massage for natural wellness and detox.',
      keywords:
        'Sanjeevani Kaya Hospital, Naturopathy, natural healing, hydrotherapy, mud therapy, sun therapy, massage therapy, detox treatments, holistic wellness',
    },
  })
})
app.get('/contact', (req, res) => {
  res.render('pages/contact', {
    meta: {
      title: 'Contact Sanjeevani Kaya Hospital | Sanjeevani Contact Us',
      description:
        'Contact Sanjeevani Kaya Hospital for acupressure treatments and holistic healthcare services. Get in touch for appointments, inquiries, and wellness support.',
      keywords:
        'Contact Sanjeevani Kaya Hospital, acupressure hospital contact, holistic care contact, natural therapy hospital, acupressure appointment',
    },
  })
})

app.get('/:slug', (req, res) => {
  const slug = req.params.slug

  const treatment = treatments.find((d) => d.slug === slug)

  if (!treatment) {
    return res.status(404).send('Treatment not found')
  }

  res.render('pages/treatment', {
    treatment,
  })
})

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Message',
      html: `
        <h3>Contact Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    })

    res.json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to send email' })
  }
})

app.listen(8080, () => {
  console.log('Server running on port 8080')
})
