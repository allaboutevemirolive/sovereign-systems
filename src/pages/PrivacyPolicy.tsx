import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const policySections = [
    {
        id: "intro",
        content: [
            'Sovereign Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website sovisys.com. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.',
        ],
    },
    {
        id: 1,
        title: "1. Collection of Your Information",
        content: [
            "We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, company name, email address, and telephone number, that you voluntarily give to us when you fill out the contact form. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Site.",
        ],
    },
    {
        id: 2,
        title: "2. Use of Your Information",
        content: [
            "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:",
            {
                type: "list",
                items: [
                    "Respond to your product and customer service requests.",
                    "Email you regarding your interest in our services.",
                    "Request feedback and contact you about your use of the Site.",
                    "Increase the efficiency and operation of the Site.",
                ],
            },
        ],
    },
    {
        id: 3,
        title: "3. Disclosure of Your Information",
        content: [
            "We do not share, sell, rent or trade your information with any third parties for their promotional purposes. We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, or to our third-party service providers who perform services for us or on our behalf.",
        ],
    },
    {
        id: 4,
        title: "4. Security of Your Information",
        content: [
            "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.",
        ],
    },
    {
        id: 5,
        title: "5. Contact Us",
        content: [
            'If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:support@sovisys.com" class="text-primary underline-offset-4 hover:underline">support@sovisys.com</a>.',
        ],
    },
];

// This internal component handles rendering each section, keeping the main component clean.
const PolicySection = ({ title, content }: { title?: string; content: any[] }) => (
    <div className={title ? "mt-12" : ""}>
        {title && (
            <h2 className="font-inter text-2xl font-semibold text-primary mb-4">
                {title}
            </h2>
        )}
        <div className="space-y-5 font-lato text-lg text-primary/90 leading-relaxed">
            {content.map((item, index) => {
                if (typeof item === "string") {
                    // Use dangerouslySetInnerHTML only for the link, which is safe as it's not user-generated.
                    if (item.includes("<a href")) {
                        return (
                            <p
                                key={index}
                                dangerouslySetInnerHTML={{ __html: item }}
                            />
                        );
                    }
                    return <p key={index}>{item}</p>;
                }
                if (item.type === "list") {
                    return (
                        <ul
                            key={index}
                            className="list-disc space-y-2 pl-6"
                        >
                            {item.items.map((li, liIndex) => (
                                <li key={liIndex}>{li}</li>
                            ))}
                        </ul>
                    );
                }
                return null;
            })}
        </div>
    </div>
);

const PrivacyPolicy = () => {
    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen">
            <Header />
            <main className="py-24 sm:py-32">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-12">
                        <h1 className="font-inter text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-2 font-lato text-base text-muted-foreground">
                            Last Updated:{" "}
                            {new Date().toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                    </div>

                    {policySections.map((section) => (
                        <PolicySection
                            key={section.id}
                            title={section.title}
                            content={section.content}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
