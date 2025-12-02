// import React from 'react'

// const Hero = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-gold-900/80 z-10"></div>
//         <img 
//           src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
//           alt="Elegant wedding setup"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//         <h1 className="text-4xl sm:text-5xl lg:text-7xl font-elegant font-bold mb-6 leading-tight">
//           Creating
//           <span className="block text-gold-300">Unforgettable</span>
//           <span className="block">Moments</span>
//         </h1>
        
//         <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
//           From intimate gatherings to grand celebrations, we craft extraordinary events that capture your vision and create lasting memories.
//         </p>
        
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button onClick={() => scrollToSection('services')} className="btn-primary text-lg px-8 py-4">
//             Plan Your Event
//           </button>
//           <button onClick={() => scrollToSection('gallery')} className="btn-secondary text-lg px-8 py-4">
//             View Gallery
//           </button>
//         </div>
        
//         {/* Scroll indicator */}
//         {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </div> */}
//       </div>
//     </section>
//   )
// }

// export default Hero



import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // *******************************
  //   TEXT TRANSLATIONS
  // *******************************
  const t = {
    title1: language === "ta" ? "உங்கள்" : "Creating",
    title2: language === "ta" ? "மறக்க முடியாத" : "Unforgettable",
    title3: language === "ta" ? "நிகழ்வுகள்" : "Moments",

    description:
      language === "ta"
        ? "சிறிய விழாக்களிலிருந்து பிரம்மாண்ட கொண்டாட்டங்கள் வரை, உங்கள் கனவை பூர்த்தி செய்யும் தருணங்களை நாங்கள் உருவாக்குகிறோம்."
        : "From intimate gatherings to grand celebrations, we craft extraordinary events that capture your vision and create lasting memories.",

    btnPlan: language === "ta" ? "உங்கள் நிகழ்வை திட்டமிடுங்கள்" : "Plan Your Event",
    btnGallery: language === "ta" ? "கேலரி பாருங்கள்" : "View Gallery",
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-gold-900/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Elegant wedding setup"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-elegant font-bold mb-6 leading-tight">
          {t.title1} <span className="block text-gold-300">{t.title2}</span>
          <span className="block">{t.title3}</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("services")}
            className="btn-primary text-lg px-8 py-4"
          >
            {t.btnPlan}
          </button>

          <button
            onClick={() => scrollToSection("gallery")}
            className="btn-secondary text-lg px-8 py-4"
          >
            {t.btnGallery}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;



