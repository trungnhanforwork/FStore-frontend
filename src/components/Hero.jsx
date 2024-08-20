import heroImage from "../../public/heroPic.png";

const Hero = () => {
  return (
    <section className="bg-white py-18 mt-10 mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
