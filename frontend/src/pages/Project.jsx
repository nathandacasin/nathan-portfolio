function Projects() {
  return (
    <section className="min-h-screen bg-blue-50 text-gray-800 flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Weather Reminder App</h2>
          <p className="text-gray-700">
            A React-based app that sends weather updates with reminders using WeatherAPI.com.
          </p>
          <p className="mt-2 text-sm text-gray-500">Tech: React, Tailwind CSS, REST API</p>
          <a href="#" className="inline-block mt-3 text-blue-500 hover:text-blue-700 font-medium">View on GitHub →</a>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Trivia Quiz Game</h2>
          <p className="text-gray-700">
            A REST API-based quiz game that challenges users with random trivia questions.
          </p>
          <p className="mt-2 text-sm text-gray-500">Tech: JavaScript, HTML, CSS</p>
          <a href="#" className="inline-block mt-3 text-blue-500 hover:text-blue-700 font-medium">View Project →</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
