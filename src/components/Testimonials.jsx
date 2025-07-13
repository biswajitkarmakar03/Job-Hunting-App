import React from 'react';

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer at TCS",
    feedback: "This platform helped me land my dream job. The resources and community are top-notch!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Priya Sen",
    role: "UI/UX Designer at Zoho",
    feedback: "Beautiful interface, great user experience. Everything is smooth and intuitive.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Rahul Das",
    role: "Full Stack Developer at Infosys",
    feedback: "I’ve grown so much professionally thanks to the courses and mentorship here.",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Sneha Roy",
    role: "Product Manager at Paytm",
    feedback: "The testimonials are true! This platform delivers real results. Highly recommend.",
    image: "https://i.pravatar.cc/150?img=11",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 lg:px-0" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What People Say About Us</h2>
        <p className="text-gray-600 mb-12">Real experiences from real users who’ve benefited from our platform.</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">“{testimonial.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
