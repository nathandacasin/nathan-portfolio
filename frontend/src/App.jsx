// import { BrowserRouter, Routes, Route } from "react-router";
// import BaseLayout from "../src/layout/BaseLayout";
// import About from "../src/pages/About";
// import Education from "../src/pages/Education";
// import Projects from "../src/pages/Project";
// import Contact from "../src/pages/Contact";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<BaseLayout />}>
//           <Route path="about" element={<About />} />
//           <Route path="education" element={<Education />} />
//           <Route path="projects" element={<Projects />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import Footer from './portfolio/components/Footer';
import Navbar from './portfolio/components/Navbar';
import ContactMe from './portfolio/sections/ContactMe';
import Education from './portfolio/sections/Educ';
import About from './portfolio/sections/Home';
import Projects from './portfolio/sections/Projects';
import Tech from './portfolio/sections/Tech';


function App() {
   return (
    <div className="font-sans bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
      <header>
        <Navbar />
      </header>

      <main>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="tech"><Tech /></section>
        <section id="contact"><ContactMe /></section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
 

export default App;
