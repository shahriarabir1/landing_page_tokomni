import Image from "next/image";
import SideBar from "./SideBar";
import React from "react";

const ConnectSection = () => {
  return (
    <div className="flex justify-center w-11/12 gap-20 rtl">
      {/* Sidebar content */}
      <SideBar />
      <section className="bg-gray-50 py-16 w-4/5">
        {/* First Section */}
        <div id="section1" className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col items-end gap-4">
              <div className="flex flex-col space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 text-right">
                  Connect
                </h2>
                <p className="text-gray-600 text-right" dir="rtl">
                  באמצעות סורידטה, חיבור הפלטפורמות שלך הופך לפשוט ונגיש.
                  סורידטה מזהה באופן אוטומטי את פלטפורמות ה-SaaS שלך, מחברת אותן
                  במהירות, ומספקת פתרונות אבטחה מותאמים אישית שמאפשרים התחלה
                  חלקה ומהירה. תהליך הזיהוי מבטיח שהממשקים, השירותים והתצורות
                  שלך ימשיכו לפעול בצורה הרמונית, תוך מיפוי מקיף של כל התשתית
                  הקיימת. עם סורידטה, ניתן לבחון גם את האיומים הפוטנציאליים על
                  הפעילות שלך ולקבל תובנות על נקודות תורפה אפשריות שעלולות
                  להשפיע על רמת האבטחה של המערכת.
                </p>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="/pc.png"
              alt="Laptop Connect"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Section */}
        <div
          id="section2"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                Identify Security Risks
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                Security risks and threats can be buried deep, obscured by
                misconfigurations, access management rules, version changes, and
                even outdated privileges. Suridata digs through the layers to
                map out the interconnections, interdependencies, overlaps and
                oversights to identify where threats can be lying in wait.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="/pc.png"
              alt="Laptop Connect"
              width={550}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        {/* Third Section */}
        <div
          id="section3"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                Prioritize Risks​
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                Once all SaaS security risks have been identified, the next
                challenge is deciding where the efforts should be focused. You
                should evaluate which risks have more impact on business
                continuity vs. those that are easier to exploit. Suridata
                studies your SaaS environment to become your SaaS expert, saving
                precious time and effort. The result is a comprehensive,
                prioritized list of actions that guides you to focus on the most
                critical issues that threaten the foundations of your SaaS
                environment. ​
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-3.png"
              alt="Laptop Risks"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Fourth Section */}
        <div
          id="section4"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                Remediate Threats​
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                Addressing risks and vulnerabilities effectively requires a
                focused approach. Suridata provides actionable recommendations
                and step-by-step guidance to help you resolve issues with
                precision. This helps secure your SaaS applications and
                minimizes disruptions.​
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-4.png"
              alt="Remediate Threats"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Fifth Section */}
        <div
          id="section5"
          className="container mx-auto flex flex-col md:flex-row-reverse items-center gap-8 mt-16"
        >
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 text-right">
                Monitor Continuously​
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
                Security is not a one-time task. With Suridata, you gain access
                to continuous monitoring capabilities, ensuring that new threats
                are detected promptly and your SaaS environment remains secure.
                This proactive approach reduces risk and helps maintain
                compliance.
              </p>
            </div>
          </div>
          {/* Right Content */}
          <div className="md:w-1/2">
            <Image
              src="https://www.suridata.ai/wp-content/themes/suridata-theme/assets/images/home/screenshot-5.png"
              alt="Monitor Continuously"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectSection;
