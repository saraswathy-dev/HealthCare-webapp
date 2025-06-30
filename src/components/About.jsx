import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 bg-gray-900 shadow-lg">
      {/* Text Content */}
      <div className="w-full lg:w-3/4 space-y-4">
        <h1 className="text-4xl font-semibold text-center lg:text-start text-white">
          About Us
        </h1>

        <h2 className="text-lg text-gray-300 mb-4 text-center lg:text-start">
          Compassionate Care, Dignity, and Support for Every Stage of Life
        </h2>

        <p className="text-justify lg:text-start text-gray-300">
          At <span className="font-semibold text-white">GentelCare</span>, we
          believe every senior deserves to enjoy their golden years with health,
          independence, and dignity. Our mission is to deliver trusted
          healthcare and wellness services that empower seniors to lead
          fulfilling lives.
        </p>

        <p className="text-justify lg:text-start text-gray-300">
          With a dedicated team of healthcare professionals, we provide
          personalized care tailored to the unique needs of older adults.
          Whether it is routine check-ups, chronic condition management, or
          wellness programs, our approach is rooted in respect, compassion, and
          excellence.
        </p>

        <ul className="list-disc list-inside space-y-2 text-justify lg:text-start text-gray-300">
          <li>Personalized healthcare plans for seniors</li>
          <li>Experienced, compassionate medical professionals</li>
          <li>Senior-friendly facilities and services</li>
          <li>Focus on preventive care and healthy aging</li>
        </ul>

        <button className="mt-4 bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition">
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className="w-full lg:w-3/4">
        <img
          className="rounded-lg shadow-lg"
          src={img}
          alt="About GentelCare"
        />
      </div>
    </div>
  );
};

export default About;
