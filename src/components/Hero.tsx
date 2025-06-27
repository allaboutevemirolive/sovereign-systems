import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="w-full bg-background"
        >
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
                <div className="max-w-4xl animate-fade-in space-y-8">
                    {/* Main Headline */}
                    <h1 className="font-inter text-5xl font-extrabold leading-tight tracking-tighter text-primary sm:text-6xl lg:text-7xl text-balance">
                        Stop worrying about IT.
                        <br />
                        Start growing your business.
                    </h1>

                    {/* Sub-headline/Paragraph */}
                    <p className="mx-auto max-w-2xl font-lato text-lg leading-relaxed text-muted-foreground md:text-xl">
                        We handle your technology—from strategy and cybersecurity to 24/7 support—so you can focus on what you do best.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row cursor-pointer">
                        <Button
                            size="lg"
                            className="w-full px-8 text-base font-semibold sm:w-auto"
                            onClick={() => scrollTo('contact')}
                        >
                            Get a Free Consultation
                        </Button>
                        <Button
                            variant="link"
                            size="lg"
                            className="group text-base font-semibold text-primary"
                            onClick={() => scrollTo('services')}
                        >
                            Explore Our Services
                            <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
