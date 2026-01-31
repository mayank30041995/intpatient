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
                                CMHO at Sanjeevani Kaya Shodhan Sansthan
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
                                25 Degrees, Jaipur University (1996)
                            </div>
                        </li>

                        <li class="flex gap-3">
                            <i class="fa-solid fa-briefcase text-green-500 mt-1"></i>
                            <div>
                                <span class="font-semibold text-white">Experience</span><br>
                                CMHO at Sanjeevani Kaya Shodhan Sansthan
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
