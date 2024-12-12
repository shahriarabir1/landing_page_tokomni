import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Business() {

  return (
    <div className="w-full flex justify-center h-screen">
      <div className="w-4/5 flex flex-col lg:flex-row items-center justify-between bg-gray-50 p-8 lg:px-16 lg:py-20 space-y-8 lg:space-y-0">
        {/* Left Text Section */}
        <div className="lg:w-1/2 flex justify-center relative text-section">
          {/* Graph SVG */}
          <div className="relative w-64 h-64 lg:w-full lg:h-full">
            <img
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/graph-4.svg"
              alt="Risk Level Graph"
              className="w-full h-full object-contain graph-img"
            />
          </div>
        </div>

        {/* Right Graph Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl text-end lg:text-3xl leading-snug mb-4">
            <span className="text-gray-900">Dealing with security threats is a challenge that every business faces.</span>
            <span className="text-gray-400">You can’t address them all, and you don’t have to, because they are
            not all equal in their impact.</span>
            <span className="text-gray-400"> While attacks can pose a real danger
            to your business, sometimes, so can the countermeasures.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
