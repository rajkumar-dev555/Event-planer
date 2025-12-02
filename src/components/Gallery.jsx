// // import React, { useState } from 'react'

// // const Gallery = () => {
// //   const [showAll, setShowAll] = useState(false)

// //   const allImages = [
// //     {
// //       id: 1,
// //       src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Elegant Wedding Ceremony",
// //       category: "Wedding"
// //     },
// //     {
// //       id: 2,
// //       src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Romantic Anniversary",
// //       category: "Anniversary"
// //     },
// //     {
// //       id: 3,
// //       src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Birthday Celebration",
// //       category: "Birthday"
// //     },
// //     {
// //       id: 4,
// //       src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Retirement Party",
// //       category: "Retirement"
// //     },
// //     {
// //       id: 5,
// //       src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Traditional Marriage Function",
// //       category: "Marriage"
// //     },
// //     {
// //       id: 6,
// //       src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Baby Shower",
// //       category: "Pregnancy"
// //     },
// //     {
// //       id: 7,
// //       src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Food Function",
// //       category: "Food"
// //     },
// //     {
// //       id: 8,
// //       src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Corporate Event",
// //       category: "Corporate"
// //     },
// //     {
// //       id: 9,
// //       src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Wedding Reception",
// //       category: "Wedding"
// //     },
// //     {
// //       id: 10,
// //       src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Anniversary Dinner",
// //       category: "Anniversary"
// //     },
// //     {
// //       id: 11,
// //       src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Birthday Party Setup",
// //       category: "Birthday"
// //     },
// //     {
// //       id: 12,
// //       src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       alt: "Corporate Conference",
// //       category: "Corporate"
// //     }
// //   ]

// //   const displayedImages = showAll ? allImages : allImages.slice(0, 8)

// //   return (
// //     <section id="gallery" className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-gray-900 mb-6">
// //             Our <span className="text-gradient">Gallery</span>
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Beautiful moments from our recent events. Each image tells a story of celebration, joy, and unforgettable memories.
// //           </p>
// //         </div>

// //         {/* Gallery Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
// //           {displayedImages.map((image) => (
// //             <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// //               <img 
// //                 src={image.src} 
// //                 alt={image.alt}
// //                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// //               <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 <h3 className="font-semibold text-lg">{image.alt}</h3>
// //                 <p className="text-sm text-gray-200">{image.category}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* View More Button */}
// //         <div className="text-center">
// //           <button 
// //             onClick={() => setShowAll(!showAll)}
// //             className="btn-primary text-lg px-8 py-4"
// //           >
// //             {showAll ? 'Show Less' : 'View More Photos'}
// //           </button>
// //         </div>

// //         {/* Stats Section */}
// //         <div className="mt-20 bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 lg:p-12">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// //             <div>
// //               <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
// //               <div className="text-gray-600">Events Planned</div>
// //             </div>
// //             <div>
// //               <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
// //               <div className="text-gray-600">Happy Clients</div>
// //             </div>
// //             <div>
// //               <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
// //               <div className="text-gray-600">Years Experience</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default Gallery


// import React, { useState } from "react";
// import { useLanguage } from "../context/LanguageContext";

// const Gallery = () => {
//   const [showAll, setShowAll] = useState(false);
//   const { language } = useLanguage();
//   const isTamil = language === "ta";

//   const allImages = [
//     {
//       id: 1,
//       src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "அழகான திருமண விழா",
//       altEn: "Elegant Wedding Ceremony",
//       categoryTa: "திருமணம்",
//       categoryEn: "Wedding",
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "இனிய ஆண்டு விழா",
//       altEn: "Romantic Anniversary",
//       categoryTa: "ஆண்டு விழா",
//       categoryEn: "Anniversary",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "பிறந்தநாள் கொண்டாட்டம்",
//       altEn: "Birthday Celebration",
//       categoryTa: "பிறந்தநாள்",
//       categoryEn: "Birthday",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "ஓய்வு விழா",
//       altEn: "Retirement Party",
//       categoryTa: "ஓய்வு",
//       categoryEn: "Retirement",
//     },
//     {
//       id: 5,
//       src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "பாரம்பரிய திருமண விழா",
//       altEn: "Traditional Marriage Function",
//       categoryTa: "திருமணம்",
//       categoryEn: "Marriage",
//     },
//     {
//       id: 6,
//       src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "குழந்தை வரவேற்பு விழா",
//       altEn: "Baby Shower",
//       categoryTa: "கர்ப்ப காலம்",
//       categoryEn: "Pregnancy",
//     },
//     {
//       id: 7,
//       src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "உணவு விழா",
//       altEn: "Food Function",
//       categoryTa: "உணவு",
//       categoryEn: "Food",
//     },
//     {
//       id: 8,
//       src: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "நிறுவன நிகழ்ச்சி",
//       altEn: "Corporate Event",
//       categoryTa: "நிறுவனம்",
//       categoryEn: "Corporate",
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "திருமண வரவேற்பு",
//       altEn: "Wedding Reception",
//       categoryTa: "திருமணம்",
//       categoryEn: "Wedding",
//     },
//     {
//       id: 10,
//       src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "ஆண்டு விழா இரவு விருந்து",
//       altEn: "Anniversary Dinner",
//       categoryTa: "ஆண்டு விழா",
//       categoryEn: "Anniversary",
//     },
//     {
//       id: 11,
//       src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "பிறந்தநாள் விழா அலங்காரம்",
//       altEn: "Birthday Party Setup",
//       categoryTa: "பிறந்தநாள்",
//       categoryEn: "Birthday",
//     },
//     {
//       id: 12,
//       src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       altTa: "நிறுவன மாநாடு",
//       altEn: "Corporate Conference",
//       categoryTa: "நிறுவனம்",
//       categoryEn: "Corporate",
//     },
//   ];

//   const displayedImages = showAll ? allImages : allImages.slice(0, 8);

//   return (
//     <section id="gallery" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl font-elegant font-bold text-gray-900 mb-6 font-[Noto Sans Tamil]">
//             {isTamil ? (
//               <>
//                 எங்கள் <span className="text-gradient">படத்தொகுப்பு</span>
//               </>
//             ) : (
//               <>
//                 Our <span className="text-gradient">Gallery</span>
//               </>
//             )}
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto font-[Noto Sans Tamil]">
//             {isTamil
//               ? "எங்கள் சமீபத்திய நிகழ்ச்சிகளில் இருந்து அழகான தருணங்கள். ஒவ்வொரு படமும் மகிழ்ச்சி மற்றும் நினைவுகளின் கதையை கூறுகிறது."
//               : "Beautiful moments from our recent events. Each image tells a story of celebration, joy, and unforgettable memories."}
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {displayedImages.map((image) => (
//             <div
//               key={image.id}
//               className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <img
//                 src={image.src}
//                 alt={isTamil ? image.altTa : image.altEn}
//                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <h3 className="font-semibold text-lg font-[Noto Sans Tamil]">
//                   {isTamil ? image.altTa : image.altEn}
//                 </h3>
//                 <p className="text-sm text-gray-200 font-[Noto Sans Tamil]">
//                   {isTamil ? image.categoryTa : image.categoryEn}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="text-center">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="btn-primary text-lg px-8 py-4"
//           >
//             {showAll
//               ? isTamil
//                 ? "குறைவாக காண்பி"
//                 : "Show Less"
//               : isTamil
//               ? "மேலும் படங்களை காண்க"
//               : "View More Photos"}
//           </button>
//         </div>

//         {/* Stats Section */}
//         <div className="mt-20 bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 lg:p-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-[Noto Sans Tamil]">
//             <div>
//               <div className="text-4xl font-bold text-primary-600 mb-2">
//                 500+
//               </div>
//               <div className="text-gray-600">
//                 {isTamil ? "திட்டமிடப்பட்ட நிகழ்ச்சிகள்" : "Events Planned"}
//               </div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-primary-600 mb-2">
//                 1000+
//               </div>
//               <div className="text-gray-600">
//                 {isTamil ? "மகிழ்ச்சியான வாடிக்கையாளர்கள்" : "Happy Clients"}
//               </div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
//               <div className="text-gray-600">
//                 {isTamil ? "ஆண்டுகள் அனுபவம்" : "Years Experience"}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;





// import React, { useState } from "react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import { useLanguage } from "../context/LanguageContext";

// // Local Images
// import birthdaypic from "../assets/photo/birthday/birthday1.png";
// import birthdaypic1 from "../assets/photo/birthday/birthday2.png";

// import weddingpic1 from "../assets/photo/weddingpic/weddingpic1.png";
// import weddingpic2 from "../assets/photo/weddingpic/weddingpic2.png";
// import weddingpic3 from "../assets/photo/weddingpic/weddingpic3.png";
// import weddingpic4 from "../assets/photo/weddingpic/widdingpic4.png";
// import weddingpic5 from "../assets/photo/weddingpic/weddingpic5.png";

// const Gallery = () => {
//   const { language } = useLanguage();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const t = {
//     ourWork: language === "ta" ? "எங்கள் படைப்புகள்" : "Our Work",
//     galleryTitle: language === "ta" ? "கேலரி தொகுப்பு" : "Gallery Collection",
//     explore:
//       language === "ta"
//         ? "எங்கள் பிரிவுகளில் உள்ள சிறந்த புகைப்படங்களை காணலாம்."
//         : "Explore the best of our photography across categories.",
//     clickToView: language === "ta" ? "பார்க்க கிளிக் செய்யவும்" : "Click to view",
//   };

//   // 🔥 All images (local + online)
//   const galleryImages = [
//     { id: 1, src: weddingpic1, alt: "Wedding Photo", category: "Weddings" },
//     { id: 2, src: weddingpic2, alt: "Wedding Couple", category: "Weddings" },
//     { id: 3, src: weddingpic3, alt: "Wedding Ceremony", category: "Weddings" },
//     { id: 4, src: weddingpic4, alt: "Wedding Celebration", category: "Weddings" },
//     { id: 5, src: weddingpic5, alt: "Wedding Stage", category: "Weddings" },

//     { id: 6, src: birthdaypic, alt: "Birthday Celebration", category: "Birthday" },
//     { id: 7, src: birthdaypic1, alt: "Birthday Party", category: "Birthday" },

//     // Online images
//     {
//       id: 8,
//       src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200",
//       alt: "Portrait Photography",
//       category: "Portraits",
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200",
//       alt: "Corporate Photography",
//       category: "Corporate",
//     },
//     {
//       id: 10,
//       src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
//       alt: "Product Showcase",
//       category: "Products",
//     },
//   ];

//   const categories = [
//     language === "ta" ? "அனைத்து" : "All",
//     "Portraits",
//     "Weddings",
//     "Corporate",
//     "Products",
//     "Birthday",
//   ];

//   const [activeCategory, setActiveCategory] = useState(
//     language === "ta" ? "அனைத்து" : "All"
//   );

//   const filteredImages =
//     activeCategory === "All" || activeCategory === "அனைத்து"
//       ? galleryImages
//       : galleryImages.filter((img) => img.category === activeCategory);

//   const openModal = (image, index) => {
//     setSelectedImage(image);
//     setCurrentIndex(index);
//   };

//   const closeModal = () => setSelectedImage(null);

//   const nextImage = () => {
//     const nextIndex = (currentIndex + 1) % filteredImages.length;
//     setCurrentIndex(nextIndex);
//     setSelectedImage(filteredImages[nextIndex]);
//   };

//   const prevImage = () => {
//     const prevIndex =
//       currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
//     setCurrentIndex(prevIndex);
//     setSelectedImage(filteredImages[prevIndex]);
//   };

//   return (
//     <section id="gallery" className="bg-gray-100 py-6">
//       <div className="container-max section-padding lg:p-16">
//         {/* Header */}
//         <div className="text-center mb-14">
//           {/* <div className="inline-block bg-accent-500/20 px-4 py-1 rounded-full mb-4">
//             <span className="text-accent-500 font-medium">{t.ourWork}</span>
//           </div> */}

//           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
//             {t.galleryTitle}
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-600">{t.explore}</p>
//         </div>

//         {/* Category Filter */}
//         <div className="flex gap-3 flex-wrap justify-center mb-10">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-5 py-2 rounded-full transition-all duration-300 text-sm ${activeCategory === category
//                   ? "bg-accent-500 text-black shadow-lg"
//                   : "bg-white text-gray-600 hover:bg-gray-900"
//                 }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* 🔥 Conditional Gallery */}
//         {activeCategory === "All" || activeCategory === "அனைத்து" ? (
//           <div className="space-y-8 p-2 border shadow-xl ">
//             {(() => {
//               const rows = [];
//               const imagesPerRow = 4;

//               for (let i = 0; i < galleryImages.length; i += imagesPerRow) {
//                 const rowImages = galleryImages.slice(i, i + imagesPerRow);
//                 const isReverse = (i / imagesPerRow) % 2 === 1;

//                 rows.push(
//                   <div key={i} className="overflow-hidden w-full">
//                     <div
//                       className={`flex gap-4 items-center ${isReverse ? "animate-scroll-right" : "animate-scroll-left"
//                         }`}
//                       style={{ width: "max-content" }}
//                     >
//                       {rowImages.map((image, index) => (
//                         <img
//                           key={image.id}
//                           src={image.src}
//                           alt={image.alt}
//                           onClick={() => openModal(image, index)}
//                           className="w-48 h-32 md:w-60 md:h-40 object-cover rounded-xl cursor-pointer hover:opacity-80 transition"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 );
//               }
//               return rows;
//             })()}
//           </div>
//         ) : (
//           /* remain same grid */
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 border">
//             {filteredImages.map((image, index) => (
//               <div
//                 key={image.id}
//                 className="relative rounded-xl overflow-hidden cursor-pointer group transform transition duration-300 hover:scale-105"
//                 onClick={() => openModal(image, index)}
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="w-full h-40 md:h-56 object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         )}


//         {/* Modal */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
//             <div className="relative max-w-3xl w-full">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-white"
//               >
//                 <X size={32} />
//               </button>
//               <button
//                 onClick={prevImage}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
//               >
//                 <ChevronLeft size={40} />
//               </button>

//               <img
//                 src={selectedImage.src}
//                 alt={selectedImage.alt}
//                 className="w-full max-h-[80vh] object-contain rounded-lg"
//               />

//               <button
//                 onClick={nextImage}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
//               >
//                 <ChevronRight size={40} />
//               </button>

//               <p className="text-white text-center mt-4">
//                 {selectedImage.alt}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Local Images
import birthdaypic from "../assets/photo/birthday/birthday1.png";
import birthdaypic1 from "../assets/photo/birthday/birthday2.png";

import weddingpic1 from "../assets/photo/weddingpic/weddingpic1.png";
import weddingpic2 from "../assets/photo/weddingpic/weddingpic2.png";
import weddingpic3 from "../assets/photo/weddingpic/weddingpic3.png";
import weddingpic4 from "../assets/photo/weddingpic/widdingpic4.png";
import weddingpic5 from "../assets/photo/weddingpic/weddingpic5.png";

const Gallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = {
    ourWork: language === "ta" ? "எங்கள் படைப்புகள்" : "Our Work",
    galleryTitle: language === "ta" ? "கேலரி தொகுப்பு" : "Gallery Collection",
    explore:
      language === "ta"
        ? "எங்கள் பிரிவுகளில் உள்ள சிறந்த புகைப்படங்களை காணலாம்."
        : "Explore the best of our photography across categories.",
  };

  const galleryImages = [
    { id: 1, src: weddingpic1, alt: "Wedding Photo", category: "Weddings" },
    { id: 2, src: weddingpic2, alt: "Wedding Couple", category: "Weddings" },
    { id: 3, src: weddingpic3, alt: "Wedding Ceremony", category: "Weddings" },
    { id: 4, src: weddingpic4, alt: "Wedding Celebration", category: "Weddings" },
    { id: 5, src: weddingpic5, alt: "Wedding Stage", category: "Weddings" },
    { id: 6, src: birthdaypic, alt: "Birthday Celebration", category: "Birthday" },
    { id: 7, src: birthdaypic1, alt: "Birthday Party", category: "Birthday" },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1200",
      alt: "Portrait Photography",
      category: "Portraits",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200",
      alt: "Corporate Photography",
      category: "Corporate",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
      alt: "Product Showcase",
      category: "Products",
    },
  ];

  const categories = [
    language === "ta" ? "அனைத்து" : "All",
    "Portraits",
    "Weddings",
    "Corporate",
    "Products",
    "Birthday",
  ];

  const [activeCategory, setActiveCategory] = useState(
    language === "ta" ? "அனைத்து" : "All"
  );

  const filteredImages =
    activeCategory === "All" || activeCategory === "அனைத்து"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="bg-gray-100 py-16">
      <div className="container-max section-padding px-4 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-accent-500/20 px-6 py-1 rounded-full mb-4">
            <span className="text-accent-500 font-medium tracking-wide">{t.ourWork}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            {t.galleryTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">{t.explore}</p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium ${activeCategory === category
                ? "bg-accent-500 text-black shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-900 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All button → animated rows */}
        {/* === MIRROR SCROLL GALLERY === */}
        {activeCategory === "All" || activeCategory === "அனைத்து" ? (
          <div className="w-full overflow-hidden py-10 select-none">

            {/* ROW 1 → LEFT SCROLL */}
            <div className="flex gap-4 animate-leftScroll">
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <img
                  key={"top-" + i}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => openModal(img, i % galleryImages.length)}
                  className="w-48 h-36 md:w-56 md:h-44 object-cover rounded-xl cursor-pointer hover:scale-105 duration-300"
                />
              ))}
            </div>

            {/* ROW 2 → RIGHT SCROLL (REVERSED ORDER) */}
            <div className="flex gap-4 mt-6 animate-rightScroll">
              {[...galleryImages].reverse().concat([...galleryImages].reverse()).map((img, i) => (
                <img
                  key={"bottom-" + i}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => openModal(img, (galleryImages.length - 1 - i) % galleryImages.length)}
                  className="w-48 h-36 md:w-56 md:h-44 object-cover rounded-xl cursor-pointer hover:scale-105 duration-300"
                />
              ))}
            </div>

          </div>
        ) : (


          /* Filter view grid */
          // <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          //   {filteredImages.map((image, index) => (
          //     <div
          //       key={image.id}
          //       className="relative rounded-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 shadow-md"
          //       onClick={() => openModal(image, index)}
          //     >
          //       <img
          //         src={image.src}
          //         alt={image.alt}
          //         className="w-full h-40 md:h-56 object-cover"
          //       />
          //     </div>
          //   ))}
          // </div>
          /* Filter view grid */
<div className="max-h-[500px] overflow-y-auto px-2 scrollbar-custom">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 py-2">
    {filteredImages.map((image, index) => (
      <div
        key={image.id}
        className="relative rounded-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 shadow-md"
        onClick={() => openModal(image, index)}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-40 md:h-56 object-cover"
        />
      </div>
    ))}
  </div>
</div>

        )}

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <button onClick={closeModal} className="absolute top-4 right-4 text-white">
                <X size={32} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronLeft size={40} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
              >
                <ChevronRight size={40} />
              </button>

              <p className="text-white text-center mt-4 text-lg">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 
