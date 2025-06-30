import { Mail, Phone, Clock } from "lucide-react";

export const ContactDetails = () => (
    <div className="space-y-4">
        <h3 className="font-inter font-semibold text-primary mb-4 text-lg md:hidden">
            Contact Information
        </h3>
        <a
            href="tel:+601116456391"
            className="flex items-center gap-4 group"
        >
            <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <p className="font-lato font-medium text-primary group-hover:underline">
                +6011-1645-6391
            </p>
        </a>
        <a
            href="mailto:support@sovisys.com"
            className="flex items-center gap-4 group"
        >
            <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            <p className="font-lato font-medium text-primary group-hover:underline">
                support@sovisys.com
            </p>
        </a>
        <div className="flex items-start gap-4">
            <Clock className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
            <div>
                <p className="font-lato font-medium text-primary">
                    Mon–Fri, 8AM – 6PM MYT
                </p>
                <p className="text-sm text-muted-foreground">
                    (Kuala Lumpur Time)
                </p>
            </div>
        </div>
    </div>
);

export default ContactDetails;
