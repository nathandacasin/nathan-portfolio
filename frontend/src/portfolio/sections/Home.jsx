import PhotoBarong from '../components/PhotoCard';
import resume from '../resume/nathaniel-dacasin.pdf';

function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-15 pt-24 gap-6">
      
      {/* LEFT: Text Section */}
      <div className="flex-1 mr-3px">
        <h1 className="flex-none text-4xl font-bold mb-3">
          Hi, I'm <span className="text-blue-500">Nathaniel Dacasin</span>
        </h1>
        {/* <h1 className="text-2xl font-bold mb-3">
          Full-stack developer
          </h1>  */}
        <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Full-stack Developer
        </h1>
          <p className="max-w-xl text-lg flex-nowrap text-gray-600 dark:text-gray-300 mb-6">
            Programmer Jr. who exploring web development. I enjoy learning new skills, building small projects, and improving my coding.
          </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Contact Me
          </a>
          <a
            href={resume}
            download='Nathaniel Dacasin'
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT: Photo Section */}
      <div className="w-72 flex justify-center">
        <PhotoBarong />
      </div>
    </div>
  );
}

export default Home;
