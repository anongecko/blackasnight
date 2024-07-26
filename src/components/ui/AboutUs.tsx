import React from 'react';
import Image from 'next/image';

export const AboutUs = () => {
  return (
    <section id="about" className="py-32 hero-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-crimson mb-8 font-primary">About DarkGPT</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image 
              src="/logoWhite.svg"
              alt="DarkGPT Logo"
              width={240}
              height={240}
              className="w-4/5 h-auto"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-white text-lg mb-4">
              DarkGPT is a cutting-edge AI specializing in cyber security, designed to make the web a far safer place for everyone. Our advanced algorithms and machine learning capabilities work tirelessly to detect, prevent, and mitigate cyber threats in real-time.
            </p>
            <p className="text-white text-lg mb-6">
              With DarkGPT, businesses and individuals can rest assured that their digital assets are protected by the most sophisticated AI-driven security system available.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 text-lg font-lg text-white border-2 border-white rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-transform duration-200 ease-in-out hover:scale-110">
                Contact Us
              </button>
              <button className="px-6 py-2 text-lg font-medium text-black bg-crimson rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-crimson transition-transform duration-200 ease-in-out hover:scale-110">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};