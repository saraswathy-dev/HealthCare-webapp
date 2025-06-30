import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import ServicesCard from "../layouts/ServicesCard";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-brightColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-brightColor" />;
  const icon3 = <FaHeartbeat size={35} className="text-brightColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14 bg-gray-800">
      {/* Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-white">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-300">
            Comprehensive care and personalized health solutions designed to
            help you live your healthiest life.
          </p>
        </div>

        <div className="mt-4 lg:mt-0">
          <Button title="Explore All Services" />
        </div>
      </div>

      {/* Services Cards */}
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServicesCard
          icon={icon1}
          title="Laboratory Diagnostics"
          description="Accurate and reliable lab testing to support early diagnosis and ongoing health monitoring."
        />

        <ServicesCard
          icon={icon2}
          title="Preventive Health Checkups"
          description="Comprehensive checkups designed to detect risks early and keep you on the path to wellness."
        />

        <ServicesCard
          icon={icon3}
          title="Cardiac Care"
          description="Heart health services focused on prevention, management, and promoting a strong, active life."
        />
      </div>
    </div>
  );
};

export default Services;
