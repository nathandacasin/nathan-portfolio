import { Link, Outlet } from "react-router";

function BaseLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <ul className="flex gap-6">
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-yellow-300 transition-colors">
              Education
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-300 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <main className="flex-grow bg-gray-50 p-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © {new Date().getFullYear()} Nathaniel Dacasin | All Rights Reserved
      </footer>
    </div>
  );
}

export default BaseLayout;
