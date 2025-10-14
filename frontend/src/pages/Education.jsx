import GraduationPhoto from '../common/GraduationPhoto';

function Education() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Education</h1>
      
      <div>
        <GraduationPhoto/>
      </div>

      <div className="space-y-6 text-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Bachelor of Science in Information Technology
          </h2>
          <p className="text-gray-600">Bulacan State University (2020 - 2024)</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Full Stack Web Development Bootcamp
          </h2>
          <p className="text-gray-600">Uplift Code Camp (2025)</p>
        </div>
      </div>
    </section>
  );
}

export default Education;