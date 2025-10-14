import Grad from '../components/PhotoGrad';

function Educ() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center bg-blue-50 dark:bg-gray-800 md:text-left px-30 pt-24 gap-6">
     
      {/* LEFT: Photo Section */}
      <div className="w-72 flex justify-center">
        <Grad />
      </div>
    <div>
      {/* RIGHT: Text Section */}
       <h2 className="text-4xl font-bold mb-1">Education</h2>
      <div className="flex-1 py-8">
        <h2 className="text-2xl font-semibold text-gray-200">
            Bachelor of Science in Computer Engineering
          </h2>
        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
         Computer programming and hardware design, create and improve technologies like computers, networks, and embedded systems.
        </p>
        <p>2020-2025</p>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-gray-200">
            Uplift Code Camp
          </h2>
        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-300">
          I learned the fundamentals of full-stack web development — 
          including HTML, CSS, JavaScript, React, Node.js, and MongoDB. 
          I also gained hands-on experience in building responsive websites, 
          working with APIs, and managing version control using Git and GitHub.
        </p>
        <p>
          October 2025 (Batch 26)
        </p>
      </div>
    </div>
    </div>
  );
}

export default Educ;
