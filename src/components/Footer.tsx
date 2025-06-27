import { Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";

const Footer = () => {
    // Helper function for smooth scrolling
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { name: "Home", sectionId: "home" },
        { name: "Services", sectionId: "services" },
        { name: "About", sectionId: "about" },
        { name: "FAQ", sectionId: "faq" },
        { name: "Contact", sectionId: "contact" },
    ];

    return (
        <footer className="w-full bg-background border-t border-secondary">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-4 lg:grid-cols-12">
                    {/* Branding Column */}
                    <div className="md:col-span-4 lg:col-span-5">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Sovereign Systems Logo" className="h-8 w-auto" />
                            <span className="font-inter font-semibold text-xl text-primary">
                                Sovereign Systems
                            </span>
                        </div>
                        <p className="mt-4 font-lato text-base text-muted-foreground max-w-xs">
                            Proactive IT solutions designed to help your business grow and thrive.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="font-inter text-sm font-semibold uppercase tracking-wider text-primary">
                            Navigate
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.sectionId)}
                                        className="font-lato text-base text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="font-inter text-sm font-semibold uppercase tracking-wider text-primary">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <a href="#" className="font-lato text-base text-muted-foreground transition-colors hover:text-primary">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="font-lato text-base text-muted-foreground transition-colors hover:text-primary">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="font-inter text-sm font-semibold uppercase tracking-wider text-primary">
                            Connect
                        </h3>
                        <div className="mt-4 flex items-center gap-1">
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
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary py-8">
                    <p className="text-center font-lato text-sm text-muted-foreground sm:text-left">
                        © {new Date().getFullYear()} Sovereign Systems. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
