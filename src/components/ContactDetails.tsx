import { Separator } from "@/components/ui/separator";

export const ContactDetails = () => {
    return (
        <div>
            {/* Header for the popover/section */}
            <h3 className="font-inter text-lg font-semibold text-primary">
                Contact Information
            </h3>
            <p className="mt-1 font-lato text-base text-muted-foreground">
                We're available during our business hours.
            </p>

            {/* A clean separator */}
            <Separator className="my-4 bg-secondary" />

            {/* Structured contact information */}
            <div className="space-y-4 font-lato">
                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Phone
                    </p>
                    <a
                        href="tel:+601116456391"
                        className="text-base text-primary transition-colors hover:text-muted-foreground"
                    >
                        +6011-1645-6391
                    </a>
                </div>

                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Email
                    </p>
                    <a
                        href="mailto:support@sovisys.com"
                        className="text-base text-primary transition-colors hover:text-muted-foreground"
                    >
                        support@sovisys.com
                    </a>
                </div>

                <div>
                    <p className="text-sm font-medium text-muted-foreground">
                        Business Hours
                    </p>
                    <p className="text-base text-primary">
                        Mon–Fri, 8AM – 6PM MYT
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
