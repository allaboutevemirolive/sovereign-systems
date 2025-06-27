
const Services = () => {
  const services = [
    {
      title: "Managed IT Services",
      description: "Proactive monitoring, maintenance, and support for a flat monthly fee.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protecting your business from ransomware, phishing, and data breaches.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Cloud Computing & Migration",
      description: "Securely access your data from anywhere and reduce hardware costs.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "IT Strategy & Consulting",
      description: "A long-term technology plan to help your business scale efficiently.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "Data Backup & Disaster Recovery",
      description: "Ensuring your business can get back online quickly after any incident.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      title: "On-Demand IT Support",
      description: "Fast and friendly help when you need it most.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-inter font-light text-4xl sm:text-5xl text-primary mb-6">
            A Full Suite of IT Solutions
          </h2>
          <p className="font-lato text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From foundational support to long-term strategy, we provide the IT services your business needs to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-muted/50 overflow-hidden"
            >
              <div className="aspect-3/2 overflow-hidden bg-muted/20">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-inter font-semibold text-xl text-primary mb-4">
                  {service.title}
                </h3>
                <p className="font-lato text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
