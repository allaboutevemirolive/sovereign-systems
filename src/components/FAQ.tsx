import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FAQ = () => {
    const faqs = [
        {
            question: "Is this going to be expensive?",
            answer: "Our services are designed to provide exceptional value and ROI. Most clients find that our proactive approach actually reduces their overall IT costs by preventing expensive downtime and emergency repairs. We offer transparent, flat-rate pricing so you always know what to expect.",
        },
        {
            question: "Is my business too small for your services?",
            answer: "Not at all! We specialize in working with small and medium-sized businesses. Whether you have 5 employees or 50, we have solutions that scale with your needs and budget. Many of our most successful partnerships started with growing businesses just like yours.",
        },
        {
            question: "Do I have to sign a long-term contract?",
            answer: "We believe in earning your business every month. While we offer discounts for annual commitments, we also provide month-to-month options. Our goal is to build a long-term partnership based on results, not contract obligations.",
        },
        {
            question: "What makes you different from other IT companies?",
            answer: "Three key differences: 1) We focus on your business goals first, technology second. 2) We're proactive, preventing problems before they impact your business. 3) We provide transparent communication and pricing - no surprises, no technical jargon you don't need.",
        },
        {
            question: "How quickly can you respond to urgent issues?",
            answer: "For critical issues that affect your business operations, we guarantee a response within 1 hour during business hours. For after-hours emergencies, we have 24/7 support available. Most issues are resolved remotely within minutes.",
        },
        {
            question: "Do you work with businesses in my industry?",
            answer: "We work with businesses across many industries including professional services, manufacturing, healthcare, retail, and more. Our solutions are customized to meet the specific compliance, security, and operational needs of your industry.",
        },
    ];

    return (
        <section id="faq" className="w-full py-20 lg:py-32">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="text-center mb-16">
                    <h2 className="font-inter text-4xl font-light tracking-tight text-primary sm:text-5xl">
                        Your Questions, Answered
                    </h2>
                    <p className="mt-4 font-lato text-lg leading-relaxed text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Find quick answers to common questions about our
                        services, pricing, and process.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-secondary"
                        >
                            <AccordionTrigger className="py-6 text-left font-inter text-xl font-medium text-primary hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-6">
                                <p className="font-lato text-lg leading-relaxed text-muted-foreground max-w-prose">
                                    {faq.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-16 text-center">
                    <p className="text-lg text-muted-foreground">
                        Still have questions?
                    </p>
                    <Button
                        variant="link"
                        className="group mt-1 text-lg font-semibold text-primary"
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Contact Our Team
                        <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
