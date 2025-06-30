import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="w-full py-20 lg:py-32">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="font-inter text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 font-lato text-lg leading-relaxed text-muted-foreground md:text-xl">
                        We're here to help and answer any questions you might
                        have. We look forward to hearing from you.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Direct Contact Info */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="flex items-start gap-5">
                            <div className="flex-shrink-0">
                                <Mail className="h-7 w-7 text-muted-foreground" />
                            </div>
                            <div>
                                <h3 className="font-inter text-xl font-semibold text-primary">
                                    Email Us
                                </h3>
                                <p className="font-lato text-base text-muted-foreground mt-1">
                                    A great choice for non-urgent matters. We'll
                                    get back to you within 24 hours.
                                </p>
                                <a
                                    href="mailto:support@sovisys.com"
                                    className="font-lato text-base text-primary underline-offset-4 hover:underline block mt-2"
                                >
                                    support@sovisys.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <div className="flex-shrink-0">
                                <Phone className="h-7 w-7 text-muted-foreground" />
                            </div>
                            <div>
                                <h3 className="font-inter text-xl font-semibold text-primary">
                                    Call Us
                                </h3>
                                <p className="font-lato text-base text-muted-foreground mt-1">
                                    Talk to a team member directly during our
                                    business hours.
                                </p>
                                <a
                                    href="tel:+601116456391"
                                    className="font-lato text-base text-primary underline-offset-4 hover:underline block mt-2"
                                >
                                    +6011-1645-6391
                                </a>
                                <p className="font-lato text-sm text-muted-foreground/80 mt-1">
                                    Mon–Fri, 8AM – 6PM MYT (Kuala Lumpur Time)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form Card */}
                    <div className="lg:col-span-3">
                        <Card className="border-secondary bg-background shadow-sm rounded-lg">
                            <CardHeader className="p-6 lg:p-8">
                                <CardTitle className="font-inter text-2xl font-semibold">
                                    Send a Direct Message
                                </CardTitle>
                                <CardDescription className="font-lato text-base pt-1">
                                    Fill out the form below and we'll be in
                                    touch.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 lg:p-8 pt-0">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="company">
                                                Company (Optional)
                                            </Label>
                                            <Input
                                                id="company"
                                                type="text"
                                                placeholder="Your Company Inc."
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your.name@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your IT challenges or goals..."
                                            rows={5}
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full font-semibold"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
