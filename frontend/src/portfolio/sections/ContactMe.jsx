import { FaFacebook, FaGithub, FaGitlab, FaEnvelope } from "react-icons/fa";

function ContactMe() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 dark:bg-gray-800 text-center px-5">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="max-w-lg text-lg mb-6 text-gray-600 dark:text-gray-200">
          I’m always open to new opportunities, collaborations, or just a friendly chat!  
          You can reach me through the following:
        </p>

      <div className="flex gap-6 text-3xl">
        <a href="https://facebook.com/dacasinnathaniel27" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook /></a>
        <a href="https://github.com/nathandacasin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700"><FaGithub /></a>
        <a href="https://gitlab.com/nathandacasin01" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500"><FaGitlab /></a>
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nathandacasin01@gmail.com&su=Hello%20Nathaniel!&body=Hi%20there!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
        >
          <FaEnvelope />
        </a>

      </div>
    </div>
  );
}

export default ContactMe;
