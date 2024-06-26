// pages/index.js
import React from 'react';
import { AnimatedBeamDemo } from './AnimatedBeam';
import TypingAnimation from './magicui/typing-animation';
import Navbar from './Navbar';
import MarqueeDemo from '../MarqueeDemo/page';

export default function HomePage() {
  return (
    <>
 <Navbar/>
 <div className="bg-white">
 

  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      
      </div>
      <div className="text-center">
      <TypingAnimation text='Welcome to Your Path to Wellness'/>
      <p className="mt-6 mb-4 text-gray-600 md:text-lg">Professional therapy services to help you find peace and balance in life.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">BOOK NOW </a>
         
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
    </div>
  </div>
</div>

      <section className="bg-green-100 py-20">
        <div className="container mx-auto px-6 text-center md:px-12">
        
       
         
         
          <AnimatedBeamDemo/>
       
        </div>
      </section>

     

      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Individual Therapy</h3>
              <p className="mt-4 text-gray-600">One-on-one sessions to help you navigate personal challenges and improve your mental health.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Couples Therapy</h3>
              <p className="mt-4 text-gray-600">Therapy sessions for couples to enhance communication and resolve conflicts.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Family Therapy</h3>
              <p className="mt-4 text-gray-600">Supportive therapy for families to strengthen relationships and improve dynamics.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">What Our Clients Say</h2>
          <MarqueeDemo/>
        </div>
      </section>
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-600 text-center">Our mission is to provide compassionate and professional therapy services to support your mental health and well-being.</p>
        </div>
      </section>
      <section id="contact" className="py-20 bg-green-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us</h2>
          <p className="mt-4 text-gray-600 text-center">Ready to start your journey to wellness? Contact us today to schedule an appointment.</p>
          <div className="mt-8 max-w-md mx-auto">
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea className="w-full mt-2 p-2 border border-gray-300 rounded-lg"></textarea>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

