import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

function Tech() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-8 pt-24 bg-gray-50 dark:bg-gray-900">
      
      <h2 className="text-4xl font-bold mb-15 text-blue-500 ">Developer Toolkit</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-10 py-12 
     bg-gradient-to-r from-blue-100/40 via-blue-200/40 to-blue-100/40 
     dark:from-gray-800/50 dark:via-gray-900/50 dark:to-gray-800/50 
     backdrop-blur-md rounded-2xl shadow-md text-6xl">
      
        <div className="flex flex-col items-center hover:bg-gray-500">
          <FaHtml5 className="text-orange-500" />
          <p className="text-sm mt-2 ">HTML5</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-500">
          <FaCss3Alt className="text-blue-500" />
          <p className="text-sm mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-500">
          <FaJs className="text-yellow-500" />
          <p className="text-sm mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-500">
          <FaReact className="text-cyan-400" />
          <p className="text-sm mt-2">React</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-500">
          <FaNodeJs className="text-green-600" />
          <p className="text-sm mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-500">
          <SiMongodb className="text-green-500" />
          <p className="text-sm mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-500">
          <FaGitAlt className="text-orange-600" />
          <p className="text-sm mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center hover:bg-gray-500">
          <SiTailwindcss className="text-sky-400" />
          <p className="text-sm mt-2">Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default Tech;
