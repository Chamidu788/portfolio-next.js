import { motion } from 'framer-motion';
import Image from 'next/image';
import myPhoto from '../public/myphoto.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com'; 
import { useState } from 'react';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const typingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.05,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.send('service_l4h7zyl', 'template_7znorlm', formData, 'FWZ7WJiTnDt8XDE3x')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResponseMsg('Message sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setResponseMsg('Failed to send message. Please try again later.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-white overflow-y-scroll no-scrollbar">
      
      {/* Transparent Navigation Bar */}
      <nav className="w-full flex justify-center items-center p-6 bg-transparent fixed bottom-0 z-10 opacity-80 rounded-lg">
        <div className="flex space-x-6 md:space-x-12">
          <a href="#home" className="hover:text-gray-400 fa-xl">
            <i className="fas fa-home"></i>
           
          </a>
          <a href="#skills" className="hover:text-gray-400 fa-xl">
            <i className="fas fa-cogs"></i>
          </a>
          <a href="#experience" className="hover:text-gray-400 fa-xl">
            <i className="fas fa-briefcase"></i>
          </a>
          <a href="#projects" className="hover:text-gray-400 fa-xl">
            <i className="fas fa-folder"></i>
          </a>
          <a href="#contact" className="hover:text-gray-400 fa-xl">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </nav>

      {/* Home Section */}
      <motion.section
        id="home"
        className="h-screen flex items-center justify-center text-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <motion.div className="bg-transparent bg-opacity-0 rounded-xl p-10 backdrop-blur-md shadow-sm max-w-6xl w-full flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="flex-1 mb-6 lg:mb-0 lg:text-left">
            <motion.h2
              className="text-4xl font-bold mb-4"
              variants={typingAnimation}
              initial="hidden"
              animate="visible"
            >
              {Array.from("Hi, I'm Chamindu Kavishka").map((letter, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
            <p className="text-lg mb-4">
              I am a third-year undergraduate in Software Engineering, passionate about solving problems with innovative solutions and dedicated to continuous learning in the field.
            </p>
            {/* Download Resume Button */}
            <a
              href="/Chamindu_Kavishka_Resume.pdf"
              download
              className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Download Resume
            </a>
          </div>
          {/* Image Section */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0">
            <Image
              src={myPhoto}
              alt="My Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
            <div className="absolute w-full h-full rounded-full border-4 border-dashed border-blue-500 animate-spin-slow"></div>
          </div>
        </motion.div>
      </motion.section>
      
      {/* Skills Section */}
<motion.section
  id="skills"
  className="h-screen flex flex-col justify-center items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariant}
>
  <h2 className="text-3xl font-bold mb-4">Skills</h2>
  <p className="text-lg max-w-xl text-center">
    Web Design, MS Office, PHP, Laravel, HTML & CSS, Python, JavaScript, WordPress, Database Management, Next.js, React.js, API Integration
  </p>
</motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="h-screen flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p className="text-lg max-w-xl text-center">
          <strong>Phone Repair Technician, Cell Hub Mobile (2022 - 2024)</strong><br />
          Two years of experience in diagnosing and repairing mobile devices, with expertise in hardware repairs and customer service.
        </p>
      </motion.section>

      {/* Projects Section */}
<motion.section
  id="projects"
  className="h-screen flex flex-col justify-center items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInVariant}
>
  <h2 className="text-3xl font-bold mb-4">Projects</h2>
  <p className="text-lg max-w-xl text-center">
    <strong>POS System Development</strong><br />
    Developed a POS system with real-time stock updates, payment gateways, and secure authentication using Laravel.
  </p>
  <p className="text-lg max-w-xl text-center">
    <strong>Pet Shop Frontend Development</strong><br />
    Created a user-friendly frontend for a pet shop using Next.js, featuring dynamic product listings, a shopping cart, and responsive design for optimal viewing across devices.
  </p>
</motion.section>

           {/* Contact Section */}
           <motion.section
           id="contact"
           className="h-screen flex flex-col items-center justify-center"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInVariant}
         >
           <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
           <form onSubmit={sendEmail} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
             <div className="mb-4">
               <label className="block mb-2" htmlFor="name">Name</label>
               <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" required />
             </div>
             <div className="mb-4">
               <label className="block mb-2" htmlFor="email">Email</label>
               <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 bg-gray-700 text-white rounded" required />
             </div>
             <div className="mb-4">
               <label className="block mb-2" htmlFor="message">Message</label>
               <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-2 bg-gray-700 text-white rounded" required></textarea>
             </div>
             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
           </form>
           {responseMsg && <p className="mt-4 text-green-500">{responseMsg}</p>} {/* Display response message */}
         </motion.section>
       </div>
     );
   }