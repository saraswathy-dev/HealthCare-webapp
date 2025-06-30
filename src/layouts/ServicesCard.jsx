import PropTypes from "prop-types";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4 w-full p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer bg-white/10 backdrop-blur-md transition-transform duration-300 ease-in-out hover:-translate-y-4 hover:scale-105">
      {/* Icon Container with Rotation */}
      <div className="bg-[#d5f2ec] p-4 rounded-full transition-transform duration-500 ease-in-out group-hover:rotate-12 group-hover:bg-[#ade9dc]">
        {icon}
      </div>

      {/* Title */}
      <h1 className="font-semibold text-lg text-white">{title}</h1>

      {/* Description */}
      <p className="text-gray-300 text-sm">{description}</p>

      {/* Learn More Link */}
      <h3 className="text-brightColor cursor-pointer hover:text-hoverColor transition duration-300 ease-in-out font-medium">
        Learn more
      </h3>
    </div>
  );
};

ServicesCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesCard;
