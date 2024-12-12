import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SecurityThreats() {
  useEffect(() => {
    const textSpans = document.querySelectorAll('h1 span');
    const graphImage = document.querySelector('.graph-img');
    
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-section',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: false,
        onUpdate: self => {
          const progress = self.progress;
          
          // First span fade in
          if (progress >= 0.3) {
            gsap.to(textSpans[0], { color: "#4a5568" });
          }

          // Second span fade in
          if (progress >= 0.6) {
            gsap.to(textSpans[1], { color: "#4a5568" });
          }

          // Third span fade in and change graph image
          if (progress >= 0.9) {
            gsap.to(textSpans[2], { color: "#4a5568" });
            gsap.to(graphImage, { attr: { src: "https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/graph-2.svg" } });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className="w-full flex justify-center h-screen">
      <div className="w-4/5 flex flex-col lg:flex-row items-center justify-between bg-gray-50 p-8 lg:px-16 lg:py-20 space-y-8 lg:space-y-0">
        {/* Left Text Section */}
        <div className="lg:w-1/2 flex justify-center relative text-section">
          {/* Graph SVG */}
          <div className="relative w-64 h-64 lg:w-full lg:h-full">
            <img
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/graph-1.svg"
              alt="Risk Level Graph"
              className="w-full h-full object-contain graph-img"
            />
          </div>
        </div>

        {/* Right Graph Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl text-end lg:text-3xl leading-snug mb-4">
            <span className="text-gray-900">مواجهة التهديدات الأمنية هي تحدي يواجهه كل عمل تجاري.</span>
            <span className="text-gray-400">لا يمكنك التعامل مع جميعهم، ولا يجب عليك ذلك، لأنهم ليسوا جميعاً متساوين في تأثيرهم.</span>
            <span className="text-gray-400"> بينما يمكن أن تشكل الهجمات خطرًا حقيقيًا على عملك، أحيانًا يمكن أن تشكل التدابير المضادة أيضًا خطرًا.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
