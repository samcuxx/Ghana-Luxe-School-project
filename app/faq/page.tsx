"use client";

import {
  ChevronDown,
  Package,
  CreditCard,
  Truck,
  Shield,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    title: "Orders & Shipping",
    icon: Truck,
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Shipping times vary by location. Within Greater Accra, delivery typically takes 1-2 business days. For other regions, expect 3-5 business days. International shipping may take 7-14 business days.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. Please check our shipping page for detailed information.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is shipped, you&apos;ll receive a tracking number via email. You can use this number to track your order status on our website or the courier&apos;s website.",
      },
    ],
  },
  {
    title: "Payment",
    icon: CreditCard,
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard), MTN Mobile Money, and Vodafone Cash. All payments are processed securely through our payment partners.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, we use industry-standard encryption to protect your payment information. We never store your full credit card details on our servers.",
      },
      {
        question: "Do you offer installment payments?",
        answer:
          "Yes, we offer installment payment options for orders above GH₵ 5,000. Please contact our customer service for more details.",
      },
    ],
  },
  {
    title: "Products",
    icon: Package,
    questions: [
      {
        question: "Are your products authentic?",
        answer:
          "Yes, all our products are 100% authentic and sourced directly from manufacturers. We provide authenticity certificates with each purchase.",
      },
      {
        question: "What is your warranty policy?",
        answer:
          "We offer a 1-year warranty on all products against manufacturing defects. This covers issues with materials and workmanship.",
      },
      {
        question: "Do you offer customization?",
        answer:
          "Yes, we offer customization services for select products. Please contact our customer service team for more information about customization options.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    icon: Shield,
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return window for unused items in their original packaging. Returns are free within Ghana. Please visit our returns page for detailed information.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "You can initiate a return through your account dashboard or by contacting our customer service team. We&apos;ll provide you with a return shipping label.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Once we receive your return, refunds are typically processed within 5-7 business days. The time it takes to appear in your account depends on your payment method.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about our products, shipping, and
            services.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {faqCategories.map((category) => (
            <div key={category.title} className="rounded-lg border">
              <button
                onClick={() => toggleCategory(category.title)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openCategory === category.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openCategory === category.title && (
                <div className="border-t p-6">
                  <div className="space-y-4">
                    {category.questions.map((item, index) => (
                      <div
                        key={`${category.title}-${index}`}
                        className="rounded-lg border bg-muted/50"
                      >
                        <button
                          onClick={() =>
                            toggleQuestion(`${category.title}-${index}`)
                          }
                          className="flex w-full items-center justify-between p-4 text-left"
                        >
                          <span className="font-medium">{item.question}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openQuestions[`${category.title}-${index}`]
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {openQuestions[`${category.title}-${index}`] && (
                          <div className="border-t p-4">
                            <p className="text-sm text-muted-foreground">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <h2 className="mb-4 text-2xl font-bold">Still Have Questions?</h2>
          <p className="mb-6 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? Our customer service team is
            here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Contact Support</span>
            </a>
            <a
              href="mailto:support@ghanabags.com"
              className="inline-flex items-center space-x-2 text-primary hover:underline"
            >
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
