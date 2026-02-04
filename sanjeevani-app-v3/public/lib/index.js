// Fake database (replace with real DB later)
const doctors = [
  {
    id: '1',
    name: 'Dr. Pradeep Mathur',
    slug: 'pradeep-mathur',
    specialty: 'Yoga & Naturopathy Specialist',
    experience: '29 years',
    image: '/images/doctors/pradeep_mathur.webp',
    meta: {
      title: 'Dr. Pradeep Mathur - Sanjeevani Kaya Hospital',
      description:
        'Meet the experienced acupressure doctor Dr. Pradeep Mathur at Sanjeevani Kaya Hospital, dedicated to personalized, natural healing through holistic and drug-free treatment approaches.',
      keywords:
        'Sanjeevani Kaya Hospital doctors, acupressure specialists, holistic doctors, natural healing experts, acupressure physician team',
    },
    description: `<p class="text-lg text-gray-300 leading-relaxed mb-6">
                        I'm dedicated to providing optimal health care in a relaxed environment
                        where I treat every patient as if they were my own family.
                    </p>

                    <p class="text-gray-400 leading-relaxed mb-4">
                        Dr. Pradeep Mathur has over 29 years of experience as a Yoga & Naturopathy Specialist.
                        He has completed 25 degrees and is widely respected for his holistic,
                        patient-centered approach.
                    </p>

                    <p class="text-gray-400 leading-relaxed">
                        Patients can conveniently book appointments online and access trusted
                        Yoga & Naturopathy specialists across India, helping them make informed
                        healthcare decisions.
                    </p>`,
    info: `<ul class="space-y-5 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-stethoscope text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Speciality</span><br>
                                Yoga & Naturopathy Specialist
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-leaf text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Other Areas</span><br>
                                Naturopathic Physician
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-graduation-cap text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Education</span><br>
                                25 Degrees, Jaipur University (1996)
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-briefcase text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Experience</span><br>
                                29 years of experience in alternative medicine<br>
                                CMHO at Sanjeevani Kaya Shodhan Sansthan
                            </div>
                        </li>

                    </ul>`,
  },
  {
    id: '2',
    name: 'Dr. Divya Grover',
    slug: 'divya-grover',
    specialty: 'Physiotherapist',
    experience: '10 years',
    image: '/images/doctors/divya_grover.webp',
    meta: {
      title: 'Dr. Divya Grover - Sanjeevani Kaya Hospital',
      description:
        'Meet the experienced dedicated doctor Dr. Divya Grover physiotherapist at Sanjeevani Kaya Hospital, dedicated to personalized, natural healing through holistic and drug-free treatment approaches.',
      keywords:
        'Sanjeevani Kaya Hospital doctors, acupressure specialists, holistic doctors, natural healing experts, acupressure physician team',
    },
    description: `<p class="text-lg text-gray-300 leading-relaxed mb-6">
                        Dr. Divya Grover is a dedicated physiotherapist practicing at Sanjeevani Kaya Shodhan Sansthan
                        in Gohana, Haryana.

                    </p>

                    <p class="text-gray-400 leading-relaxed mb-4">
                        With
                        a focus on natural healing, she specializes in physiotherapy treatments for conditions like
                        cervical spondylosis,
                        combining traditional techniques with modern rehabilitation methods.
                    </p>

                    <p class="text-gray-400 leading-relaxed">
                        Dr. Grover is part of a team that integrates
                        Ayurveda, Naturopathy, Yoga, and Physiotherapy to provide holistic care to patients seeking
                        relief from chronic
                        ailments.
                    </p>`,
    info: `<ul class="space-y-5 text-gray-300">
                        <li class="flex gap-3">
                            <i class="fa-solid fa-stethoscope text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Speciality</span><br>
                                Cervical spondylosis
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-leaf text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Other Areas</span><br>
                                Physiotherapist Physician
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-graduation-cap text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Education</span><br>
                                MPT
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-briefcase text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Experience</span><br>
                                MPT at Sanjeevani Kaya Shodhan Sansthan
                            </div>
                        </li>

                    </ul>`,
  },
  {
    id: '3',
    name: 'Dr. Amit Sharma',
    slug: 'amit-sharma',
    specialty: 'accupressure specialist',
    experience: '10 years',
    image: '/images/doctors/amit_sharma.webp',
    meta: {
      title: 'Dr. Amit Sharma - Sanjeevani Kaya Hospital',
      description:
        'Meet the experienced acupressure doctor DR. Amit Sharma at Sanjeevani Kaya Hospital, dedicated to personalized, natural healing through holistic and drug-free treatment approaches.',
      keywords:
        'Sanjeevani Kaya Hospital doctors, acupressure specialists, holistic doctors, natural healing experts, acupressure physician team',
    },
    description: `<p class="text-lg text-gray-300 leading-relaxed mb-6">
                        Dr. Amit Sharma is an accupressure specialist practicing at Sanjeevani Kaya Shodhan Sansthan in
                        Gohana, Haryana.
                    </p>

                    <p class="text-gray-400 leading-relaxed mb-4">
                        He
                        specializes in acupressure therapy, offering natural pain relief treatments to patients seeking
                        holistic healing
                        methods.

                    </p>`,
    info: `   <ul class="space-y-5 text-gray-300">

                        <li class="flex gap-3">
                            <i class="fa-solid fa-stethoscope text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Speciality</span><br>
                                Accupressure specialist
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-leaf text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Other Areas</span><br>
                                Natural pain relief treatments
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-graduation-cap text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Education</span><br>
                               DNYS
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-briefcase text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Experience</span><br>
                                DNYS at Sanjeevani Kaya Shodhan Sansthan
                            </div>
                        </li>

                    </ul>`,
  },
    {
    id: '4',
    name: 'Dr. Reeta Majhi',
    slug: 'reeta-majhi',
    specialty: 'naturopathic specialist',
    experience: '10 years',
    image: '/images/doctors/dr-reeta-majhi.webp',
    meta: {
      title: 'Dr. Amit Sharma - Sanjeevani Kaya Hospital',
      description:
        'Dr. Reeta Majhi is a Naturopathic Doctor at Sanjeevani Kaya Shodan Sansthan, Panipat, Haryana, India.',
      keywords:
        'Sanjeevani Kaya Hospital doctors, naturopathic specialists, holistic doctors, natural healing experts, naturopathic physician team',
    },
    description: `<p class="text-lg text-gray-300 leading-relaxed mb-6">
                      Dr. Reeta Majhi is a Naturopathic Doctor at Sanjeevani Kaya Shodan Sansthan, Panipat, Haryana, India.
                    </p>

                    <p class="text-gray-400 leading-relaxed mb-4">
                       She practices holistic healing through naturopathy, focusing on natural therapies, lifestyle correction, detoxification, diet management, and mind–body balance. With a compassionate and patient-centered approach, she supports individuals in managing lifestyle disorders and improving overall well-being by addressing the root cause of illness rather than just symptoms.
                    </p>`,
    info: `   <ul class="space-y-5 text-gray-300">

                        <li class="flex gap-3">
                            <i class="fa-solid fa-stethoscope text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Speciality</span><br>
                                Naturopathic specialist
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-leaf text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Other Areas</span><br>
                               Detoxification
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-graduation-cap text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Education</span><br>
                              PHD
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-briefcase text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Experience</span><br>
                                Naturopathic specialist at Sanjeevani Kaya Shodhan Sansthan
                            </div>
                        </li>

                    </ul>`,
  },
    {
    id: '5',
    name: 'Dr. Yogender Mishra',
    slug: 'yogender-mishra',
    specialty: 'yogacharya',
    experience: '10 years',
    image: '/images/doctors/dr-yogender-mishra.webp',
    meta: {
      title: 'Dr. Yogender Mishra - Sanjeevani Kaya Hospital',
      description:
        'Dr. Yogender Mishra is a highly respected Yogacharya and holistic wellness expert with years of experience in therapeutic yoga, preventive healthcare',
      keywords:
        'Sanjeevani Kaya Hospital doctors, yogacharya, yogacharya doctors, natural healing experts, acupressure physician team',
    },
    description: `<p class="text-lg text-gray-300 leading-relaxed mb-6">
                        Dr. Yogender Mishra is an yogacharya specialist practicing at Sanjeevani Kaya Shodhan Sansthan in
                        Gohana, Haryana.
                    </p>

                    <p class="text-gray-400 leading-relaxed mb-4">
                       Dr. Yogender Mishra is a highly respected Yogacharya and holistic wellness expert with years of experience in therapeutic yoga, preventive healthcare, and mind–body healing. He is dedicated to helping individuals achieve physical fitness, mental clarity, and emotional balance through authentic yogic practices rooted in ancient Indian traditions and modern wellness science.
                   With a deep understanding of Yoga Therapy, Pranayama, Meditation, and Lifestyle Management, Dr. Mishra designs personalized yoga programs to address chronic health conditions, stress, and overall well-being.
                       </p>`,
    info: `   <ul class="space-y-5 text-gray-300">

                        <li class="flex gap-3">
                            <i class="fa-solid fa-stethoscope text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Speciality</span><br>
                               yogacharya
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-leaf text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Other Areas</span><br>
                               Yoga Therapy & Naturopathy
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-graduation-cap text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Education</span><br>
                                Master’s Degree in Yoga Science
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-briefcase text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Experience</span><br>
                               Yoga therapy sessions, workshops, and wellness retreats
                            </div>
                        </li>

                    </ul>`,
  },
    {
    id: '6',
    name: 'Dr. Nitin Dhruv',
    slug: 'nitin-dhruv',
    specialty: 'internal medicine',
    experience: '10 years',
    image: '/images/doctors/dr-nitin-dhruv.webp',
    meta: {
      title: 'Dr. Amit Sharma - Sanjeevani Kaya Hospital',
      description:
        'Meet the experienced Internal Medicine doctor DR. Amit Sharma at Sanjeevani Kaya Hospital, dedicated to personalized, natural healing through holistic and drug-free treatment approaches.',
      keywords:
        'Sanjeevani Kaya Hospital doctors, Internal Medicine specialists, holistic doctors, natural healing experts, Internal Medicine physician team',
    },
    description: `<p class="text-lg text-gray-300 leading-relaxed mb-6">
                        Dr. Nitin Dhruv, a dedicated practitioner of Evidence-Based Ayurveda since 2018, specializes in Ayurvedic Internal Medicine (Kayachikitsa) and Panchkarma therapies. 
                    </p>

                    <p class="text-gray-400 leading-relaxed mb-4">
                      Proficient in Agnikarma procedures, he has successfully managed diverse conditions, particularly excelling in Musculo-skeletal diseases affecting bones, joints, muscles and connective tissues. Additionally, Dr. Dhruv is well-versed in addressing Neurological and Neuro-degenerative diseases (Vata-Vyadhi) such as Alzheimer’s and Parkinson’s disease, as well as Paralysis. His expertise extends to treating Lifestyle disorders including Heart disease, Atherosclerosis, Stroke, Respiratory ailments, Obesity and Type 2 diabetes and skin diseases. Dr. Dhruv brings a wealth of knowledge and experience to provide comprehensive care for his patients.
                    </p>`,
    info: `   <ul class="space-y-5 text-gray-300">

                        <li class="flex gap-3">
                            <i class="fa-solid fa-stethoscope text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Speciality</span><br>
                               Internal Medicine
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-leaf text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Other Areas</span><br>
                                Natural pain relief treatments
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-graduation-cap text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Education</span><br>
                                PhD in Kaya chikitsaSwami Narayan university,Kalol, Ahemdabad,Gujarat
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-briefcase text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Experience</span><br>
                                 6+ Years of Experience - PhD in Kaya ChikitsaSwami Narayan university,Kalol, Ahemdabad,Gujarat
                            </div>
                        </li>

                    </ul>`,
  },
]

export { doctors }

//    <h1>
//         <%= doctor.name %>
//     </h1>
//     <p><strong>Specialty:</strong>
//         <%= doctor.specialty %>
//     </p>
//     <p><strong>Experience:</strong>
//         <%= doctor.experience %>
//     </p>

//     <img src="<%= doctor.image %>" alt="<%= doctor.name %>" width="200"></img>
