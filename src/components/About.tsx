import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <section id="about" className="w-full py-20 lg:py-32">
            <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16 lg:gap-24">
                {/* Text Content Column */}
                <div className="flex flex-col items-start space-y-8">
                    <h2 className="font-inter text-4xl font-semibold tracking-tight text-primary sm:text-5xl text-balance">
                        Your Business Partner in Technology.
                    </h2>
                    <div className="space-y-6 max-w-prose font-lato text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Sovereign Systems was founded with a simple belief: technology should accelerate business growth, not complicate it. After seeing companies struggle with reactive IT and surprise bills, we built a proactive, partnership-based model.
                        </p>
                        <p>
                            Our approach is to understand your business first, then build technology solutions that move you forward. We're here to be your trusted technology partner for the long haul.
                        </p>
                    </div>
                    <div className="flex w-full items-center gap-6 pt-4 sm:gap-8">
                        <div className="text-left sm:text-center">
                            <p className="font-inter text-4xl font-bold text-primary">15+</p>
                            <p className="font-lato text-sm uppercase tracking-wider text-muted-foreground">Years Experience</p>
                        </div>
                        <Separator orientation="vertical" className="h-10" />
                        <div className="text-left sm:text-center">
                            <p className="font-inter text-4xl font-bold text-primary">150+</p>
                            <p className="font-lato text-sm uppercase tracking-wider text-muted-foreground">Businesses Helped</p>
                        </div>
                        <Separator orientation="vertical" className="h-10" />
                        <div className="text-left sm:text-center">
                            <p className="font-inter text-4xl font-bold text-primary">99%</p>
                            <p className="font-lato text-sm uppercase tracking-wider text-muted-foreground">Client Retention</p>
                        </div>
                    </div>
                </div>

                {/* Image Column */}
                <div className="relative overflow-hidden rounded-lg border border-secondary/50 shadow-xs">
                    <div className="aspect-4/5">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop"
                            alt="A team collaborating in a modern office"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
