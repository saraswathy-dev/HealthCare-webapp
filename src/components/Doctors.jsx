import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const Doctors = () => {
  const data = [
    {
      img: doc1,
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    { img: doc2, name: "Dr. Julian Bennett", specialties: "Cardiologist" },
    { img: doc3, name: "Dr. Camila Rodriguez", specialties: "Pediatrician" },
    { img: doc4, name: "Dr. Victor Nguyen", specialties: "Neurologist" },
    { img: doc5, name: "Dr. Ethan Carter", specialties: "Dermatologist" },
    { img: doc6, name: "Dr. Olivia Martinez", specialties: "Ophthalmologist" },
  ];

  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1023, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16 bg-gray-900">
      {/* Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-white">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-300">
            Meet our team of expert, compassionate healthcare professionals
            committed to your well-being.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-lg hover:bg-hoverColor transition"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-lg hover:bg-hoverColor transition"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Doctors Slider */}
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              key={index}
              className="h-[400px] text-white rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer bg-white/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-3 flex flex-col justify-between"
            >
              <img
                src={e.img}
                alt={e.name}
                className="h-56 w-full object-cover rounded-t-xl"
              />

              <div className="flex flex-col justify-center items-center p-4 space-y-2">
                <h1 className="font-semibold text-xl">{e.name}</h1>
                <h3 className="text-gray-300">{e.specialties}</h3>

                <button className="mt-2 bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
