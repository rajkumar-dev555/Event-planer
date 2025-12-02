// import React from 'react'

// const Services = () => {
//   return (
//     <section id="services" className="py-20 gradient-bg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-elegant font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive event planning services tailored to your needs and budget.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Full Service Planning */}
//           <div className="card text-center">
//             <div className="p-8">
//               <div className="text-6xl mb-6">🎯</div>
//               <h3 className="text-2xl font-elegant font-bold text-gray-900 mb-4">
//                 Full Service Planning
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Complete event management from concept to execution, including vendor coordination, timeline management, and day-of supervision.
//               </p>
//               <ul className="text-left text-sm text-gray-500 space-y-2 mb-6">
//                 <li>• Initial consultation and vision planning</li>
//                 <li>• Vendor selection and negotiation</li>
//                 <li>• Timeline creation and management</li>
//                 <li>• Budget planning and tracking</li>
//                 <li>• Day-of coordination</li>
//               </ul>
//               <div className="text-2xl font-bold text-primary-600 mb-2">Starting at $2,500</div>
//               <button className="btn-primary w-full">
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Partial Planning */}
//           <div className="card text-center">
//             <div className="p-8">
//               <div className="text-6xl mb-6">🤝</div>
//               <h3 className="text-2xl font-elegant font-bold text-gray-900 mb-4">
//                 Partial Planning
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Perfect for couples who want to handle some planning themselves but need professional guidance for key decisions.
//               </p>
//               <ul className="text-left text-sm text-gray-500 space-y-2 mb-6">
//                 <li>• Vendor recommendations</li>
//                 <li>• Timeline review and adjustments</li>
//                 <li>• Design consultation</li>
//                 <li>• Final month coordination</li>
//                 <li>• Day-of supervision</li>
//               </ul>
//               <div className="text-2xl font-bold text-primary-600 mb-2">Starting at $1,500</div>
//               <button className="btn-primary w-full">
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Day-of Coordination */}
//           <div className="card text-center">
//             <div className="p-8">
//               <div className="text-6xl mb-6">⚡</div>
//               <h3 className="text-2xl font-elegant font-bold text-gray-900 mb-4">
//                 Day-of Coordination
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Professional coordination on your special day to ensure everything runs smoothly while you enjoy the moment.
//               </p>
//               <ul className="text-left text-sm text-gray-500 space-y-2 mb-6">
//                 <li>• Final vendor confirmations</li>
//                 <li>• Timeline execution</li>
//                 <li>• Vendor coordination</li>
//                 <li>• Problem solving</li>
//                 <li>• Guest assistance</li>
//               </ul>
//               <div className="text-2xl font-bold text-primary-600 mb-2">Starting at $800</div>
//               <button className="btn-primary w-full">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Additional Services */}
//         <div className="mt-16">
//           <h3 className="text-3xl font-elegant font-bold text-center text-gray-900 mb-8">
//             Additional Services
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center p-6 bg-white/50 rounded-xl">
//               <div className="text-4xl mb-4">🎨</div>
//               <h4 className="font-semibold text-gray-900 mb-2">Design & Décor</h4>
//               <p className="text-sm text-gray-600">Custom design concepts and décor setup</p>
//             </div>
//             <div className="text-center p-6 bg-white/50 rounded-xl">
//               <div className="text-4xl mb-4">📸</div>
//               <h4 className="font-semibold text-gray-900 mb-2">Photography</h4>
//               <p className="text-sm text-gray-600">Professional photography services</p>
//             </div>
//             <div className="text-center p-6 bg-white/50 rounded-xl">
//               <div className="text-4xl mb-4">🍰</div>
//               <h4 className="font-semibold text-gray-900 mb-2">Catering</h4>
//               <p className="text-sm text-gray-600">Menu planning and catering coordination</p>
//             </div>
//             <div className="text-center p-6 bg-white/50 rounded-xl">
//               <div className="text-4xl mb-4">🎵</div>
//               <h4 className="font-semibold text-gray-900 mb-2">Entertainment</h4>
//               <p className="text-sm text-gray-600">Music and entertainment booking</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services



import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  const isTamil = language === "ta";

  const mainServices = {
    ta: [
      {
        icon: "🎯",
        title: "முழு நிகழ்ச்சி திட்டமிடல்",
        desc: "தொடக்கம் முதல் நிறைவு வரை முழுமையான நிகழ்ச்சி மேலாண்மை.",
        features: [
          "ஆரம்ப ஆலோசனை",
          "Vendor தேர்வு & பேச்சுவார்த்தை",
          "நிகழ்ச்சி திட்டமிடல் & மேலாண்மை",
          "பட்ஜெட் கண்காணிப்பு",
          "நிகழ்ச்சி நாள் ஒருங்கிணைப்பு",
        ],
        price: "₹2,500 முதல்",
      },
      {
        icon: "🤝",
        title: "பகுதி திட்டமிடல்",
        desc: "சில திட்டங்களை நீங்களே கையாள விரும்புபவர்களுக்கு நிபுணர் வழிகாட்டுதல்.",
        features: [
          "Vendor பரிந்துரைகள்",
          "நிகழ்ச்சி நேர அட்டவணை பரிசீலனை",
          "வடிவமைப்பு ஆலோசனை",
          "இறுதி மாத ஒருங்கிணைப்பு",
          "நிகழ்ச்சி நாள் மேற்பார்வை",
        ],
        price: "₹1,500 முதல்",
      },
      {
        icon: "⚡",
        title: "நிகழ்ச்சி நாள் ஒருங்கிணைப்பு",
        desc: "உங்கள் சிறப்பு நாளில் அனைத்தும் சீராக நடைபெற நிபுணர் ஒருங்கிணைப்பு.",
        features: [
          "Vendor உறுதிப்படுத்தல்",
          "நேர அட்டவணை செயல்பாடு",
          "சிக்கல் தீர்வு",
          "விருந்தினர் உதவி",
        ],
        price: "₹800 முதல்",
      },
    ],
    en: [
      {
        icon: "🎯",
        title: "Full Service Planning",
        desc: "Complete event management from concept to execution.",
        features: [
          "Initial consultation",
          "Vendor selection & negotiation",
          "Timeline creation & management",
          "Budget tracking",
          "Day-of coordination",
        ],
        price: "$2,500",
      },
      {
        icon: "🤝",
        title: "Partial Planning",
        desc: "Perfect for those who want professional guidance for key decisions.",
        features: [
          "Vendor recommendations",
          "Timeline review",
          "Design consultation",
          "Final month coordination",
          "Day-of supervision",
        ],
        price: "$1,500",
      },
      {
        icon: "⚡",
        title: "Day-of Coordination",
        desc: "Professional coordination to ensure everything runs smoothly.",
        features: [
          "Final vendor confirmations",
          "Timeline execution",
          "Problem solving",
          "Guest assistance",
        ],
        price: "$800",
      },
    ],
  };

  const additionalServices = {
    ta: [
      { icon: "🎨", title: "வடிவமைப்பு & அலங்காரம்", desc: "சிறப்பு வடிவமைப்பு மற்றும் அலங்கார அமைப்பு" },
      { icon: "📸", title: "புகைப்படம்", desc: "தொழில்முறை புகைப்பட சேவைகள்" },
      { icon: "🍰", title: "உணவு & கேட்டரிங்", desc: "மெனு திட்டமிடல் மற்றும் கேட்டரிங் ஒருங்கிணைப்பு" },
      { icon: "🎵", title: "இசை & பொழுதுபோக்கு", desc: "இசை மற்றும் பொழுதுபோக்கு ஏற்பாடு" },
    ],
    en: [
      { icon: "🎨", title: "Design & Décor", desc: "Custom design and décor setup" },
      { icon: "📸", title: "Photography", desc: "Professional photography services" },
      { icon: "🍰", title: "Catering", desc: "Menu planning and catering coordination" },
      { icon: "🎵", title: "Entertainment", desc: "Music and entertainment booking" },
    ],
  };

  const mainData = isTamil ? mainServices.ta : mainServices.en;
  const additionalData = isTamil ? additionalServices.ta : additionalServices.en;

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 font-[Noto Sans Tamil]">
            🌟 {isTamil ? "எங்கள் சேவைகள்" : "Our Services"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-[Noto Sans Tamil]">
            {isTamil
              ? "உங்கள் தேவைகள் மற்றும் பட்ஜெட்டுக்கு ஏற்ப முழுமையான நிகழ்ச்சி திட்டமிடல் சேவைகள்."
              : "Comprehensive event planning services tailored to your needs and budget."}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainData.map((service, index) => (
            <div
              key={index}
              className="card bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition duration-300 rounded-xl text-center"
            >
              <div className="p-8">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 font-[Noto Sans Tamil]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-[Noto Sans Tamil]">{service.desc}</p>
                <ul className="text-left text-gray-500 text-sm space-y-2 mb-6">
                  {service.features.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  {isTamil ? service.price : `Starting at ${service.price}`}
                </div>
                <button className="btn-primary w-full">
                  {isTamil ? "தொடங்குங்கள்" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8 font-[Noto Sans Tamil]">
            {isTamil ? "கூடுதல் சேவைகள்" : "Additional Services"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalData.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/70 rounded-xl hover:shadow-md transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2 font-[Noto Sans Tamil]">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
