import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white text-gray-800 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Contact Me</h1>
      <p className="text-lg text-center text-gray-600 max-w-lg">
        I’m always open to new opportunities, collaborations, or just a friendly chat!  
        You can reach me through the following:
      </p>

      <div className="flex gap-6 mt-8 text-3xl text-blue-600">
        <a href="mailto:nathaniel@example.com" className="hover:text-red-500 transition-transform hover:scale-110"><SiGmail /></a>
        <a href="https://facebook.com/dacasinnathaniel27" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-transform hover:scale-110"><FaFacebook /></a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-transform hover:scale-110"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-transform hover:scale-110"><FaLinkedin /></a>
      </div>
    </section>
  );
}

export default Contact;
