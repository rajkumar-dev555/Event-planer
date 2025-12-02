// import React, { useState } from 'react'

// const EventTypes = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null)

//   const events = [
//     {
//       id: 1,
//       title: "Weddings",
//       description: "Your perfect day, perfectly planned",
//       image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "💒",
//       price: "Starting at $2,500",
//       details: "Complete wedding planning from venue selection to the final toast. Includes vendor coordination, timeline management, and day-of supervision.",
//       features: ["Venue coordination", "Vendor management", "Timeline planning", "Day-of coordination", "Rehearsal management"]
//     },
//     {
//       id: 2,
//       title: "Anniversaries",
//       description: "Celebrating love through the years",
//       image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "💕",
//       price: "Starting at $800",
//       details: "Romantic anniversary celebrations that honor your journey together.",
//       features: ["Venue decoration", "Catering coordination", "Entertainment booking", "Photography setup"]
//     },
//     {
//       id: 3,
//       title: "Birthdays",
//       description: "Making every year special",
//       image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "🎂",
//       price: "Starting at $500",
//       details: "Birthday parties that create lasting memories for all ages.",
//       features: ["Theme planning", "Cake coordination", "Entertainment", "Decor setup"]
//     },
//     {
//       id: 4,
//       title: "Retirement",
//       description: "Honoring a lifetime of achievements",
//       image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "🏆",
//       price: "Starting at $1,200",
//       details: "Celebrating career milestones and new beginnings.",
//       features: ["Venue selection", "Catering", "Awards ceremony", "Guest coordination"]
//     },
//     {
//       id: 5,
//       title: "Marriage Functions",
//       description: "Traditional celebrations with modern elegance",
//       image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "🎊",
//       price: "Starting at $1,800",
//       details: "Traditional wedding ceremonies with cultural significance.",
//       features: ["Cultural coordination", "Traditional setup", "Family coordination", "Ceremony planning"]
//     },
//     {
//       id: 6,
//       title: "Pregnancy Functions",
//       description: "Celebrating new beginnings",
//       image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "👶",
//       price: "Starting at $600",
//       details: "Baby showers and gender reveal parties.",
//       features: ["Theme decoration", "Game coordination", "Gift management", "Catering setup"]
//     },
//     {
//       id: 7,
//       title: "Food Functions",
//       description: "Culinary celebrations and feasts",
//       image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "🍽️",
//       price: "Starting at $400",
//       details: "Food-focused events and culinary experiences.",
//       features: ["Menu planning", "Chef coordination", "Setup management", "Service coordination"]
//     },
//     {
//       id: 8,
//       title: "Corporate Events",
//       description: "Professional gatherings with style",
//       image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       icon: "🏢",
//       price: "Starting at $1,500",
//       details: "Professional events that impress clients and colleagues.",
//       features: ["Conference planning", "AV setup", "Catering coordination", "Guest management"]
//     }
//   ]

//   const handleLearnMore = (event) => {
//     setSelectedEvent(event)
//   }

//   const closeModal = () => {
//     setSelectedEvent(null)
//   }

//   return (
//     <section id="events" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-gray-900 mb-6">
//             Our <span className="text-gradient">Event Types</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We specialize in creating memorable experiences for every occasion, from intimate gatherings to grand celebrations.
//           </p>
//         </div>

//         {/* Events Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {events.map((event) => (
//             <div key={event.id} className="card group cursor-pointer">
//               <div className="relative overflow-hidden rounded-t-xl">
//                 <img 
//                   src={event.image} 
//                   alt={event.title}
//                   className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="absolute top-4 right-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {event.icon}
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-xl font-elegant font-semibold text-gray-900 mb-3">
//                   {event.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   {event.description}
//                 </p>
//                 <div className="text-primary-600 font-semibold mb-3">
//                   {event.price}
//                 </div>
//                 <button 
//                   onClick={() => handleLearnMore(event)}
//                   className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
//                 >
//                   Learn More →
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 lg:p-12">
//             <h3 className="text-3xl font-elegant font-bold text-gray-900 mb-4">
//               Don't see your event type?
//             </h3>
//             <p className="text-lg text-gray-600 mb-6">
//               We're always excited to take on new challenges and create unique experiences.
//             </p>
//             <button className="btn-primary">
//               Contact Us Today
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Event Detail Modal */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="relative">
//               <img 
//                 src={selectedEvent.image} 
//                 alt={selectedEvent.title}
//                 className="w-full h-64 object-cover rounded-t-2xl"
//               />
//               <button 
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="p-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <span className="text-4xl">{selectedEvent.icon}</span>
//                 <div>
//                   <h3 className="text-3xl font-elegant font-bold text-gray-900">
//                     {selectedEvent.title}
//                   </h3>
//                   <div className="text-2xl font-bold text-primary-600">
//                     {selectedEvent.price}
//                   </div>
//                 </div>
//               </div>
              
//               <p className="text-gray-600 mb-6 text-lg">
//                 {selectedEvent.details}
//               </p>
              
//               <div className="mb-6">
//                 <h4 className="text-xl font-semibold text-gray-900 mb-3">What's Included:</h4>
//                 <ul className="space-y-2">
//                   {selectedEvent.features.map((feature, index) => (
//                     <li key={index} className="flex items-center gap-2 text-gray-600">
//                       <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div className="flex gap-4">
//                 <button className="btn-primary flex-1">
//                   Book This Event
//                 </button>
//                 <button 
//                   onClick={closeModal}
//                   className="btn-secondary flex-1"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }

// export default EventTypes



import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const EventTypes = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const { language } = useLanguage()

  // bilingual event data
  const events = [
     {
      id: 3,
      title: { ta: "பிறந்தநாள் விழா", en: "Birthdays" },
      description: { ta: "ஒவ்வொரு ஆண்டும் சிறப்பாக மாற்றுவோம்", en: "Making every year special" },
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🎂",
      price: { ta: "தொடக்கம் ₹50,000", en: "Starting at $500" },
      details: {
        ta: "எல்லா வயதினருக்கும் மறக்க முடியாத பிறந்தநாள் விழாக்களை ஏற்பாடு செய்கிறோம்.",
        en: "Birthday parties that create lasting memories for all ages."
      },
      features: {
        ta: ["தீம் திட்டமிடல்", "கேக் ஒருங்கிணைப்பு", "பொழுதுபோக்கு", "அலங்காரம் அமைத்தல்"],
        en: ["Theme planning", "Cake coordination", "Entertainment", "Decor setup"]
      }
    },
    {
      id: 1,
      title: { ta: "திருமணங்கள்", en: "Weddings" },
      description: {
        ta: "உங்கள் சிறந்த நாள், சிறப்பாக திட்டமிடப்பட்டது",
        en: "Your perfect day, perfectly planned"
      },
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💒",
      price: { ta: "தொடக்கம் ₹2,50,000", en: "Starting at $2,500" },
      details: {
        ta: "நிகழ்விடம் தேர்வு முதல் கடைசி நறுமண பானம் வரை முழுமையான திருமண திட்டமிடல். விற்பனையாளர் ஒருங்கிணைப்பு, கால அட்டவணை நிர்வாகம் மற்றும் நிகழ்வு நாள் மேற்பார்வை உட்பட.",
        en: "Complete wedding planning from venue selection to the final toast. Includes vendor coordination, timeline management, and day-of supervision."
      },
      features: {
        ta: ["நிகழ்விடம் ஒருங்கிணைப்பு", "விற்பனையாளர் மேலாண்மை", "கால அட்டவணை திட்டமிடல்", "நிகழ்வு நாள் ஒருங்கிணைப்பு", "முன் பயிற்சி மேலாண்மை"],
        en: ["Venue coordination", "Vendor management", "Timeline planning", "Day-of coordination", "Rehearsal management"]
      }
    },
    {
      id: 2,
      title: { ta: "ஆண்டுவிழாக்கள்", en: "Anniversaries" },
      description: {
        ta: "அன்பை வருடாந்தம் கொண்டாடுவோம்",
        en: "Celebrating love through the years"
      },
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💕",
      price: { ta: "தொடக்கம் ₹80,000", en: "Starting at $800" },
      details: {
        ta: "உங்கள் இணை வாழ்க்கை பயணத்தை நினைவுகூரும் காதல் நிறைந்த ஆண்டுவிழா விழாக்கள்.",
        en: "Romantic anniversary celebrations that honor your journey together."
      },
      features: {
        ta: ["நிகழ்விடம் அலங்காரம்", "உணவு ஒருங்கிணைப்பு", "பாடல்/நடன ஏற்பாடு", "புகைப்பட ஒழுங்கமைப்பு"],
        en: ["Venue decoration", "Catering coordination", "Entertainment booking", "Photography setup"]
      }
    },
   
    {
      id: 5,
      title: { ta: "திருமண விழாக்கள்", en: "Marriage Functions" },
      description: {
        ta: "பாரம்பரிய நிகழ்வுகள், நவீன அழகுடன்",
        en: "Traditional celebrations with modern elegance"
      },
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🎊",
      price: { ta: "தொடக்கம் ₹1,80,000", en: "Starting at $1,800" },
      details: {
        ta: "பாரம்பரிய கலாசார முக்கியத்துவத்துடன் திருமண நிகழ்வுகள்.",
        en: "Traditional wedding ceremonies with cultural significance."
      },
      features: {
        ta: ["கலாசார ஒருங்கிணைப்பு", "பாரம்பரிய அலங்காரம்", "குடும்ப ஒருங்கிணைப்பு", "திருமண திட்டமிடல்"],
        en: ["Cultural coordination", "Traditional setup", "Family coordination", "Ceremony planning"]
      }
    }
  ]

  const handleLearnMore = (event) => setSelectedEvent(event)
  const closeModal = () => setSelectedEvent(null)

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-gray-900 mb-6">
            {language === 'ta' ? <>எங்கள் <span className="text-gradient">நிகழ்வுகள்</span></> : <>Our <span className="text-gradient">Event Types</span></>}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ta'
              ? 'திருமணம் முதல் பிறந்தநாள் வரை ஒவ்வொரு விழாவையும் சிறப்பாகவும் நினைவாகவும் மாற்றுகிறோம்.'
              : 'We specialize in creating memorable experiences for every occasion, from intimate gatherings to grand celebrations.'}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div key={event.id} className="card group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={event.image}
                  alt={event.title[language]}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {event.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-elegant font-semibold text-gray-900 mb-3">
                  {event.title[language]}
                </h3>
                <p className="text-gray-600 mb-4">{event.description[language]}</p>
                <div className="text-primary-600 font-semibold mb-3">
                  {event.price[language]}
                </div>
                <button
                  onClick={() => handleLearnMore(event)}
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  {language === 'ta' ? 'மேலும் அறிக →' : 'Learn More →'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-elegant font-bold text-gray-900 mb-4">
              {language === 'ta' ? 'உங்கள் நிகழ்வு பட்டியலில் இல்லை?' : "Don't see your event type?"}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {language === 'ta'
                ? 'புதிய அனுபவங்களை உருவாக்க எப்போதும் தயாராக இருக்கிறோம்.'
                : "We're always excited to take on new challenges and create unique experiences."}
            </p>
            <button className="btn-primary">
              {language === 'ta' ? 'இன்றே எங்களை தொடர்பு கொள்ளுங்கள்' : 'Contact Us Today'}
            </button>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title[language]}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{selectedEvent.icon}</span>
                <div>
                  <h3 className="text-3xl font-elegant font-bold text-gray-900">
                    {selectedEvent.title[language]}
                  </h3>
                  <div className="text-2xl font-bold text-primary-600">
                    {selectedEvent.price[language]}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                {selectedEvent.details[language]}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {language === 'ta' ? 'இதில் சேர்க்கப்பட்டவை:' : "What's Included:"}
                </h4>
                <ul className="space-y-2">
                  {selectedEvent.features[language].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="btn-primary flex-1">
                  {language === 'ta' ? 'இந்த நிகழ்வை பதிவு செய்' : 'Book This Event'}
                </button>
                <button onClick={closeModal} className="btn-secondary flex-1">
                  {language === 'ta' ? 'மூடு' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default EventTypes

// import React, { useState, useRef } from 'react'
// import { useLanguage } from '../context/LanguageContext'
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const EventTypes = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null)
//   const { language } = useLanguage()
//   const scrollRef = useRef(null)

//   // Scroll handler
//   const scroll = (dir) => {
//     if (!scrollRef.current) return
//     const width = scrollRef.current.clientWidth
//     scrollRef.current.scrollBy({
//       left: dir === "left" ? -width : width,
//       behavior: "smooth"
//     })
//   }

//   // Ordered events
//   const events = [
//     {
//       id: 3,
//       title: { ta: "பிறந்தநாள் விழா", en: "Birthdays" },
//       description: { ta: "ஒவ்வொரு ஆண்டும் சிறப்பாக மாற்றுவோம்", en: "Making every year special" },
//       image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
//       icon: "🎂",
//       price: { ta: "தொடக்கம் ₹50,000", en: "Starting at $500" },
//       details: {
//         ta: "எல்லா வயதினருக்கும் மறக்க முடியாத பிறந்தநாள் விழாக்களை ஏற்பாடு செய்கிறோம்.",
//         en: "Birthday parties that create lasting memories for all ages."
//       },
//       features: {
//         ta: ["தீம் திட்டமிடல்", "கேக் ஒருங்கிணைப்பு", "பொழுதுபோக்கு", "அலங்காரம்"],
//         en: ["Theme planning", "Cake", "Entertainment", "Decor"]
//       }
//     },
//     {
//       id: 1,
//       title: { ta: "திருமணங்கள்", en: "Weddings" },
//       description: { ta: "உங்கள் சிறந்த நாள், சிறப்பாக திட்டமிடப்பட்டது", en: "Your perfect day, perfectly planned" },
//       image: "https://images.unsplash.com/photo-1519741497674-611481863552",
//       icon: "💒",
//       price: { ta: "தொடக்கம் ₹2,50,000", en: "Starting at $2,500" },
//       details: {
//         ta: "நிகழ்விடம் தேர்வு முதல் கடைசி நறுமண பானம் வரை முழுமையான திருமண திட்டமிடல்.",
//         en: "Complete planning from venue selection to the final toast."
//       },
//       features: {
//         ta: ["நிகழ்விடம்", "விற்பனையாளர்", "கால அட்டவணை", "நிகழ்வு நாள்"],
//         en: ["Venue", "Vendors", "Timeline", "Day-of support"]
//       }
//     },
//     {
//       id: 2,
//       title: { ta: "ஆண்டுவிழாக்கள்", en: "Anniversaries" },
//       description: { ta: "அன்பை வருடாந்தம் கொண்டாடுவோம்", en: "Celebrating love through the years" },
//       image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
//       icon: "💕",
//       price: { ta: "தொடக்கம் ₹80,000", en: "Starting at $800" },
//       details: {
//         ta: "உங்கள் இணை வாழ்க்கை பயணத்தை நினைவுகூரும் விழாக்கள்.",
//         en: "Romantic celebrations honoring your journey together."
//       },
//       features: {
//         ta: ["அலங்காரம்", "உணவு", "புகைப்படம்", "இசை"],
//         en: ["Decor", "Catering", "Photography", "Music"]
//       }
//     },
//     {
//       id: 101,
//       title: { ta: "மேஹந்தி விழா", en: "Mehendi Ceremony" },
//       description: { ta: "சந்தோஷ நிறைந்த நிற விழா", en: "A colourful celebration of joy" },
//       image: "https://images.unsplash.com/photo-1621784562841-5f0eaae41e98",
//       icon: "🌿",
//       price: { ta: "தொடக்கம் ₹40,000", en: "Starting at $400" },
//       details: {
//         ta: "மணவிழாவுக்கு முன் நடைபெறும் மேஹந்தி விழாவை கலைநயத்துடன் அமைக்கிறோம்.",
//         en: "Beautifully arranged mehendi ceremonies with elegant themes."
//       },
//       features: {
//         ta: ["மேஹந்தி கலைஞர்", "பாரம்பரிய அலங்காரம்", "புகைப்படம்", "ஒலிச் சிஸ்டம்"],
//         en: ["Mehendi artist", "Traditional décor", "Photography", "Audio setup"]
//       }
//     },
//     {
//       id: 102,
//       title: { ta: "கார்பரேட் நிகழ்வுகள்", en: "Corporate Events" },
//       description: { ta: "தொழில்முறை தரமான ஒருங்கிணைப்பு", en: "Professional & elegant corporate planning" },
//       image: "https://images.unsplash.com/photo-1589820296156-2454bb8f5033",
//       icon: "🏢",
//       price: { ta: "தொடக்கம் ₹1,20,000", en: "Starting at $1,200" },
//       details: {
//         ta: "நிறுவன நிகழ்வுகள், கூட்டங்கள், விருது வழங்கும் விழாக்கள் அனைத்தும் முழுமையாக திட்டமிடப்படும்.",
//         en: "Corporate meets, award nights, and formal events planned end-to-end."
//       },
//       features: {
//         ta: ["நிகழ்விடம் ஒருங்கிணைப்பு", "உணவு", "ஒளி ஒலி அமைப்பு", "அலங்காரம்"],
//         en: ["Venue coordination", "Catering", "Audio/Visual setup", "Decoration"]
//       }
//     }
//   ]

//   const handleLearnMore = (event) => setSelectedEvent(event)
//   const closeModal = () => setSelectedEvent(null)

//   return (
//     <section id="events" className="py-20 bg-white">

//       {/* Header */}
//       <div className="text-center mb-12 px-4">
//         <h2 className="text-4xl font-bold">
//           {language === "ta" ? "எங்கள் நிகழ்வுகள்" : "Our Event Types"}
//         </h2>
//         <p className="text-gray-600 mt-2">
//           {language === "ta"
//             ? "ஒவ்வொரு விழாவையும் சிறப்பாக உருவாக்குகிறோம்."
//             : "We make every celebration unforgettable."}
//         </p>
//       </div>

//       {/* MOBILE CAROUSEL */}
//       <div className="relative lg:hidden px-2">

//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//         >
//           <ChevronLeft />
//         </button>

//         <div
//           ref={scrollRef}
//           className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-2"
//         >
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="min-w-[260px] bg-white rounded-xl shadow-lg"
//             >
//               <img
//                 src={event.image}
//                 className="w-full h-40 object-cover rounded-t-xl"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-xl">{event.title[language]}</h3>
//                 <p className="text-gray-600 mt-1">{event.description[language]}</p>

//                 <button
//                   onClick={() => handleLearnMore(event)}
//                   className="text-primary-600 mt-3 block"
//                 >
//                   {language === "ta" ? "மேலும் அறிக →" : "Learn More →"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
//         >
//           <ChevronRight />
//         </button>
//       </div>

//       {/* DESKTOP */}
//       <div className="hidden lg:block relative max-w-7xl mx-auto mt-10 px-4">

//         <button
//           onClick={() => scroll("left")}
//           className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
//         >
//           <ChevronLeft size={26} />
//         </button>

//         <div
//           ref={scrollRef}
//           className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
//         >
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="min-w-[300px] bg-white rounded-xl shadow-lg hover:shadow-xl transition"
//             >
//               <img
//                 src={event.image}
//                 className="w-full h-48 object-cover rounded-t-xl"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold">{event.title[language]}</h3>
//                 <p className="text-gray-600 mt-1">{event.description[language]}</p>
//                 <button
//                   onClick={() => handleLearnMore(event)}
//                   className="text-primary-600 mt-3"
//                 >
//                   {language === "ta" ? "மேலும் அறிக →" : "Learn More →"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10"
//         >
//           <ChevronRight size={26} />
//         </button>
//       </div>

//       {/* MODAL */}
//       {selectedEvent && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden">
//             <img src={selectedEvent.image} className="w-full h-56 object-cover" />

//             <div className="p-5">
//               <h2 className="text-2xl font-bold">{selectedEvent.title[language]}</h2>
//               <p className="mt-3">{selectedEvent.details[language]}</p>

//               <button className="btn-primary w-full mt-4">
//                 {language === "ta" ? "பதிவு செய்" : "Book Now"}
//               </button>

//               <button onClick={closeModal} className="w-full mt-2 text-gray-600">
//                 {language === "ta" ? "மூடு" : "Close"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default EventTypes;



