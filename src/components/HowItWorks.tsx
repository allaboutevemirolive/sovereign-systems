
const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We'll have a quick chat to understand your business, challenges, and goals."
    },
    {
      number: "2", 
      title: "IT Assessment",
      description: "We perform a comprehensive (and free) health check of your current systems."
    },
    {
      number: "3",
      title: "Strategic Proposal", 
      description: "We present a clear, customized plan with straightforward pricing."
    },
    {
      number: "4",
      title: "Onboarding & Support",
      description: "We seamlessly integrate with your team and begin proactive management."
    }
  ];

  return (
    <section className="py-32 px-6 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-inter font-light text-4xl sm:text-5xl text-primary mb-6">
            How It Works
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our simple, proven process makes getting started with professional IT support easy and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-inter font-bold text-2xl mx-auto mb-6 shadow-lg">
                {step.number}
              </div>
              <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                {step.title}
              </h3>
              <p className="font-lato text-muted-foreground leading-relaxed text-lg">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-muted"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
