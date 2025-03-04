import { Scale, FileText, AlertCircle, Shield, Gavel } from "lucide-react";

const termsSections = [
  {
    title: "Acceptance of Terms",
    icon: FileText,
    content: [
      "By accessing and using Ghana Bags, you agree to be bound by these Terms of Service.",
      "If you disagree with any part of these terms, you may not access our website.",
      "These terms apply to all users, including but not limited to browsers, vendors, customers, merchants, and content contributors.",
    ],
  },
  {
    title: "Use License", 
    icon: Scale,
    content: [
      "Permission is granted to temporarily access the materials on Ghana Bags for personal, non-commercial use only.",
      "This license does not include modifying, copying, or distributing materials for commercial purposes.",
      "You may not use our products or services for any illegal or unauthorized purpose.",
    ],
  },
  {
    title: "User Responsibilities",
    icon: Shield, 
    content: [
      "You are responsible for maintaining the confidentiality of your account.",
      "You must be at least 18 years old to use our services.",
      "You agree to provide accurate and complete information when making purchases.",
    ],
  },
  {
    title: "Intellectual Property",
    icon: Gavel,
    content: [
      "All content on Ghana Bags is the property of our company and protected by copyright laws.",
      "You may not use our trademarks or trade dress without our written permission.",
      "Any unauthorized use of our intellectual property may result in legal action.",
    ],
  },
];

const disclaimers = [
  {
    title: "Product Information",
    content:
      "We strive to display accurate product information, including prices and availability. However, we reserve the right to correct any errors and to change or update information at any time without notice.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Ghana Bags shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background py-16">
      <div className="container px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Please read these terms carefully before using our website. By using
            Ghana Bags, you agree to be bound by these terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2">
          {termsSections.map((section) => (
            <div 
              key={section.title} 
              className="rounded-2xl border bg-gradient-to-br from-card/50 to-background p-8 shadow-lg backdrop-blur transition-all hover:shadow-xl"
            >
              <div className="mb-6 flex items-center space-x-4">
                <div className="rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 p-3">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.content.map((item) => (
                  <li
                    key={item}
                    className="flex items-start space-x-3 text-base text-muted-foreground"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Important Disclaimers
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {disclaimers.map((disclaimer) => (
              <div
                key={disclaimer.title}
                className="rounded-2xl border bg-gradient-to-br from-card/50 to-background p-8 shadow-lg backdrop-blur"
              >
                <div className="mb-4 flex items-center space-x-3">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    {disclaimer.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {disclaimer.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="rounded-2xl border bg-gradient-to-br from-card/50 to-background p-8 shadow-lg backdrop-blur mb-20">
          <h2 className="mb-6 text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Changes to Terms
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            We reserve the right to modify these terms at any time. We will
            notify users of any material changes via email or through our
            website.
          </p>
          <p className="text-base text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center bg-gradient-to-br from-card/50 to-background rounded-2xl p-10 shadow-lg backdrop-blur">
          <h2 className="mb-6 text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Questions?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            If you have any questions about these terms, please contact us:
          </p>
          <div className="space-y-3 text-base">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:legal@ghanabags.com"
                className="text-primary hover:text-purple-600 transition-colors hover:underline"
              >
                legal@ghanabags.com
              </a>
            </p>
            <p>
              <span className="font-medium">Address:</span> 123 Legal Street,
              Accra, Ghana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
