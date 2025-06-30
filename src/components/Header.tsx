import { useState } from "react";
import logo from "@/assets/logo.png";
import { Button } from "./ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import { ContactDetails } from "./ContactDetails"; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-secondary">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <button
                        onClick={() => scrollToSection("home")}
                        className="flex items-center gap-3"
                        aria-label="Sovereign Systems Home"
                    >
                        <img
                            src={logo}
                            alt="Sovereign Systems Logo"
                            className="h-8 w-auto"
                        />
                        <span className="font-inter font-semibold text-xl text-primary hidden sm:block cursor-pointer">
                            Sovereign Systems
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <nav className="flex space-x-6">
                            <button
                                onClick={() => scrollToSection("services")}
                                className="font-lato text-base text-primary transition-colors hover:text-muted-foreground"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="font-lato text-base text-primary transition-colors hover:text-muted-foreground"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("faq")}
                                className="font-lato text-base text-primary transition-colors hover:text-muted-foreground"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="font-lato text-base text-primary transition-colors hover:text-muted-foreground"
                            >
                                Get a Quote
                            </button>
                        </nav>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="font-lato font-semibold">
                                    Contact Us
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80 border-secondary bg-background mr-4 p-6 shadow-xl rounded-lg">
                                <ContactDetails />
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span
                                className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                    isMenuOpen
                                        ? "rotate-45 translate-y-1"
                                        : "-translate-y-0.5"
                                }`}
                            ></span>
                            <span
                                className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                                    isMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            ></span>
                            <span
                                className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                                    isMenuOpen
                                        ? "-rotate-45 -translate-y-1"
                                        : "translate-y-0.5"
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-secondary">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="font-lato text-lg text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection("services")}
                                className="font-lato text-lg text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="font-lato text-lg text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("faq")}
                                className="font-lato text-lg text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                FAQ
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="font-lato text-lg text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                Get a Quote
                            </button>
                            <Separator className="!my-6 bg-secondary" />
                            <div className="pt-2">
                                <ContactDetails />
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
