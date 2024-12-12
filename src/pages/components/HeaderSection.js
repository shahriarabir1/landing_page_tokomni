import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HeaderSection = () => {
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate opacity and background image
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#trusted",
        start: "top center",
        end: "top 100px",
        scrub: true, // Smooth animation on scroll
      },
    });

    // Fade out the #trusted div
    tl.to("#trusted", { opacity: 0 }, 0);

    // Move the background image down and reduce its width
    tl.to("#header-background", {
      y: 100, // Move down
      scale: 0.8, // Reduce width
      ease: "none",
    }, 0);
  }, []);

  return (
    <div className="flex flex-col md:pt-32 w-full items-center gap-20 mt-32">
      {/* Header Section */}
      <div
        id="header-background"
        className="text-center py-16 px-6 sm:px-10 md:px-20 lg:px-32 bg-cover bg-center w-full flex flex-col items-center 
        bg-none md:bg-[url('https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/suridata-homepage-start-optimized.png')]"
      >
        <div className="md:w-5/12">
          <h1 className="text-3xl md:text-5xl text-gray-900">
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            أومنيتيليكوم
            </span>{" "}
            صياغة التواصل
          </h1>
          <p className="mt-4 text-gray-700 md:text-lg">
          تأمين استخدام تطبيقات البرمجيات كخدمة من منصة واحدة، بشكل استباقي.
          </p>
          <button className="mt-6 bg-gradient-to-r from-teal-500 via-indigo-500 to-blue-500 text-white px-6 py-3 rounded-md shadow hover:opacity-90">
          استكشف المنصة
          </button>
        </div>
      </div>

      {/* Trusted By Section */}
      <section id="trusted" className="bg-white py-5 border-2 items-center rounded-lg w-4/5">
        <h2 className="text-center text-gray-600 text-sm uppercase tracking-wide">
        موثوق به من قبل
        </h2>
        <div className="flex justify-center mt-6">
          <Image
            id="trusted-brands-image"
            src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/home-hero-brands-1-c.png"
            alt="Trusted by brands"
            width={800}
            height={100}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default HeaderSection;
