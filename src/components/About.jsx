import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {language === 'ta' ? 'எங்களை பற்றி' : 'About Us'}
        </h2>
        {/* <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {language === 'ta'
            ? 'EventElegance உங்கள் திருமணம், பிறந்தநாள், மற்றும் பிற விழாக்களை நினைவுகூரும் வகையில் அழகாகவும் சிறப்பாகவும் திட்டமிடுகிறது. எங்கள் குழு ஒவ்வொரு நிகழ்வையும் தனித்துவமானதாக ஆக்குகிறது.'
            : 'EventElegance beautifully plans weddings, birthdays, and other celebrations to make them memorable. Our team ensures every event is unique and elegant.'}
        </p> */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          {language === 'ta'
            ? 'திருமகள் ஈவேன்ட் பிளானர் 30 ஆண்டுகளுக்கும் மேலாக நம்பிக்கை, தரம், மற்றும் படைப்பாற்றலுடன் நினைவாக நிற்கும் நிகழ்வுகளை உருவாக்கி வருகிறது. திருமணங்கள், பிறந்தநாள் விழாக்கள், நிறுவன நிகழ்வுகள் உள்ளிட்ட அனைத்து விழாக்களையும் சிறப்பாக வடிவமைத்து வழங்குகிறோம். ஆயிரக்கணக்கான மகிழ்ச்சியான கிளையன்ட்களுடன், உங்கள் நிகழ்வு அழகாகவும், சிரமமில்லாமல், நினைவில் நிற்கும் வகையில் நடைபெற எங்கள் குழு முழு அக்கறையுடன் பணியாற்றுகிறது. ஒவ்வொரு நிகழ்வும் உங்கள் கனவு தருணங்களை நனவாக்கும் வகையில் அன்போடு, சிறப்புடன் உருவாக்கப்படுகிறது.'
            : 'Thirumagal Event Planner has been creating unforgettable moments for over 30 years with trust, quality, and creativity. We specialize in weddings, birthday celebrations, corporate events, and all special occasions. With thousands of happy clients, our team is dedicated to delivering beautifully planned, stress-free, and memorable events. Every event is crafted with care, attention to detail, and a commitment to excellence—turning your dream moments into reality.'}
        </p>
      </div>
    </section>
  );
};

export default About;
