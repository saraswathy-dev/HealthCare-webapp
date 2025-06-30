import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-gray-800">
      {/* Header */}
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start text-white">
            Latest Articles
          </h1>
          <p className="mt-2 text-center lg:text-start text-gray-300">
            Explore expert tips and trusted advice to stay informed and
            empowered about your health and wellness.
          </p>
        </div>

        <div className="mt-4 lg:mt-0">
          <Button title="Explore Articles" />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard img={img1} headlines="Unraveling the Mysteries of Sleep" />
          <BlogCard
            img={img2}
            headlines="The Heart-Healthy Diet: Simple Tips for Cardiovascular Wellness"
          />
          <BlogCard
            img={img3}
            headlines="Understanding Pediatric Vaccinations: Protecting Future Generations"
          />
          <BlogCard
            img={img4}
            headlines="Navigating Mental Health: Breaking the Stigma & Finding Support"
          />
          <BlogCard
            img={img5}
            headlines="The Importance of Regular Exercise for Healthy Aging"
          />
          <BlogCard
            img={img6}
            headlines="Skin Health 101: Simple Habits for Radiant Skin"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
