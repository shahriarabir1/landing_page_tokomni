import Image from "next/image";

export default function SecurityThreats() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col lg:flex-row items-center justify-between bg-gray-50 p-8 lg:px-16 lg:py-20 space-y-8 lg:space-y-0">
        {/* Left Text Section */}
        <div className="lg:w-1/2 flex justify-center relative">
          {/* Graph SVG */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <img
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/graph-1.svg"
              alt="Risk Level Graph"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Graph Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl text-end lg:text-3xl text-gray-900 leading-snug mb-4">
            Dealing with security threats is a challenge that every business
            faces.<span className="text-gray-400">You can’t address them all, and you don’t have to, because they are
            not all equal in their impact. While attacks can pose a real danger
            to your business, sometimes, so can the countermeasures.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
