import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

const Contact = () => {
    return (
        <section id="contact" className="w-full py-20 lg:py-32 bg-background">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-inter text-4xl font-light tracking-tight text-primary sm:text-5xl">
                        Ready to Get Started?
                    </h2>
                    <p className="mt-4 font-lato text-lg leading-relaxed text-muted-foreground md:text-xl max-w-3xl mx-auto">
                        Reach out for a free, no-obligation consultation. Let's discuss how we can turn your technology into a competitive advantage.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Direct Contact Info */}
                    <div className="space-y-8 pt-4">
                        <h3 className="font-inter text-2xl font-semibold text-primary">
                            Contact Us Directly
                        </h3>
                        <div className="space-y-6">
                            <a href="mailto:contact@sovereignsystems.com" className="flex items-start gap-4 group">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-inter text-lg font-semibold text-primary">Email</h4>
                                    <p className="font-lato text-muted-foreground transition-colors group-hover:text-primary">contact@sovereignsystems.com</p>
                                    <p className="font-lato text-sm text-muted-foreground/80">Response within 2 hours</p>
                                </div>
                            </a>
                            <a href="tel:5551234567" className="flex items-start gap-4 group">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-inter text-lg font-semibold text-primary">Phone</h4>
                                    <p className="font-lato text-muted-foreground transition-colors group-hover:text-primary">(555) 123-4567</p>
                                    <p className="font-lato text-sm text-muted-foreground/80">Mon-Fri, 8AM - 6PM PST</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form Card */}
                    <div className="rounded-lg bg-muted p-8 lg:p-12">
                        <h3 className="font-inter text-2xl font-semibold text-primary mb-6">
                            Send Us a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company Name</Label>
                                    <Input id="company" type="text" placeholder="Your Company Inc." required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">How can we help?</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your IT challenges or goals..."
                                    rows={4}
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full font-semibold">
                                Schedule My Free Consultation
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
