import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_48d7amu',
    'template_905v6en',
    form.current,
    'MUy67qiJsw2qqDqOy'
  ).then(() => {
    Swal.fire({
      title: "Message Sent!",
      text: "Thanks for reaching out. I'll get back to you soon.",
      icon: "success",
      confirmButtonColor: "#3b82f6",
      timer: 3000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
    });
    form.current.reset();
  }).catch(() => {
    Swal.fire({
      title: "Oops...",
      text: "Something went wrong. Please try again later.",
      icon: "error",
      confirmButtonColor: "#ef4444"
    });
  });
};


    return (
        <section id="contact" className="py-24 bg-gray-50">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">Contact Me</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-md space-y-5">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Full Name"
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email Address"
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="btn btn-neutral w-full">Send Message</button>
                </form>

                {/* Contact Info */}
                <div className="bg-white p-8 rounded-xl shadow-md space-y-6 text-gray-700">
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-black mt-1" />
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <p>yusufabdullah20000@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-black mt-1" />
                        <div>
                            <h4 className="font-semibold">Phone</h4>
                            <p>+880 1234 567 890</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-black mt-1" />
                        <div>
                            <h4 className="font-semibold">Location</h4>
                            <p>Chattogram, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
