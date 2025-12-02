// import React, { useState } from 'react'

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="text-2xl font-elegant font-bold text-gradient">
//               EventElegance
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
//               Home
//             </button>
//             <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
//               Events
//             </button>
//             <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
//               Services
//             </button>
//             <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
//               Gallery
//             </button>
//             <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
//               Contact
//             </button>
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <button className="btn-primary">
//               Book Now
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-700 hover:text-primary-600 focus:outline-none"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//               <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
//                 Home
//               </button>
//               <button onClick={() => scrollToSection('events')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
//                 Events
//               </button>
//               <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
//                 Services
//               </button>
//               <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
//                 Gallery
//               </button>
//               <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
//                 Contact
//               </button>
//               <div className="px-3 py-2">
//                 <button className="btn-primary w-full">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   )
// }

// export default Header




import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo/tk1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
         
         
          <div className="flex items-center gap-0">
           
              {/* <img src={logo} alt="" className='h-20 w-20' /> */}
            
            
            <div className="text-2xl font-elegant font-bold text-gradient max-w-sm">
              THIRUMAGAL KALYAN  EVENT PLANER & DECORS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {language === 'ta' ? 'முகப்பு' : 'Home'}
            </button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {language === 'ta' ? 'நிகழ்வுகள்' : 'Events'}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {language === 'ta' ? 'சேவைகள்' : 'Services'}
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {language === 'ta' ? 'கேலரி' : 'Gallery'}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              {language === 'ta' ? 'தொடர்பு' : 'Contact'}
            </button>
          </nav>

          {/* CTA + Language Toggle */}
          <div className="hidden md:flex space-x-3 items-center">
            <button className="btn-primary">
              {language === 'ta' ? ' பதிவுசெய்' : 'Book Now'}
            </button>
            {/* இப்போது */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100"
            >
              {language === 'ta' ? 'English' : 'தமிழ்'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                {language === 'ta' ? 'முகப்பு' : 'Home'}
              </button>
              <button onClick={() => scrollToSection('events')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                {language === 'ta' ? 'நிகழ்வுகள்' : 'Events'}
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                {language === 'ta' ? 'சேவைகள்' : 'Services'}
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                {language === 'ta' ? 'கேலரி' : 'Gallery'}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                {language === 'ta' ? 'தொடர்பு' : 'Contact'}
              </button>
              <div className="px-3 py-2 space-y-2">
                <button className="btn-primary w-full">
                  {language === 'ta' ? 'இப்போது பதிவு செய்' : 'Book Now'}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="w-full border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-100"
                >
                  {language === 'ta' ? 'English' : 'தமிழ்'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


