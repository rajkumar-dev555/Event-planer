import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-elegant font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from couples who trusted us with their special day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="p-8">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6 italic">
                "Absolutely perfect! They made our wedding day stress-free and magical. Every detail was handled flawlessly."
              </p>
              <h4 className="font-semibold text-gray-900">Sarah & John</h4>
              <p className="text-sm text-gray-500">Wedding, 2023</p>
            </div>
          </div>
          <div className="card text-center">
            <div className="p-8">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6 italic">
                "Professional, creative, and exceeded all our expectations. They brought our vision to life perfectly."
              </p>
              <h4 className="font-semibold text-gray-900">Emily & Michael</h4>
              <p className="text-sm text-gray-500">Anniversary, 2023</p>
            </div>
          </div>
          <div className="card text-center">
            <div className="p-8">
              <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6 italic">
                "Every detail was perfect. Highly recommend! They made our corporate event unforgettable."
              </p>
              <h4 className="font-semibold text-gray-900">Lisa & David</h4>
              <p className="text-sm text-gray-500">Corporate Event, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
