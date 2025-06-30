import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Contact from "../models/Contact";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const openForm = () => {
    setShowForm(true);
    setMenuOpen(false);
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-20 text-white">
      <div className="flex justify-between items-center p-5 md:px-32 px-5 bg-black/30 backdrop-blur-md">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="text-2xl font-bold drop-shadow-md">GentleCare</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10 items-center text-lg font-medium">
          {["home", "about", "services", "doctors", "blog"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-hoverColor transition drop-shadow-md"
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1).replace("-", " ")}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex">
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition"
            onClick={openForm}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          {menuOpen ? (
            <AiOutlineClose size={28} onClick={toggleMenu} />
          ) : (
            <AiOutlineMenu size={28} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col fixed bg-black/70 backdrop-blur-md text-white left-0 top-0 pt-24 pb-8 gap-8 w-2/3 h-full text-center text-xl font-semibold transition-transform duration-300`}
      >
        {["home", "about", "services", "doctors", "blog"].map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition cursor-pointer"
            onClick={closeMenu}
          >
            {section.charAt(0).toUpperCase() +
              section.slice(1).replace("-", " ")}
          </Link>
        ))}

        <div>
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition"
            onClick={openForm}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Contact Form */}
      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Navbar;
