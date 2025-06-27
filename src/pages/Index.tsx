
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Services />
                {/* <ProblemSolution /> */}
                {/* <HowItWorks /> */}
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
