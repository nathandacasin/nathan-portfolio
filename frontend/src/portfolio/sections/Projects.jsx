function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-5">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl">

        <div className="p-5 bg-white dark:bg-gray-300 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2 text-gray-600 dark:text-gray-800">Weather Reminder App</h3>
          <p className="text-gray-600 dark:text-gray-800">
            WeatherAPI that sends reminders based on weather forecasts.
          </p>
         <a href="https://ready-4-weather-m902.onrender.com/" target="_blank" className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium">
          Ready4Weather →</a>
        </div>

        <div className="p-5 bg-white dark:bg-gray-300 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2 text-gray-600 dark:text-gray-800">GeoMemorymap</h3>
          <p className="text-gray-600 dark:text-gray-800">
              Application that lets users capture and save their memories based on specific locations.
          </p>
         <a href="https://www.geomemorymap.com/" target="_blank" className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium">
          GeoMemoryMap →</a>
        </div>

        <div className="p-5 bg-white dark:bg-gray-300 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2 text-gray-600 dark:text-gray-800">Cooking Recipe World Wide</h3>
          <p className="text-gray-600 dark:text-gray-800">
            A Recipe Web application Around the world with instruction and youtube tutorial.
          </p>
         <a href="https://cookrecipe-hnf6.onrender.com/" className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium">
          Cooking Recipe →</a>
        </div>
         {/* <div className="p-5 bg-white dark:bg-gray-300 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-2 text-gray-600 dark:text-gray-800">Weather Reminder App</h3>
          <p className="text-gray-600 dark:text-gray-800">
            WeatherAPI that sends reminders based on weather forecasts.
          </p>
         <a href="https://ready-4-weather-m902.onrender.com/" target="_blank" className="inline-block mt-3 text-blue-600 hover:text-blue-700 font-medium">
          Ready4Weather →</a>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;
