export const Benefits = () => {
  const benefits = [
    { title: "24/7 Protection", description: "Round-the-clock monitoring and threat detection" },
    { title: "AI-Powered", description: "Leveraging advanced machine learning algorithms" },
    { title: "Real-time Updates", description: "Constantly evolving to combat new threats" },
    { title: "Easy Integration", description: "Seamlessly integrates with existing systems" },
    { title: "Customizable", description: "Tailored solutions for your specific needs" },
    { title: "Cost-Effective", description: "Reduce cybersecurity costs with automation" },
  ];

  return (
    <section id="benefits" className="py-16 hero-background">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-crimson mb-8 text-center font-primary">Benefits of DarkGPT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-red-900 to-red-950 p-6 rounded-[10px] shadow-sm border border-gray-700 h-[16.8rem] w-[70%] mx-auto flex flex-col justify-center items-center transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-2 font-primary text-center">{benefit.title}</h3>
              <p className="text-text text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button className="px-6 py-2 text-sm font-medium text-white bg-transparent border-2 border-white rounded-full hover:scale-110 active:scale-100 transition-transform duration-200 ease-in-out">
            Contact Us
          </button>
          <button className="px-6 py-2 text-sm font-medium text-white bg-crimson rounded-full hover:scale-110 active:scale-100 transition-transform duration-200 ease-in-out">
            Buy DarkGPT
          </button>
        </div>
      </div>
    </section>
  );
};