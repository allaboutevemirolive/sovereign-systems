import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
    const location = useLocation();

    useEffect(() => {
        // This effect runs when the component mounts and when the URL hash changes
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.hash]);

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                <Testimonials />
                <About />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
