import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-muted">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="py-20 text-center">
                    <h3 className="font-inter text-3xl font-semibold tracking-tight text-primary sm:text-4xl text-balance">
                        Ready to elevate your technology?
                    </h3>
                    <p className="mt-4 font-lato text-lg text-muted-foreground">
                        Let's talk about the future of your business.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="font-semibold"
                            onClick={scrollToContact}
                        >
                            Get in Touch
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="Twitter">
                                <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <a href="#" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                            </a>
                        </Button>
                    </div>
                </div>

                <Separator className="bg-secondary" />

                {/* Bottom Bar */}
                <div className="flex flex-col-reverse items-center justify-between gap-4 py-8 sm:flex-row">
                    <p className="font-lato text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Sovereign Systems. All rights reserved.
                    </p>
                    <nav className="flex items-center gap-6">
                        <a href="#" className="font-lato text-sm text-muted-foreground transition-colors hover:text-primary">
                            Privacy Policy
                        </a>
                        <a href="#" className="font-lato text-sm text-muted-foreground transition-colors hover:text-primary">
                            Terms of Service
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
