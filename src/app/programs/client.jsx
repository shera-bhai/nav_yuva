// app/programs/page.js
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function ProgramsPage() {

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

  // Program categories data
  const programCategories = [
    {
      id: "education-initiative",
      title: "Education Initiative",
      description: "Our education programs aim to provide quality learning opportunities to underserved communities, bridging the educational gap and empowering children through knowledge.",
      image: "/assets/programs/edu.jpg"
    },
    {
      id: "women-empowerment",
      title: "Women Empowerment",
      description: "We work to empower women through skill development, financial literacy, and entrepreneurship training, helping them become self-reliant and confident contributors to society.",
      image: "/assets/programs/women.png"
    },
    {
      id: "environmental-conservation",
      title: "Environmental Conservation",
      description: "Our environmental programs focus on creating sustainable communities through tree plantation, waste management education, and promoting eco-friendly practices.",
      image: "/assets/programs/env.jpg"
    },
    {
      id: "youth-development",
      title: "Youth Development",
      description: "Our youth programs foster leadership, critical thinking, and civic engagement through debates, youth parliaments, sports, and career counseling.",
      image: "/assets/programs/youth.png"
    },
    {
      id: "health-nutrition",
      title: "Health & Nutrition",
      description: "We organize health camps, awareness sessions, and nutrition programs to improve the overall well-being of communities with limited access to healthcare.",
      image: "/assets/programs/health.jpg"
    },
    {
      id: "blood-donation",
      title: "Blood Donation",
      description: "We organize health camps, awareness sessions, and nutrition programs to improve the overall well-being of communities with limited access to healthcare.",
      image: "/assets/programs/health.jpg"
    }
  ];

  // Featured programs data
  const featuredPrograms = [
    {
      category: "education-initiative",
      title: "Mentorship Program",
      description: "Our education programs are dedicated to empower youth by providing them with quality learning resources and guide them in their future endeavours.",
      impact: "Our mentorship program has been conducted in 150+ villages, empowering over 75,000+ children annually with quality education and guidance for their future endeavors.",
      image: "/assets/programs/education_initiative/mentorship.png"
    },
    {
      category: "education-initiative",
      title: "Career Counselling",
      description: "Providing counselling to the underprivileged youth, helping them with their career paths with clarity and confidence through interactive school visits, workshops, and one-on-one sessions.",
      impact: "In the last academic year, our Career Counselling program guided 30,000+ underprivileged youth, with 70% reporting increased clarity and confidence in their career paths.",
      image: "/assets/programs/education_initiative/career_counselling.jpg"
    },
    {
      category: "women-empowerment",
      title: "Moral Empowerment",
      description: "Fostering inner strength and informed choices by promoting well being, dignity and equality to lead safer, healthier and more confident lives.",
      impact: "This initiative has educated over 1000+ women across 25 villages, fostering well-being, dignity, and equality for safer and healthier lives.",
      image: "/assets/programs/women_empowerment/moral_empowerment.jpg"
    },
    {
      category: "women-empowerment",
      title: "Skill & Leadership Development",
      description: "This program is designed to equip women- especially from rural communities - with skills, confidence and exposure they need to become capable contributors and changemakers in society.",
      impact: "Provided employment to women to help them to attain financial independence.",
      image: "/assets/programs/women_empowerment/skill_development.jpg"
    },
    {
      category: "environmental-conservation",
      title: "Tree Plantations",
      description: "Leading this green initiative as a proactive step toward climate action and ecological restoration to foster long term environmental stewardship.",
      impact: "Planted 18000+ trees with an active participation of over 1500 students and volunteers.",
      image: "/assets/programs/environmental_conservation/tree_plantation.jpg"
    },
    {
      category: "environmental-conservation",
      title: "Cleanliness Drives",
      description: "Understanding Swacchta action programs to promote hygiene and civic engagement to foster public awareness and encourage collective actions for healthier surroundings.",
      impact: "Implemented waste management in nearby parks, schools, community areas and villages.",
      image: "https://ik.imagekit.io/w57hznch1e/swachta_abhiyan.jpg?updatedAt=1745922816431"
    },
    {
      category: "youth-development",
      title: "Project Upliftment",
      description: "Nurturing informed, confident and expressive young minds where youth engage in dialogues, debate and in creative competition.",
      impact: "Encouraged 2000+ young participants from school, colleges and youth clubs.",
      image: "/assets/programs/youth_development/youth_parliament.jpeg"
    },
    {
      category: "youth-development",
      title: "Youth Sports Fest",
      description: "Believes in the power of sports to shape character,build discipline and promote inclusivity and encouraging youth to participate actively, showcase talent and embrace teamwork.",
      impact: "Sports activities under the banner \"Aagaz-E-Josh\" which benefitted over 2000+ young lives.",
      image: "/assets/programs/youth_development/sports_meet.jpg"
    },
    {
      category: "health-nutrition",
      title: "Meal Assistance",
      description: "Committed to addressing hunger in a compassionate and inclusive manner, reflecting a holistic approach to welfare that values all lives.",
      impact: "Distributed 3000+ nutritious food kits in slums, homeless individuals and street dwellers.",
      image: "/assets/programs/health_nutrition/food_distribution.jpg"
    },
    {
      category: "health-nutrition",
      title: "Mobile Health Assistance",
      description: "Delivering healthcare services and preventive awareness along with free check-ups and consultation ensuring that essential health support reaches those who need it most , right at their doorsteps.",
      impact: "Conducted mobile health camps in the backward areas of the city.",
      image: "/assets/programs/health_nutrition/medical_camp.jpg"
    },
    {
      category: "blood-donation",
      title: "Rakt Veni",
      description: "Supporting lifesaving blood donation drives and ensuring timely access to blood for those in need-promoting a culture of compassion, responsibility and collective care.",
      impact: "Collected over 1,000+ units of blood in the last year.",
      image: "/assets/programs/blood_donation/rakt_veni.jpeg"
    },
    {
      category: "blood-donation",
      title: "Rakt Veni",
      description: "Supporting lifesaving blood donation drives and ensuring timely access to blood for those in need-promoting a culture of compassion, responsibility and collective care.",
      impact: "Collected over 1,000+ units of blood in the last year.",
      image: "/assets/programs/blood_donation/rakt_veni_2.jpeg"
    },
  ];

  const programsData = [
    {
      category: "education-initiative",
      heading: "Why Education?",
      image: "/assets/programs/education_initiative/education_initiative.png",
      content: "Education is the most powerful tool for breaking the cycle of poverty and inequality. For many undeserved communities, especially in rural areas, access to quality education is still a distant dream.Though our country aims to ensure free and compulsory education for children but data indicates that millions remain out of school and disparity exist in quality of education, particularly after primary school. The intense competition and high stakes examinations contribute to student stress and mental health issues. Investing in education means planting the seed for long term systematic change as it is not just a tool, it is the root of all sustainable development.",
      impactContent: "N.A.V Yuva Foundation asserts that education is not merely a right; it stands as the most potent instrument for transforming lives and enhancing communities. Our educational initiatives are dedicated to unlocking the potential of youth, particularly in underserved and rural regions. Through our transformative program, “Shiksha Ki Amrit Yatra,” we provide comprehensive career guidance, legal literacy, mental health awareness, and access to government schemes. Our foundation helps the underprivileged students in securing admission to state- owned universities and providing them with the right guidance and resources. By engaging with hundreds of schools and inspiring thousands of students, we are cultivating a generation that is not only academically proficient but also socially conscious, emotionally resilient, and well-prepared for the future."
    },
    {
      category: "women-empowerment",
      heading: "Why Women Empowerment?",
      image: "/assets/programs/women_empowerment/women_empowerment.png",
      content: "Over the years, women empowerment has become a crucial issue not due to the gender inequality but to create a more just and inclusive society. Empowering women breaks the cycle of poverty, reduces gender- based violence, and promotes equality at all levels. The women in the remote regions of our country are still not aware of their roles and rights causing their limited contribution to the society. This unequal representation disrupts the balance in society. Women empowerment should not be considered as a mere topic but a pathway towards the change in societal norms and attitudes that restrict their opportunity and rights. This also creates a positive environment for a healthy family. Ultimately, women empowerment is not only an issue concerning women, it's a process to lead the society towards a more impactful and nurturing space.",
      impactContent: "Empowered women empower societies. At N.A.V Yuva Foundation, we believe that the advancement of women is not just a fundamental aspect of equity and social justice, but an essential element for the progress of the entire community and the nation. Our flagship campaign, Nari Sashaktikaran Yatra, is designed to penetrate deeply into diverse communities and schools, reaching out to women and girls who may feel marginalized or unheard. Through this campaign, we actively educate women about their legal rights, the protections afforded to them under the law, and instill a sense of gender sensitivity that fosters mutual respect and understanding. By building self-confidence in participants, we aim to empower them to challenge societal norms and expectations that often restrict their potential. We employ a variety of engaging methods to facilitate learning and awareness. Our interactive sessions provide a platform for women to express their thoughts and experiences openly, leading to candid discussions that promote understanding and change. Additionally, we organize creative competitions that not only stimulate artistic expression but also encourage participants to explore themes of empowerment and resilience. Every action we take is aimed at inspiring a ripple effect of change - one voice, one village, one victory at a time."
    },
    {
      category: "environmental-conservation",
      heading: "Why Environment Protection?",
      image: "/assets/programs/environmental_conservation/environmental_conservation.png",
      content: "Nature is our life support system- it gives us air, water, food, and shelter. Environmental degradation pose a threat to the ecosystem. It affects the functioning of natural processes, flora and fauna. Conservation of environment is crucial for maintaining the natural resources and ecosystems, ensuring the well- being of human and other species. It also protects  the biodiversity, reducing pollution, and promoting sustainable practices. For rural communities, conservation assures food security, clean drinking water and livelihood. A healthy environment supports human health and reduces the risk of natural disasters like flood and droughts. Saving nature today is the best gift we can give to future generations.",
      impactContent: "Nature is our source of life, and it is our responsibility to protect it. The N.A.V Yuva Foundation is committed to promoting environmental awareness through well-planned campaigns, such as “Ek Ped Maa Ke Naam.” Our activities include planting trees in schools, parks, and hospitals, as well as organizing community clean-up drives that focus on removing litter from public spaces and raising awareness about waste management.\n\nThese projects not only beautify our surroundings but also encourage young people to take care of the environment. By involving youth in these important initiatives, we aim to create a generation that values and protects nature.\n\nTogether, we are building a culture of sustainability, resilience, and respect for our planet. Our community efforts emphasize the role each individual plays in making a positive impact on the environment. Through our initiatives, including the clean-up drives that promote cleanliness and responsibility, we hope to create a cleaner and more sustainable future for the coming generations."
    },
    {
      category: "youth-development",
      heading: "Why Youth Development?",
      image: "/assets/programs/youth_development/youth_development.png",
      content: "Youth is the future of a nation. It is vital for the progress of the society, serving as a dynamic force for development. Guiding and assisting the young minds in right direction helps them and the society to create a positive impact. Youth development is essential as it instil the youth with skills, knowledge, and values needed to become responsible, productive, and engaged members of the society. It involves creating opportunity for education, employment, leadership, and civic participation while also addressing the physical, emotional, and societal well-being of youth. Development of the youth not only benefit the individual but also the whole community and the nation. Youth is the future workforce and innovator, which requires constant support and guidance during their academic phase. By supporting their development today, we are shaping a better tomorrow.",
      impactContent: "N.A.V Yuva Foundation is dedicated to nurturing a generation of confident, capable, and socially aware youth. The organization's youth development initiatives focus on providing young individuals with the guidance, platforms, and the experiences they need to thrive in a changing world.\n\nBy promoting career awareness, self-expression, and critical thinking, the foundation helps young minds to discover their voice and purpose. Its activities emphasize personal development, civic engagement, and community leadership, fostering a culture of responsibility, creativity, and resilience.\n\nWhether in classrooms or community settings, N.A.V Yuva Foundation creates opportunities for youth to learn, lead, and contribute—empowering them not only to envision change but also to drive it."
    },
    {
      category: "health-nutrition",
      heading: "Why Health and Nutrition?",
      image: "/assets/programs/health_nutrition/health_nutrition.png",
      content: "Health and Nutrition is the key for the welfare of human beings, animals and society. They are necessary for living a fulfilling life, impacting physical, mental, and social well- being.  It allows individuals to build stronger relationships and contribute positivity to their communities. Eating well maintained meals provide sustained energy, improving focus, productivity, and overall quality of life. Good health and proper intake of nutrition helps in reducing level of the depression, anxiety and cognitive decline. About billions of people and a vast number of animals experience food insecurity due to various factors, causing stunted growth in children and increased mortality rates. Along with humans, animals are also taken care of properly. Providing meals and rising awareness not only reduces the loss of life rate but also restores the faith in humanity.",
      impactContent: "At N.A.V Yuva Foundation, we believe that health is the foundation of dignity, and nutrition is the first step towards lasting empowerment. Our Health & Nutrition initiatives are focused on serving not just needs but rights. Through free health camps, we reach underserved populations, providing basic medical check-ups, hygiene education, and access to professional care that would otherwise be out of reach.\n\nIn parallel, we conduct nutrition awareness sessions to help families, especially women and children, to understand the importance of balanced diets, safe food practices, and preventive health. By distributing nutritious food kits to underprivileged communities, we address immediate hunger while promoting long-term wellness.\n\nThese efforts go beyond mere acts of service; they are steps toward equity. From slum settlements to rural communities, we are fostering a culture of health where every individual is informed, nourished, and valued."
    },
    {
      category: "blood-donation",
      heading: "Why Blood Donation?",
      image: "/assets/programs/blood_donation/blood_donation.png",
      content: "\"Your blood donation is the lifeline that keeps community strong\" - Blood donation is one of the simplest yet a powerful act of kindness a person can offer. It enables an individual to do something that is no less than a miracle- give someone a chance to live. A single unit of blood can mean survival. Blood donation is not just about donating a unit of blood but it reminds us that compassion still connects the community. It is said that one donation can help save up to three lives. It not only saves the life of the patient but have positive impact on the body of the donor too. Regular donation is essential to keep our healthcare system to run smoothly. Therefore, be a life saver with just pint of blood.",
      impactContent: "At N.A.V Yuva Foundation, we recognize that a single unit of donated blood can mean the difference between life and death. Through our collaborative blood donation drives with hospitals, colleges, and health institutions, we mobilize youth to become agents of compassion and public service. These drives are not just about the collection—they are platforms to educate people on the critical need for safe blood, eliminate myths, and instill a sense of civic duty.\n\nWhether these life drops are for accident victims, surgical patients, or individuals with life-threatening illnesses, our volunteers ensure that timely support reaches those who need it most. By turning compassion into a contribution, we aim to build a community where saving lives becomes a shared habit, not a heroic act."
    },
  ];

  //Approach Data
  const programsApproach = [
    {
      id: 1,
      category: "education-initiative",
      title: "Grassroot Connect",
      content: "• Operates Through Student Drain Model.\n• Conduct Program On-Site.\n• Collaboration With Local Authorities.\n• One-on-One Interaction."
    },
    {
      id: 2,
      category: "education-initiative",
      title: "Behavioural Skills",
      content: "• Establishing Literary Clubs.\n• Conducting Public Speaking Workshops.\n• Building the Spirit of Teamwork.\n• Encourage Independent Thinking."
    },
    {
      id: 3,
      category: "education-initiative",
      title: "Education Access and Motivation",
      content: "• Providing Study Material.\n• Organising Motivational Session.\n• Financial Assistance.\n• Use of Digital Tools.\n• Guidance for Competitive Exams."
    },
    {
      id: 4,
      category: "education-initiative",
      title: "Real World Exposure",
      content: "• Introducing Vocational Courses.\n• Pathway Planning.\n• Opportunity Awareness.\n• Empowered, Employable and Engaged Youth."
    },
    {
      id: 5,
      category: "women-empowerment",
      title: "Civic Education",
      content: "• Awareness Session on Hygiene.\n• Connecting with Local Health Services.\n• Encouraging Open Dialogue.\n• Promoting Conscious Living.\n• Teaching Safe v/s Unsafe Touch."
    },
    {
      id: 6,
      category: "women-empowerment",
      title: "Growth as an Individual",
      content: "• Voice in Public and Private Spaces.\n• Support for Creative Expression.\n• Access to Education and Literacy.\n• Shaping their own Opinions.\n• Upliftment Through Sports."
    },
    {
      id: 7,
      category: "women-empowerment",
      title: "Independence For Self Expression",
      content: "• Encouraging Intergenerational Dialogues.\n• Challenging Stereotypes.\n• Enhancing Communication Skill.\n• Providing Livelihood Opportunities."
    },
    {
      id: 8,
      category: "women-empowerment",
      title: "Law & Justice Outreach",
      content: "• Simplifying Key legal concepts.\n• Introducing Women to Support System.\n• Preventive Legal Literacy."
    },
    {
      id: 9,
      category: "environmental-conservation",
      title: "Awareness and Education",
      content: "• Organising Workshops for Conservation.\n• Social Media Compaigns.\n• Incorporating Environmental Education.\n• Promoting Sustainable Development Goals (SDGs)"
    },
    {
      id: 10,
      category: "environmental-conservation",
      title: "Sustainable Use of Resources",
      content: "• Promoting Energy Saving Habits.\n• Teaching Eco-friendly Alternatives.\n• Adopting Smart Resource Management System."
    },
    {
      id: 11,
      category: "environmental-conservation",
      title: "Waste Management & Recycling",
      content: "• Waste Segregation Education.\n• Anti-Plastic Compaigns.\n• Promoting 'Waste to Resource' practice.\n• Impact Tracking."
    },
    {
      id: 12,
      category: "environmental-conservation",
      title: "Community Involvement",
      content: "• Park Adoption Model.\n• Reducing Feedback Loops.\n• Forming Eco-Groups."
    },
    {
      id: 13,
      category: "youth-development",
      title: "program Based Implementation",
      content: "• Running focused Initiatives.\n• Using Modular program Templates.\n• Thematic programs."
    },
    {
      id: 14,
      category: "youth-development",
      title: "Partnership & Collaborations",
      content: "• Engaging Subject Specialists.\n• Mentor for added Credibility.\n• Partnership to Pool Resources.\n• Collaborating with Govt. Bodies."
    },
    {
      id: 15,
      category: "youth-development",
      title: "Volunteer Driven Model",
      content: "• Creates Tiered Volunteer Structure.\n• Orientation and Training to Volunteers."
    },
    {
      id: 16,
      category: "youth-development",
      title: "Experiental Learning",
      content: "• Integrates Awareness Themes into Youth led Activities.\n• Promoting Community Visibility.\n• Encourages Reflection & Discussion Session."
    },
    {
      id: 17,
      category: "health-nutrition",
      title: "Nutrition Focused Intervention",
      content: "• Nourishment through Local food.\n• Child and Maternal Nutrition.\n• Addressing Malnutrition and anemia."
    },
    {
      id: 18,
      category: "health-nutrition",
      title: "Mobile Health Camps",
      content: "• Free Check-ups and consultation.\n• Basic Medicine and Hygiene Kit.\n• On-Site Awareness during Camp."
    },
    {
      id: 19,
      category: "health-nutrition",
      title: "Animal Support",
      content: "• Feeding Stray Animals.\n• Promoting Humane Care."
    },
    {
      id: 20,
      category: "health-nutrition",
      title: "Assessment",
      content: "• Conducting Surveys and Field visits.\n• Engaging Local Stakeholders."
    },
    {
      id: 21,
      category: "blood-donation",
      title: "Safe and Ethical Practices",
      content: "• Ensuring Proper Hygiene.\n• Medical Supervision.\n• Post-Donate Care."
    },
    {
      id: 22,
      category: "blood-donation",
      title: "Emergency Response Coordination",
      content: "• Quick Response to Urgent Blood Request.\n• Real time network of Active Donors."
    },
    {
      id: 23,
      category: "blood-donation",
      title: "Health and Wellness Collaboration",
      content: "• Organising Certified Donation Camps.\n• Credibility and safety.\n• Support of Medical Staff."
    },
    {
      id: 24,
      category: "blood-donation",
      title: "Peer-to- Peer Encouragement",
      content: "• Encouraging Regular Donors.\n• Group Donation Events.\n• Word-of-Mouth Motivation."
    },
  ]

  // Impact statistics data
  const impactNumbers = [
    { number: "1,00,000+", label: "Children Educated" },
    { number: "1,500+", label: "Women Empowered" },
    { number: "18,000+", label: "Plantations" },
    { number: "3,000+", label: "Meals Shared" },
    { number: "1,000+", label: "Blood Units Collected" }
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <Image
            src="/assets/programs/program.jpg"
            alt="N.A.V Yuva Foundation Programs"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Programs
          </h1>
          <p className="mt-6 text-xl opacity-80 text-white max-w-3xl mx-auto">
            Empowering communities through sustainable development initiatives focused on education, women empowerment, environmental conservation, health, and youth development.
          </p>
        </div>
        <div className="relative bg-transparent py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              {impactNumbers.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-white">{item.number}</p>
                  <p className="mt-2 text-base font-normal text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Impact Numbers Section */}

      {/* Program Categories Section */}
      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Focus Areas
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              We work across multiple domains to create holistic development solutions that address the diverse needs of underserved communities.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {programCategories.map((category, index) => (
              <div key={index} id={category.id} className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="relative aspect-w-16 h-84 rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-span-7">
                  <div className={`${index % 2 === 1 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-lg text-gray-500">
                      {category.description}
                    </p>
                    <div className="mt-8">
                      <a href={`#${category.id}-programs`} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black hover:bg-primary-dark">
                        View Programs
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Featured Programs Section */}

      {programCategories.map((category) => (
        <div key={category.id} id={`${category.id}-programs`} className="py-12 odd:bg-gray-100 even:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {category.title} Programs
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
                Explore our programs focused on {category.title.toLowerCase()}.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              {featuredPrograms
                .filter(program => program.category === category.id)
                .map((program, index) => (
                  <div key={index} data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="flex flex-col rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                    <div className="flex-shrink-0 relative h-80">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                        <p className="mt-3 text-base text-gray-500">{program.description}</p>
                        <div className="mt-4 bg-primary-light bg-opacity-20 px-4 py-3 rounded-lg">
                          <p className="text-sm font-medium text-primary-dark">
                            <span className="font-bold">Impact:</span> {program.impact}
                          </p>
                        </div>
                      </div>
                      {/* <div className="mt-6">
                        <Link href={`/programs/${category.id}/${program.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-medium text-primary hover:text-primary-dark">
                          Learn more about this program →
                        </Link>
                      </div> */}
                    </div>
                  </div>
                ))}
            </div>
          </div>

      {/* Why Section */}
        
          <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          {programsData
            .filter(data => data.category === category.id)
            .map((data, index) => (
              <div key={index} className='max-w-7xl mx-auto'>
                <div className='mb-4 text-3xl text-center md:text-left uppercase font-extrabold md:font-semibold text-gray-900'>
                  {data.heading}
                </div>
                <p className='py-4 text-lg md:text-xl text-gray-600 text-justify md:min-w-[1015px]'>
                  {data.content}
                </p>
              </div>
            ))}
          </div>

      {/* Our Impact Section */}

          <div className='max-w-auto bg-cyan-200 mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          {programsData
            .filter(data => data.category === category.id)
            .map((data, index) => (
            <div key={index} className='max-w-7xl mx-auto xl:px-8'>
                <div className='mb-4 text-3xl text-center md:text-left uppercase font-extrabold md:font-semibold text-gray-900'>
                  Our Impact in Action
                </div>
                <p className='py-4 text-lg md:text-xl text-gray-600 text-justify md:min-w-[1015px] whitespace-pre-line'>
                  {data.impactContent}
                </p>
                <Image
                  src={data.image}
                  alt="N.A.V Yuva Foundation Programs"
                  width={1340}
                  height={340}
                  className='hidden mt-10 md:block'
                />
            </div>
            ))}
          </div>

      {/* Our Approach */}

          <div className='max-w-7xl pt-12 mx-auto px-4 sm:px-6 lg:px-8'>
            <p className="text-3xl text-center md:text-left font-extrabold md:font-semibold uppercase text-gray-900 mx-auto pb-6">
              Operational Model
            </p>
            <div className='md:min-w-[1015px] md:grid md:grid-cols-2 md:gap-x-8'>
              {programsApproach
                .filter(approach => approach.category === category.id)
                .map((approach, index) => (
                <Accordion key={index} open={open === approach.id} icon={<Icon id={approach.id} open={open} />}>
                  <AccordionHeader className='text-lg md:text-2xl text-gray-800' onClick={() => handleOpen(approach.id)}>{approach.title}</AccordionHeader>
                  <AccordionBody>
                    <p className='whitespace-pre-line text-xl'>
                      {approach.content}
                    </p>
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {/* Approach Section */}

      {/* <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Approach
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At N.A.V Yuva Foundation, we believe in creating sustainable impact through community participation and ownership. Our programs are designed with these key principles:
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Community-Centered</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We involve communities in program design and implementation to ensure relevance and foster ownership.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Sustainable Impact</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Our programs are designed for long-term sustainability rather than short-term relief, empowering communities to become self-reliant.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Collaborative</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We partner with government agencies, other NGOs, and corporate entities to leverage resources and expertise for maximum impact.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Transparent & Accountable</h3>
                    <p className="mt-2 text-base text-gray-500">
                      We maintain transparency in our operations and are accountable to our beneficiaries, donors, and partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative h-80 aspect-w-5 aspect-h-3 rounded-lg overflow-hidden lg:h-auto">
                <Image
                  src="/images/programs/approach.jpg"
                  alt="Our approach to community development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Success Stories Preview */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Real stories of transformation and impact from our program beneficiaries.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 sm:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <div className="relative h-56 md:h-80">
                <Image
                  src="/assets/programs/success_stories/dakshita.jpg"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-3xl font-semibold text-gray-900">From N.A.V Yuva Chhatra Sansad to the Indian Parliament</h3>
                <p className="mt-2 text-sm md:text-base text-gray-500">
                  "I sincerely thank the N.A.V Yuva Foundation for giving me the opportunity to participate in the Yuva Sansad. It has been a wonderful experience for me. Yuva Sansad has given a new direction and platform to the talents of youth. I am truly grateful to the N.A.V Yuva Foundation for this inspiring initiative."
                </p>
                {/* <div className="mt-4">
                  <Link href="/impact-stories/meena" className="text-primary hover:text-primary-dark font-medium">
                    Read her story →
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <div className="relative h-56 md:h-80">
                <Image
                  src="/assets/programs/success_stories/kritika.png"
                  alt="Success story"
                  fill
                  className="object-fill"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-3xl font-semibold text-gray-900">Growing with N.A.V. Yuva Foundation</h3>
                <p className="mt-2 text-sm md:text-base text-gray-500">
                  "Joining N.A.V. Yuva Foundation gave me a supportive start and a belief in my potential. Leading drives like ‘Ped Ek Jeevan Anek’ shaped my commitment to sustainability and social responsibility. Today, I mentor new volunteers and continue contributing to its mission."
                </p>
                {/* <div className="mt-4">
                  <Link href="/impact-stories/sundarpur" className="text-primary hover:text-primary-dark font-medium">
                    Read the story →
                  </Link>
                </div> */}
              </div>
            </div>
            {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/stories/story3.jpg"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Women's Self-Help Group Success</h3>
                <p className="mt-2 text-sm text-gray-500">
                  How a group of 15 women created a thriving handicraft business that transformed their village economy.
                </p>
                <div className="mt-4">
                  <Link href="/impact-stories/self-help-group" className="text-primary hover:text-primary-dark font-medium">
                    Read their story →
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="mt-10 text-center">
            <Link href="/impact-stories" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark">
              View All Success Stories
            </Link>
          </div> */}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Want to support our programs?</span>
            <span className="block text-primary-light">Join us in creating positive change.</span>
          </h2>
          <div className="mt-8 inline-flex lg:mt-0 lg:flex-shrink-0 gap-4">
            <Link href="/get_involved/volunteer_registration" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:text-[#23c5ca] transition duration-300 ease-in-out">
              Volunteer With Us
            </Link>
            <Link href="https://rzp.io/rzp/cGixej34" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:text-black transition duration-300 ease-in-out">
              Support Our Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
