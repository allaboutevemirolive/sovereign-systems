
const ProblemSolution = () => {
    const problems = [
        "Frustrated with slow computers and network downtime?",
        "Worried about cybersecurity threats and data loss?",
        "Struggling to keep up with changing technology?",
        "Paying for IT support that only reacts to problems?"
    ];

    const solutions = [
        {
            title: "Increased Productivity",
            description: "Proactive maintenance to prevent issues before they happen."
        },
        {
            title: "Peace of Mind",
            description: "Robust security solutions to protect your valuable data."
        },
        {
            title: "Strategic Growth",
            description: "A clear IT roadmap that aligns with your business goals."
        },
        {
            title: "Predictable Costs",
            description: "Simple, flat-rate plans instead of surprise bills."
        }
    ];

    return (
        <section className="py-24 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-white to-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Problem Side */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full border border-red-100">
                                <span className="text-red-600 font-inter font-medium text-sm">Current Challenges</span>
                            </div>
                            <h2 className="font-inter font-light text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1]">
                                Is Your Technology
                                <br />
                                <span className="font-medium">Holding You Back?</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {problems.map((problem, index) => (
                                <div key={index} className="flex items-start space-x-4 group">
                                    <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-200"></div>
                                    <p className="font-lato text-lg sm:text-xl text-muted-foreground leading-relaxed">
                                        {problem}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Solution Side */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-100">
                                <span className="text-green-600 font-inter font-medium text-sm">Our Solutions</span>
                            </div>
                            <h2 className="font-inter font-light text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1]">
                                We Make Technology
                                <br />
                                <span className="font-medium">Your Competitive Advantage</span>
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {solutions.map((solution, index) => (
                                <div key={index} className="group hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 rounded-lg border border-transparent hover:border-muted/30">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0 mt-2 group-hover:scale-110 transition-transform duration-200"></div>
                                        <div className="space-y-2">
                                            <h3 className="font-inter font-semibold text-xl sm:text-2xl text-primary">
                                                {solution.title}
                                            </h3>
                                            <p className="font-lato text-lg text-muted-foreground leading-relaxed">
                                                {solution.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
