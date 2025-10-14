import { FaFacebook, FaGithub, FaGitlab } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import ProfilePhoto from "../common/ProfilePhoto.jsx";

function About() {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* <div className="text-center bg-green-100 text-4xl font-bold text-blue-500 w-[250px] h-[80px] flex items-center justify-center rounded-lg shadow-md">
        This is About page
      </div> */}
<div>
      
      {/* Social icons */}
      <div className="flex gap-6 mt-8 text-4xl text-blue-600">
        <a
          href="https://www.facebook.com/dacasinnathaniel27/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition-colors">
          <FaFacebook />
        </a>

        <a
          href="mailto:example@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition-colors"
        >
          <SiGmail />
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-colors"
        >
          <FaGithub />
        </a>

        <a
          href="https://gitlab.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 transition-colors"
        >
          <FaGitlab />
        </a>
        </div>
      </div>
        <div className='text-3xl'>
         <h1>I'm Nathaniel Dacasin</h1>
        </div>
      <div>
       <ProfilePhoto/>
      </div>
    </div>
    // </div>
  );
}

export default About;

