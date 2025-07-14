import React from 'react';
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";


const testimonials = [
  {
    name: "Amit Sharma",
    role: "Software Engineer at TCS",
    feedback: "This platform helped me land my dream job. The resources and community are top-notch!",
    image: person1,
  },
  {
    name: "Priya Sen",
    role: "UI/UX Designer at Zoho",
    feedback: "Beautiful interface, great user experience. Everything is smooth and intuitive.",
    image: person2,
  },
  {
    name: "Rahul Das",
    role: "Full Stack Developer at Infosys",
    feedback: "I’ve grown so much professionally thanks to the courses and mentorship here.",
    image: person3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 lg:px-0" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">What People Say About Us</h2>
        <p className="text-gray-600 mb-12 text-center">Real experiences from real users who’ve benefited from our platform.</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
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
