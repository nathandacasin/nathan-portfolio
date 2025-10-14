function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md z-50">
      <ul className="flex justify-center gap-10 py-4 text-lg font-semibold">
        <li><a href="#about" className="hover:text-blue-500 transition pt-24">About</a></li>
        <li><a href="#education" className="hover:text-blue-500 transition">Education</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
        <li><a href="#tech" className="hover:text-blue-500 transition">Dev Toolkit</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
