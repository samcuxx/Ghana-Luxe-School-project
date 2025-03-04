import { Shield, Lock, Eye, FileText } from "lucide-react";

const privacySections = [
  {
    title: "Information We Collect",
    icon: Eye,
    content: [
      "Personal information (name, email, phone number)",
      "Shipping and billing addresses",
      "Payment information",
      "Order history and preferences",
      "Device and usage information",
    ],
  },
  {
    title: "How We Use Your Information",
    icon: FileText,
    content: [
      "Process your orders and payments",
      "Send order confirmations and updates",
      "Provide customer support",
      "Improve our products and services",
      "Send marketing communications (with your consent)",
    ],
  },
  {
    title: "Data Security",
    icon: Lock,
    content: [
      "Encryption of sensitive data",
      "Secure payment processing",
      "Regular security assessments",
      "Access controls and authentication",
      "Data backup and recovery procedures",
    ],
  },
  {
    title: "Your Rights",
    icon: Shield,
    content: [
      "Access your personal data",
      "Correct inaccurate information",
      "Request data deletion",
      "Opt-out of marketing communications",
      "Export your data",
    ],
  },
];

const dataRetention = {
  title: "Data Retention",
  description:
    "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.",
  periods: [
    {
      type: "Order Information",
      period: "7 years",
      reason: "Legal and accounting requirements",
    },
    {
      type: "Customer Accounts",
      period: "Indefinite",
      reason: "Until account deletion is requested",
    },
    {
      type: "Marketing Preferences",
      period: "Until updated",
      reason: "To respect your communication preferences",
    },
  ],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background py-16">
      <div className="container px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-5xl font-bold text-transparent">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We take your privacy seriously. This policy explains how we collect,
            use, and protect your personal information.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2">
          {privacySections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl bg-gradient-to-r from-card/50 to-background p-8 shadow-lg backdrop-blur transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex items-center space-x-4">
                <div className="rounded-xl bg-primary/10 p-3">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item) => (
                  <li
                    key={item}
                    className="flex items-start space-x-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-primary/60" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Data Retention */}
        <div className="mb-20">
          <h2 className="mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
            {dataRetention.title}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {dataRetention.description}
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dataRetention.periods.map((period) => (
              <div
                key={period.type}
                className="rounded-xl bg-gradient-to-r from-card/50 to-background p-6 shadow-lg backdrop-blur transition-all hover:shadow-xl"
              >
                <h3 className="mb-3 text-xl font-semibold">{period.type}</h3>
                <div className="mb-3 text-base font-medium text-primary">
                  {period.period}
                </div>
                <p className="text-base text-muted-foreground">
                  {period.reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-2xl bg-gradient-to-r from-card/50 to-background p-8 shadow-lg backdrop-blur">
          <h2 className="mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
            Contact Us
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            If you have any questions about our privacy policy or how we handle
            your data, please contact our Data Protection Officer:
          </p>
          <div className="space-y-4 text-base">
            <p className="flex items-center space-x-2">
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:privacy@ghanabags.com"
                className="text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                privacy@ghanabags.com
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <span className="font-semibold">Address:</span>
              <span className="text-muted-foreground">
                123 Privacy Street, Accra, Ghana
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
