import { motion } from "framer-motion";
import PropTypes from "prop-types";

const BlogCard = ({ img, headlines }) => {
  return (
    <motion.div
      className="w-full p-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-3 rounded-lg cursor-pointer bg-white/10 backdrop-blur-md hover:scale-105 transition duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Image */}
      <img
        className="h-52 md:h-64 w-full object-cover rounded-lg"
        src={img}
        alt={headlines}
      />

      {/* Headline */}
      <h2 className="text-lg text-center font-semibold text-white">
        {headlines}
      </h2>

      {/* Excerpt */}
      <p className="text-center text-sm text-gray-500">
        Discover expert insights and simple, practical tips to help you stay on
        top of your health and well-being.
      </p>

      {/* Learn More Button */}
      <div className="flex justify-center">
        <button className="mt-4 border border-brightColor text-brightColor px-5 py-2 rounded-full hover:bg-brightColor hover:text-white transition">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};
BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  headlines: PropTypes.string.isRequired,
};

export default BlogCard;
