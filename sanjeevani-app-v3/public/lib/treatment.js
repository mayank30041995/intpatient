// Fake database (replace with real DB later)
const treatments = [
    {
    id: '1',
    title: 'naturopathy',
    slug: 'naturopathy',
    description1:
      'At Sanjeevani India Hospital, naturopathy is practiced as a science of natural healing that restores the body’s innate ability to heal itself.',
    description2:
      'Our treatments focus on detoxification, nutrition therapy, yoga, hydrotherapy, mud therapy, and lifestyle correction under the guidance of highly experienced doctors. Set within a vast natural campus in Gohana, Sanjeevani offers ethical, affordable, and personalized naturopathy care for chronic diseases, lifestyle disorders, and overall wellness.',
    meta: {
      title:
        'Sanjeevani Kaya Hospital | Naturopathy Treatments & Natural Healing',
      description:
        'Discover naturopathy at Sanjeevani Kaya Hospital – a drug-free healing system using diet therapy, hydrotherapy, mud therapy, sun therapy, and massage for natural wellness and detox.',
      keywords:
        'Sanjeevani Kaya Hospital, Naturopathy, natural healing, hydrotherapy, mud therapy, sun therapy, massage therapy, detox treatments, holistic wellness',
    },
    content: `../components/naturopathy.ejs`,
  },
  {
    id: '1.0',
    title: 'Naturopathy Treatment for Hydrotherapy',
    slug: 'naturopathy-treatment-for-hydrotherapy-in-gohana',
    description1:
      'Hydrotherapy* is a natural therapeutic method that uses *water in different forms, temperatures, and applications* to promote healing, relieve pain, and improve overall health. It is an important component of *naturopathy and holistic healthcare',
    description2:
      'At Sanjeevani, hydrotherapy is used as a non-invasive, drug-free supportive treatment* to help the body heal naturally by stimulating circulation, relaxing muscles, and calming the nervous system.',
    meta: {
      title:
        `Naturopathy Treatment for Hydrotherapy in Gohana | Sanjeevani Kaya Hospital Naturopathy Treatments & Natural Healing`,
      description:
        `Hydrotherapy is influenced by lifestyle, diet, and stress. At Sanjeevani, naturopathy focuses on addressing root causes through personalised, drug-free healing guided by doctors with over 20 years of average experience.`,
      keywords:
        'Sanjeevani Kaya Hospital, Naturopathy, natural healing, hydrotherapy, mud therapy, sun therapy, massage therapy, detox treatments, holistic wellness',
    },
    content: `../components/naturopathy/hydrotherapy.ejs`,
  },
  {
    id: '1.1',
    title: 'Naturopathy Treatment for Mud Therapy',
    slug: 'naturopathy-treatment-for-mud-therapy-in-gohana',
    description1:
      'Mud therapy* is a natural therapeutic method in which *clean, natural earth (mud)* is applied externally to specific parts of the body or the whole body for healing and wellness purposes. It is an important treatment modality in *naturopathy and holistic healthcare.',
    description2:
      'At Sanjeevani, mud therapy is used as a **non-invasive, drug-free supportive treatment* to reduce inflammation, relieve pain, detoxify the body, and promote relaxation.',
    meta: {
      title:
        `Naturopathy Treatment for mud-therapy in Gohana | Sanjeevani Kaya Hospital Naturopathy Treatments & Natural Healing`,
      description:
        `mud-therapy is influenced by lifestyle, diet, and stress. At Sanjeevani, naturopathy focuses on addressing root causes through personalised, drug-free healing guided by doctors with over 20 years of average experience.`,
      keywords:
        'Sanjeevani Kaya Hospital, Naturopathy, natural healing, diet-therapy, mud therapy, sun therapy, massage therapy, detox treatments, holistic wellness',
    },
    content: `../components/naturopathy/mudtherapy.ejs`,
  },
  {
    id: '1.2',
    title: 'Naturopathy Treatment for Diet Therapy',
    slug: 'naturopathy-treatment-for-diet-therapy-in-gohana',
    description1:
      'Diet therapy is a therapeutic approach that uses planned, balanced, and natural food to support healing, manage diseases, and promote overall health. It is a core component of naturopathy and holistic healthcare, where food is considered a primary tool for prevention and recovery.',
    description2:
      'At Sanjeevani, diet therapy is used as a personalized, supportive treatment, tailored to individual health conditions, lifestyle, and nutritional needs.',
    meta: {
      title:
        `Naturopathy Treatment for diet-therapy in Gohana | Sanjeevani Kaya Hospital Naturopathy Treatments & Natural Healing`,
      description:
        `diet-therapy is influenced by lifestyle, diet, and stress. At Sanjeevani, naturopathy focuses on addressing root causes through personalised, drug-free healing guided by doctors with over 20 years of average experience.`,
      keywords:
        'Sanjeevani Kaya Hospital, Naturopathy, natural healing, diet-therapy, mud therapy, sun therapy, massage therapy, detox treatments, holistic wellness',
    },
    content: `../components/naturopathy/diettherapy.ejs`,
  },
  {
    id: '1.3',
    title: 'Naturopathy Treatment for Massage Therapy',
    slug: 'naturopathy-treatment-for-massage-therapy-in-gohana',
    description1:
      'Massage therapy is a therapeutic technique that involves *systematic manipulation of the soft tissues* of the body using hands, fingers, palms, or specialized techniques to promote relaxation, relieve pain, and improve overall health. It is an important component of *naturopathy and integrative healthcare*.',
    description2:
      'At *Sanjeevani, massage therapy is used as a **non-invasive, supportive treatment* to enhance circulation, reduce stress, relieve muscular tension, and support natural healing.',
    meta: {
      title:
        `Naturopathy Treatment for massage therapy in Gohana | Sanjeevani Kaya Hospital Naturopathy Treatments & Natural Healing`,
      description:
        `Massage therapy is influenced by lifestyle, diet, and stress. At Sanjeevani, naturopathy focuses on addressing root causes through personalised, drug-free healing guided by doctors with over 20 years of average experience.`,
      keywords:
        'Sanjeevani Kaya Hospital, Naturopathy, natural healing, mud-therapy, mud therapy, sun therapy, massage therapy, detox treatments, holistic wellness',
    },
    content: `../components/naturopathy/massagetherapy.ejs`,
  },
  {
    id: '2',
    title: 'Ayurveda',
    slug: 'ayurveda',
    description1:
      'Ayurveda is the ancient Indian system of holistic healing that restores balance between body, mind, and spirit through natural therapies and lifestyle practices.',
    meta: {
      title:
        'Ayurveda Treatment in India | Sanjeevini India Ayurvedic Hospital & Wellness',
      description:
        'Experience authentic Ayurveda at Sanjeevini India. We offer traditional Ayurvedic treatments, Panchakarma therapies, herbal medicines, and personalized wellness programs for holistic healing.',
      keywords:
        'Sanjeevini India, Ayurveda Hospital India, Ayurvedic Treatment, Panchakarma Therapy, Ayurvedic Wellness, Herbal Medicine, Natural Healing, Holistic Health, Dosha Balance, Vata Pitta Kapha',
    },
    content: `../components/ayurveda.ejs`,
  },
  {
    id: '3',
    title: 'Acupressure',
    slug: 'acupressure',
    description1:
      'Acupressure is a natural healing technique based on stimulation of specific energy points on the body.',
    meta: {
      title:
        'Ayurveda Treatment in India | Sanjeevini India Ayurvedic Hospital & Wellness',
      description:
        'Experience authentic Ayurveda at Sanjeevini India. We offer traditional Ayurvedic treatments, Panchakarma therapies, herbal medicines, and personalized wellness programs for holistic healing.',
      keywords:
        'Sanjeevini India, Ayurveda Hospital India, Ayurvedic Treatment, Panchakarma Therapy, Ayurvedic Wellness, Herbal Medicine, Natural Healing, Holistic Health, Dosha Balance, Vata Pitta Kapha',
    },
    content: `../components/acupressure.ejs`,
  },
  {
    id: '4',
    title: 'Physiotherapy',
    slug: 'physiotherapy',
    description1:
      'The Physiotherapy Unit at Sanjeevini India offers evidence-based rehabilitation and pain management therapies to restore mobility, strength, and functional independence.',
    meta: {
      title:
        'Physiotherapy Treatment in India | Sanjeevini India Rehabilitation & Pain Care',
      description:
        'Get expert physiotherapy at Sanjeevini India. Our physiotherapy unit provides personalized rehabilitation, pain management, post-surgical recovery, sports injury care, and mobility restoration.',
      keywords:
        'Sanjeevini India, Physiotherapy Treatment India, Rehabilitation Center, Pain Management Therapy, Post Surgery Physiotherapy, Sports Injury Rehabilitation, Orthopedic Physiotherapy, Neurological Physiotherapy, Mobility Restoration',
    },
    content: `../components/physiotherapy.ejs`,
  },
  {
    id: '5',
    title: 'Yoga & Pranayama',
    slug: 'yoga-pranayama',
    description1:
      'Yoga and Pranayama form a vital foundation of holistic wellness, enhancing physical strength, mental clarity, emotional balance, and inner harmony.',
    meta: {
      title:
        'Yoga & Pranayama in India | Sanjeevini India Holistic Wellness Center',
      description:
        'Practice authentic Yoga and Pranayama at Sanjeevini India. Our guided sessions improve flexibility, breathing, stress management, mental focus, and overall mind-body balance.',
      keywords:
        'Sanjeevini India, Yoga Therapy India, Pranayama Practice, Holistic Wellness, Stress Management Yoga, Breathing Exercises, Meditation Yoga, Mind Body Balance, Traditional Yoga Therapy',
    },
    content: `../components/yoga.ejs`,
  },
  {
    id: '6',
    title: 'Hydrotherapy and Massage ',
    slug: 'hydrotherapy',
    description1: 'Pancha Tatva Healing',
    meta: {
      title:
        'Yoga & Pranayama in India | Sanjeevini India Holistic Wellness Center',
      description:
        'Practice authentic Yoga and Pranayama at Sanjeevini India. Our guided sessions improve flexibility, breathing, stress management, mental focus, and overall mind-body balance.',
      keywords:
        'Sanjeevini India, Yoga Therapy India, Pranayama Practice, Holistic Wellness, Stress Management Yoga, Breathing Exercises, Meditation Yoga, Mind Body Balance, Traditional Yoga Therapy',
    },
    content: `../components/hydrotherapy.ejs`,
  },
  {
    id: '7',
    title: 'Personalized Integrated Treatment Plan',
    slug: 'personalized-treatment-plan',
    description1: 'Pancha Tatva Healing',
    meta: {
      title:
        'Personalized Integrated Treatment Plan | Sanjeevini India Holistic Wellness Center',
      description:
        'Personalized Integrated Treatment Plan at Sanjeevini India. Our guided sessions improve flexibility, breathing, stress management, mental focus, and overall mind-body balance.',
      keywords:
        'Sanjeevini India, Yoga Therapy India, Pranayama Practice, Holistic Wellness, Stress Management Yoga, Breathing Exercises, Meditation Yoga, Mind Body Balance, Traditional Yoga Therapy',
    },
    content: `../components/personalizeplan.ejs`,
  },
  
]

export { treatments }
