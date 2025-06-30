import Button from "../layouts/Button";
import bgVideo from "../assets/video/background.mp4";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative w-full lg:w-4/5 space-y-5 mt-10 z-10">
        <h1 className="text-5xl font-bold leading-tight">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          We are committed to providing compassionate, personalized healthcare
          solutions that put your well-being first. From preventive care to
          advanced treatments, we’re here to guide you toward a healthier, more
          vibrant life.
        </p>
        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
