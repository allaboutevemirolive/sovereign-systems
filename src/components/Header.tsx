import { useState } from 'react';
import logo from '@/assets/logo.png'; // 1. Import the logo image

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-secondary">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* 2. Replace the original text-only div with this button */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-3"
                        aria-label="Sovereign Systems Home"
                    >
                        <img src={logo} alt="Sovereign Systems Logo" className="h-8 w-auto" />
                        <span className="font-inter font-semibold text-xl text-primary hidden sm:block">
                            Sovereign Systems
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden w-6 h-6 flex flex-col justify-center items-center"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                        <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-secondary">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="font-lato text-primary hover:text-muted-foreground transition-colors duration-200 text-left"
                            >
                                Contact
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
