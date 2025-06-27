import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

interface Testimonial {
    quote: string;
    name: string;
    company: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Our downtime went from 10 hours a month to zero. Sovereign Systems transformed our IT, and now we can focus on our customers instead of fighting with technology.",
        name: "Sarah Johnson",
        company: "Johnson Marketing Group",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
        quote: "We love that they understand our business goals first, then create technology solutions that actually help us grow. Their proactive approach has saved us countless headaches.",
        name: "Michael Chen",
        company: "Pacific Manufacturing",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
        quote: "Before, we never knew what our IT bills would be. Now we have a flat rate and comprehensive security that gives us real peace of mind. It's the best business decision we've made.",
        name: "Jennifer Rodriguez",
        company: "Rodriguez Law Firm",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="w-full py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-inter text-4xl font-light tracking-tight text-primary sm:text-5xl">
                        Trusted by Growing Businesses
                    </h2>
                    <p className="mt-4 font-lato text-lg leading-relaxed text-muted-foreground md:text-xl max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about their experience.
                    </p>
                </div>

                {/* Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
                >
                    <CarouselContent className="-ml-2">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="h-full border-secondary bg-transparent shadow-none rounded-lg">
                                        <CardContent className="flex h-full flex-col justify-between p-8">
                                            <div className="space-y-4">
                                                <Quote className="h-8 w-8 text-secondary" />
                                                <p className="font-inter text-lg font-medium leading-relaxed text-primary text-balance">
                                                    {testimonial.quote}
                                                </p>
                                            </div>
                                            <div className="mt-8 flex items-center gap-4 border-t border-secondary pt-6">
                                                <Avatar className="h-12 w-12">
                                                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                                    <AvatarFallback>
                                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-inter font-semibold text-primary">{testimonial.name}</p>
                                                    <p className="font-lato text-sm text-muted-foreground">{testimonial.company}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:inline-flex" />
                    <CarouselNext className="hidden lg:inline-flex" />
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
