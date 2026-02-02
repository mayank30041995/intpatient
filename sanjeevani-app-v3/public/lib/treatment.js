// Fake database (replace with real DB later)
const treatments = [
  {
    id: '1',
    title: 'naturopathy',
    slug: 'naturopathy',
    description1:
      'Naturopathy recognizes that the human body is not a passive structure but a living, intelligent system guided by a vital life force. This life force—often referred to as vital energy—is responsible for all essential functions of the body, including breathing, digestion, circulation, metabolism, movement, brain activity, and emotional balance.',
    description2:
      'This vital energy is endowed at the time of conception. While it cannot be artificially created, it can be preserved, protected, and used efficiently to restore health and vitality. Disease, in the naturopathic view, does not arise due to the absence of medicine, but due to misuse, blockage, or depletion of this vital energy caused by unhealthy lifestyle choices, stress, improper diet, emotional strain, and disconnection from natural laws.',
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
    id: '2',
    title: 'Ayurveda',
    slug: 'ayurveda',
    description:
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
    description:
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
    description:
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
    description:
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
    title: 'Hydrotherapy and Massage units ',
    slug: 'hydrotherapy',
    description: 'Pancha Tatva Healing Unit',
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
]

export { treatments }
