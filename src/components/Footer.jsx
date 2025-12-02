// import React from 'react'

// const Footer = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           <div>
//             <h3 className="text-2xl font-elegant font-bold mb-4">EventElegance</h3>
//             <p className="text-gray-400 mb-4">Creating unforgettable moments that last a lifetime.</p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                 </svg>
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.36-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <div className="space-y-2">
//               <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
//               <button onClick={() => scrollToSection('events')} className="block text-gray-400 hover:text-white transition-colors">Events</button>
//               <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">Services</button>
//               <button onClick={() => scrollToSection('gallery')} className="block text-gray-400 hover:text-white transition-colors">Gallery</button>
//               <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">Contact</button>
//             </div>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
//             <div className="space-y-2 text-gray-400">
//               <p>📧 info@eventelegance.com</p>
//               <p>📞 (555) 123-4567</p>
//               <p>📍 123 Event Street, City, State</p>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//           <p>&copy; 2024 EventElegance. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


// with whatsapp add and lang
// import React from "react";
// import { useLanguage } from "../context/LanguageContext";

// const Footer = () => {
//   const { language } = useLanguage(); // ✅ get current language

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // ************************************
//   //  TEXT TRANSLATIONS
//   // ************************************
//   const t = {
//     brand: language === "ta" ? "இவேன்ட் எலிகன்ஸ்" : "EventElegance",
//     tagline:
//       language === "ta"
//         ? "உங்கள் நினைவுகளில் வாழும் மறக்க முடியாத தருணங்களை உருவாக்குகிறோம்."
//         : "Creating unforgettable moments that last a lifetime.",
//     quickLinks: language === "ta" ? "விரைவு இணைப்புகள்" : "Quick Links",
//     home: language === "ta" ? "முகப்பு" : "Home",
//     events: language === "ta" ? "நிகழ்வுகள்" : "Events",
//     services: language === "ta" ? "சேவைகள்" : "Services",
//     gallery: language === "ta" ? "கேலரி" : "Gallery",
//     contact: language === "ta" ? "தொடர்பு" : "Contact",
//     contactInfo: language === "ta" ? "தொடர்பு தகவல்" : "Contact Info",
//     rights:
//       language === "ta"
//         ? "© 2024 EventElegance. அனைத்து உரிமைகளும் பாதுகாக்கப்படுகின்றன."
//         : "© 2024 EventElegance. All rights reserved.",
//   };

//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

//           {/* BRAND */}
//           <div>
//             <h3 className="text-2xl font-elegant font-bold mb-4">
//               {t.brand}
//             </h3>
//             <p className="text-gray-400 mb-4">{t.tagline}</p>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
//             <div className="space-y-2">
//               <button onClick={() => scrollToSection("home")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.home}
//               </button>
//               <button onClick={() => scrollToSection("events")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.events}
//               </button>
//               <button onClick={() => scrollToSection("services")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.services}
//               </button>
//               <button onClick={() => scrollToSection("gallery")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.gallery}
//               </button>
//               <button onClick={() => scrollToSection("contact")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.contact}
//               </button>
//             </div>
//           </div>

//           {/* CONTACT INFO */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">{t.contactInfo}</h4>
//             <div className="space-y-2 text-gray-400">
//               <p>📧 info@eventelegance.com</p>
//               <p>📞 (555) 123-4567</p>
//               <p>📍 123 Event Street, City, State</p>
//             </div>
//           </div>


//           <a
//             href="https://wa.me/8489707861?text=Welcome%20to%20Event%20Planner!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-green-500 hover:text-green-400 transition-colors"
//           >
//             <svg
//               className="w-7 h-7"
//               viewBox="0 0 32 32"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M16.004 3.2c-7.045 0-12.8 5.708-12.8 12.708 0 2.24.588 4.421 1.708 6.354L3.2 28.8l6.69-1.742a12.71 12.71 0 0 0 6.114 1.554h.003c7.045 0 12.8-5.707 12.8-12.708 0-3.4-1.326-6.598-3.736-9.007C22.6 4.526 19.405 3.2 16.004 3.2zm0 23.067h-.002a10.37 10.37 0 0 1-5.273-1.45l-.378-.224-3.97 1.033 1.06-3.864-.246-.397a10.31 10.31 0 0 1-1.586-5.548c0-5.735 4.677-10.403 10.423-10.403 2.785 0 5.403 1.084 7.37 3.05 1.966 1.966 3.05 4.583 3.05 7.354 0 5.735-4.677 10.45-10.45 10.45zm5.669-7.76c-.31-.155-1.841-.91-2.128-1.013-.287-.103-.497-.155-.708.155-.21.31-.81 1.013-.994 1.222-.183.207-.366.233-.676.078-.31-.155-1.309-.48-2.492-1.53-.92-.82-1.54-1.833-1.723-2.143-.183-.31-.02-.478.137-.633.14-.139.31-.362.465-.543.155-.182.207-.31.31-.517.103-.206.052-.388-.026-.543-.078-.155-.708-1.708-.97-2.34-.255-.61-.515-.527-.708-.537l-.603-.01c-.207 0-.543.078-.827.388-.284.31-1.087 1.06-1.087 2.587 0 1.527 1.114 3.003 1.27 3.21.155.206 2.19 3.344 5.32 4.686.743.32 1.321.51 1.773.652.744.237 1.42.203 1.955.123.597-.088 1.841-.752 2.102-1.48.26-.727.26-1.35.182-1.48-.078-.13-.284-.207-.594-.362z" />
//             </svg>
//           </a>




//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//           <p>{t.rights}</p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import { useLanguage } from "../context/LanguageContext";

// const Footer = () => {
//   const { language } = useLanguage(); // get current language

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // ************************************
//   // TEXT TRANSLATIONS
//   // ************************************
//   const t = {
//     brand: language === "ta" ? "இவேன்ட் எலிகன்ஸ்" : "EventElegance",
//     tagline:
//       language === "ta"
//         ? "உங்கள் நினைவுகளில் வாழும் மறக்க முடியாத தருணங்களை உருவாக்குகிறோம்."
//         : "Creating unforgettable moments that last a lifetime.",
//     quickLinks: language === "ta" ? "விரைவு இணைப்புகள்" : "Quick Links",
//     home: language === "ta" ? "முகப்பு" : "Home",
//     events: language === "ta" ? "நிகழ்வுகள்" : "Events",
//     services: language === "ta" ? "சேவைகள்" : "Services",
//     gallery: language === "ta" ? "கேலரி" : "Gallery",
//     contact: language === "ta" ? "தொடர்பு" : "Contact",
//     contactInfo: language === "ta" ? "தொடர்பு தகவல்" : "Contact Info",
//     rights:
//       language === "ta"
//         ? "© 2024 EventElegance. அனைத்து உரிமைகளும் பாதுகாக்கப்படுகின்றன."
//         : "© 2024 EventElegance. All rights reserved.",
//   };

//   // ************************************
//   // WHATSAPP MESSAGE (AUTO SEND)
//   // ************************************

//   const englishMessage =
//     "https://wa.me/91760884994?text=Hi%20%F0%9F%91%8B%2C%20thank%20you%20for%20contacting%20Event%20Planner!%0AHow%20can%20we%20help%20you%20today%3F";

//   const tamilMessage =
//     "https://wa.me/91760884994?text=%E0%AE%B5%E0%AE%A3%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%AE%E0%AF%8D%20%F0%9F%91%8B%2C%20Event%20Planner-%E0%AE%90%20%E0%AE%A4%E0%AF%8A%E0%AE%9F%E0%AE%B0%E0%AF%8D%E0%AE%AA%E0%AF%81%20%E0%AE%95%E0%AF%8A%E0%AE%A3%E0%AF%8D%E0%AE%9F%E0%AE%A4%E0%AE%B1%E0%AF%8D%E0%AE%95%E0%AF%81%20%E0%AE%A8%E0%AE%A9%E0%AF%8D%E0%AE%B1%E0%AE%BF!%0A%E0%AE%89%E0%AE%99%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%81%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%81%20%E0%AE%8E%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AE%9F%E0%AE%BF%E0%AE%95%E0%AF%8D%20%E0%AE%89%E0%AE%A4%E0%AE%B5%E0%AE%B2%E0%AE%BE%E0%AE%AE%E0%AF%8D%3F";


//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

//           {/* BRAND */}
//           <div>
//             <h3 className="text-2xl font-elegant font-bold mb-4">
//               {t.brand}
//             </h3>
//             <p className="text-gray-400 mb-4">{t.tagline}</p>
//           </div>

//           {/* QUICK LINKS */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
//             <div className="space-y-2">
//               <button onClick={() => scrollToSection("home")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.home}
//               </button>
//               <button onClick={() => scrollToSection("events")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.events}
//               </button>
//               <button onClick={() => scrollToSection("services")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.services}
//               </button>
//               <button onClick={() => scrollToSection("gallery")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.gallery}
//               </button>
//               <button onClick={() => scrollToSection("contact")} className="block text-gray-400 hover:text-white transition-colors">
//                 {t.contact}
//               </button>
//             </div>
//           </div>

//           {/* CONTACT INFO */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">{t.contactInfo}</h4>
//             <div className="space-y-2 text-gray-400">
//               <p>📧 info@eventelegance.com</p>
              
//               <a href="tel:+917608849944" className="text-gray-400 hover:text-white transition-colors">
//                 📞 +91 7608849944
//               </a>

//               <p>📍 Chennai, Tamil Nadu</p>
//             </div>

//             {/* WhatsApp ICON */}
//             <a
//               href={language === "ta" ? tamilMessage : englishMessage}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-green-500 hover:text-green-400 transition-colors inline-block mt-4"
//             >
//               <svg
//                 className="w-8 h-8"
//                 viewBox="0 0 32 32"
//                 fill="currentColor"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M16.004 3.2c-7.045 0-12.8 5.708-12.8 12.708 0 2.24.588 4.421 1.708 6.354L3.2 28.8l6.69-1.742a12.71 12.71 0 0 0 6.114 1.554h.003c7.045 0 12.8-5.707 12.8-12.708 0-3.4-1.326-6.598-3.736-9.007C22.6 4.526 19.405 3.2 16.004 3.2zm0 23.067h-.002a10.37 10.37 0 0 1-5.273-1.45l-.378-.224-3.97 1.033 1.06-3.864-.246-.397a10.31 10.31 0 0 1-1.586-5.548c0-5.735 4.677-10.403 10.423-10.403 2.785 0 5.403 1.084 7.37 3.05 1.966 1.966 3.05 4.583 3.05 7.354 0 5.735-4.677 10.45-10.45 10.45zm5.669-7.76c-.31-.155-1.841-.91-2.128-1.013-.287-.103-.497-.155-.708.155-.21.31-.81 1.013-.994 1.222-.183.207-.366.233-.676.078-.31-.155-1.309-.48-2.492-1.53-.92-.82-1.54-1.833-1.723-2.143-.183-.31-.02-.478.137-.633.14-.139.31-.362.465-.543.155-.182.207-.31.31-.517.103-.206.052-.388-.026-.543-.078-.155-.708-1.708-.97-2.34-.255-.61-.515-.527-.708-.537l-.603-.01c-.207 0-.543.078-.827.388-.284.31-1.087 1.06-1.087 2.587 0 1.527 1.114 3.003 1.27 3.21.155.206 2.19 3.344 5.32 4.686.743.32 1.321.51 1.773.652.744.237 1.42.203 1.955.123.597-.088 1.841-.752 2.102-1.48.26-.727.26-1.35.182-1.48-.078-.13-.284-.207-.594-.362z" />
//               </svg>
//             </a>
//           </div>

//         </div>

//         <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
//           <p>{t.rights}</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // **************************
  // TEXT TRANSLATIONS
  // **************************
  const t = {
    brand: language === "ta" ? "இவேன்ட் எலிகன்ஸ்" : "THIRUMAGAL EVENT PLANER & DECORS",
    tagline:
      language === "ta"
        ? "உங்கள் நினைவுகளில் வாழும் மறக்க முடியாத தருணங்களை உருவாக்குகிறோம்."
        : "Creating unforgettable moments that last a lifetime.",
    quickLinks: language === "ta" ? "விரைவு இணைப்புகள்" : "Quick Links",
    home: language === "ta" ? "முகப்பு" : "Home",
    events: language === "ta" ? "நிகழ்வுகள்" : "Events",
    services: language === "ta" ? "சேவைகள்" : "Services",
    gallery: language === "ta" ? "கேலரி" : "Gallery",
    contact: language === "ta" ? "தொடர்பு" : "Contact",
    contactInfo: language === "ta" ? "தொடர்பு தகவல்" : "Contact Info",
    rights:
      language === "ta"
        ? "© 2024 EventElegance. அனைத்து உரிமைகளும் பாதுகாக்கப்படுகின்றன."
        : "© 2024 EventElegance. All rights reserved.",
  };

  // **************************
  // WHATSAPP MESSAGE
  // **************************
  const englishMessage =
    "https://wa.me/8489707861?text=Hi%20👋,%20thank%20you%20for%20contacting%20Event%20Planner!%0AHow%20can%20we%20help%20you%20today?";
  const tamilMessage =
    "https://wa.me/91760884994?text=வணக்கம்%20👋,%20Event%20Planner-ஐ%20தொடர்பு%20கொண்டதற்கு%20நன்றி!%0Aஉங்களுக்குப்%20எப்படி%20உதவலாம்?";

  const whatsappURL = language === "ta" ? tamilMessage : englishMessage;

  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-bold mb-4">{t.brand}</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                ["home", t.home],
                ["events", t.events],
                ["services", t.services],
                ["gallery", t.gallery],
                ["contact", t.contact],
              ].map(([id, label]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contactInfo}</h4>

            <div className="space-y-3 text-gray-400">
              <p>📧 info@eventelegance.com</p>

              <a
                href="tel:+917608849944"
                className="block hover:text-white transition-colors"
              >
                📞 +91 7608849944
              </a>

              <p>📍 Chennai, Tamil Nadu</p>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 32 32"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.004 3.2c-7.045 0-12.8 5.708-12.8 12.708 0 2.24.588 4.421 1.708 6.354L3.2 28.8l6.69-1.742a12.71 12.71 0 0 0 6.114 1.554h.003c7.045 0 12.8-5.707 12.8-12.708 0-3.4-1.326-6.598-3.736-9.007C22.6 4.526 19.405 3.2 16.004 3.2zm0 23.067h-.002a10.37 10.37 0 0 1-5.273-1.45l-.378-.224-3.97 1.033 1.06-3.864-.246-.397a10.31 10.31 0 0 1-1.586-5.548c0-5.735 4.677-10.403 10.423-10.403 2.785 0 5.403 1.084 7.37 3.05 1.966 1.966 3.05 4.583 3.05 7.354 0 5.735-4.677 10.45-10.45 10.45zm5.669-7.76c-.31-.155-1.841-.91-2.128-1.013-.287-.103-.497-.155-.708.155-.21.31-.81 1.013-.994 1.222-.183.207-.366.233-.676.078-.31-.155-1.309-.48-2.492-1.53-.92-.82-1.54-1.833-1.723-2.143-.183-.31-.02-.478.137-.633.14-.139.31-.362.465-.543.155-.182.207-.31.31-.517.103-.206.052-.388-.026-.543-.078-.155-.708-1.708-.97-2.34-.255-.61-.515-.527-.708-.537l-.603-.01c-.207 0-.543.078-.827.388-.284.31-1.087 1.06-1.087 2.587 0 1.527 1.114 3.003 1.27 3.21.155.206 2.19 3.344 5.32 4.686.743.32 1.321.51 1.773.652.744.237 1.42.203 1.955.123.597-.088 1.841-.752 2.102-1.48.26-.727.26-1.35.182-1.48-.078-.13-.284-.207-.594-.362z" />
              </svg>
              {language === "ta" ? "வாட்ஸ்அப்பில் தொடர்புகொள்ள" : "Chat on WhatsApp"}
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
