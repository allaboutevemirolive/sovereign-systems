import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="relative w-full overflow-hidden bg-background" // Added relative and overflow-hidden for the background element
        >
            {/* Subtle, abstract background graphic */}
            <div
                aria-hidden="true"
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(234,234,234,0.4),transparent)]" />
            </div>

            {/* Content container with z-index to ensure it's on top */}
            <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-20 pb-10 text-center">
                <div className="max-w-4xl animate-fade-in space-y-6">
                    {/* Kicker */}
                    <p className="font-inter text-base font-semibold tracking-wider text-primary uppercase">
                        Technology That Drives Growth
                    </p>

                    {/* Main Headline */}
                    <h1 className="font-inter text-5xl font-bold leading-tight tracking-tighter text-primary sm:text-6xl lg:text-7xl text-balance">
                        Focus on your business.
                        <br />
                        We’ll handle the technology.
                    </h1>

                    {/* Sub-headline/Paragraph */}
                    <p className="mx-auto max-w-3xl font-lato text-lg leading-relaxed text-muted-foreground md:text-xl">
                        Proactive IT strategy, security, and support, designed to be your competitive advantage. Stop fighting with technology and start scaling.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
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
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
