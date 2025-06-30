import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 gap-8">
        {/* Brand Info */}
        <div className="w-full md:w-1/4 space-y-4">
          <h1 className="font-semibold text-xl">WellnessVista</h1>
          <p className="text-sm text-gray-300">
            Our experienced medical team provides trusted care across
            specialties including orthopedics, cardiology, pediatrics,
            neurology, dermatology, and more.
          </p>
        </div>

        {/* About Links */}
        <div>
          <h1 className="font-medium text-xl pb-4">About Us</h1>
          <nav className="flex flex-col gap-2 text-gray-300">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor cursor-pointer"
            >
              Doctors
            </ScrollLink>
          </nav>
        </div>

        {/* Services Links */}
        <div>
          <h1 className="font-medium text-xl pb-4">Our Services</h1>
          <nav className="flex flex-col gap-2 text-gray-300">
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor cursor-pointer"
            >
              Lab Test
            </ScrollLink>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor cursor-pointer"
            >
              Health Check
            </ScrollLink>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor cursor-pointer"
            >
              Heart Health
            </ScrollLink>
          </nav>
        </div>

        {/* Contact Info + Social Icons */}
        <div className="w-full md:w-1/4 space-y-2">
          <h1 className="font-medium text-xl pb-4">Contact Us</h1>
          <p className="text-gray-300 text-sm">
            123 Baum Street, Baumplatz, IL 62701
          </p>
          <p className="text-gray-300 text-sm">support@care.com</p>
          <p className="text-gray-300 text-sm">+123-456-7890</p>

          <div className="flex gap-4 pt-4">
            <a href="#" className="hover:text-hoverColor text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-hoverColor text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-hoverColor text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Scroll Button */}
      <div className="relative">
        <p className="text-center py-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Developed by
          <span className="text-hoverColor"> Software Developer</span> | All
          rights reserved
        </p>

        <button
          className="absolute right-5 bottom-4 bg-hoverColor text-white p-2 rounded-full hover:scale-110 transition"
          onClick={() => scroll.scrollToTop({ duration: 500 })}
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
