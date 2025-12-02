// import React from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import EventTypes from './components/EventTypes'
// import Gallery from './components/Gallery'
// import Services from './components/Services'
// import Testimonials from './components/Testimonials'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// function App() {
//   return (
//     <div className="min-h-screen gradient-bg">
//       <Header />
//       <Hero />
//       <EventTypes />
//       <Services />
//       <Gallery />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </div>
//   )
// }

// export default App




import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventTypes from './components/EventTypes';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About'; // new
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen gradient-bg">
        <Header />
        <Hero />
        <About />
        <EventTypes />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
