import Image from "next/image";
import SideBar from "./SideBar";
import React from "react";

const ConnectSection = () => {
  return (
    <div className="flex justify-end w-10/12 gap-20 rtl relative">
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
                اتصل 
                </h2>
                <p className="text-gray-600 text-right" dir="rtl">
                بمجرد الاتصال، تكون المهمة الأولى لـ Suridata هي الاكتشاف؛ حيث تحدد تلقائيًا منصات SaaS التي تشكل جزءًا من بيئتك والتي قد تؤثر على وضع الأمان لديك. في غضون دقائق، يتصل Suridata بتطبيقات SaaS الخاصة بك ويبدأ العمل، باستخدام السياسات الجاهزة لاكتشاف الثغرات المخفية تحت عمليات SaaS الخاصة بك. يساعدك هذا التهيئة السلسة في رسم بيئة SaaS ووضع الأمان بسهولة
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
              تحديد مخاطر الأمان
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
              يمكن أن تكون مخاطر وتهديدات الأمان مدفونة بعمق، مخفية بواسطة التهيئات الخاطئة، وقواعد إدارة الوصول، والتغييرات في الإصدارات، وحتى الامتيازات القديمة. تقوم Suridata بالتنقيب عبر الطبقات لرسم خرائط الترابطات والاعتمادات المتبادلة والتداخلات والإغفالات لتحديد الأماكن التي قد تكمن فيها التهديدات في الانتظار
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
              أعطِ الأولوية للمخاطر
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
              بمجرد تحديد جميع مخاطر أمان SaaS، فإن التحدي التالي هو تحديد أين يجب أن تركز الجهود. يجب عليك تقييم المخاطر التي تؤثر بشكل أكبر على استمرارية الأعمال مقارنة بتلك التي يسهل استغلالها. تقوم Suridata بدراسة بيئة SaaS الخاصة بك لتصبح خبيرك في هذا المجال، مما يوفر وقتك وجهدك الثمين. والنتيجة هي قائمة شاملة ومرتبة بالأولويات من الإجراءات التي توجهك للتركيز على أكثر القضايا الحاسمة التي تهدد أساسيات بيئة SaaS الخاصة بك.
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
              معالجة التهديدات
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
              "يتطلب معالجة المخاطر والثغرات بشكل فعال اتباع نهج مركز. تقدم Suridata توصيات قابلة للتنفيذ وإرشادات خطوة بخطوة لمساعدتك في حل المشكلات بدقة. يساعد ذلك في تأمين تطبيقات SaaS الخاصة بك وتقليل التوقفات
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
              مراقبة باستمرار
              </h2>
              <p className="text-gray-600 text-right" dir="rtl">
              "الأمان ليس مهمة لمرة واحدة. مع Suridata، تحصل على إمكانيات المراقبة المستمرة، مما يضمن اكتشاف التهديدات الجديدة بشكل سريع ويبقي بيئة الـSaaS الخاصة بك آمنة. هذه المقاربة الاستباقية تقلل من المخاطر وتساعد في الحفاظ على الامتثال."
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
