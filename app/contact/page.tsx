"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background py-16">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-5xl font-bold text-transparent">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;d love to hear from you. Let us know how we can help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8 rounded-2xl bg-gradient-to-r from-card/50 to-background p-8 shadow-lg backdrop-blur">
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>
              <p className="text-muted-foreground">
                Have questions about our products or services? We&apos;re here to
                help. Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 rounded-xl bg-primary/5 p-4 transition-colors hover:bg-primary/10">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@ghanaluxe.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-xl bg-primary/5 p-4 transition-colors hover:bg-primary/10">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+233 24 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 rounded-xl bg-primary/5 p-4 transition-colors hover:bg-primary/10">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    123 Luxury Lane, East Legon
                    <br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-primary/5 p-6">
              <h3 className="mb-4 font-semibold">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-gradient-to-r from-card/50 to-background p-8 shadow-lg backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-primary/20 bg-background/50 backdrop-blur focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-primary/20 bg-background/50 backdrop-blur focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-primary/20 bg-background/50 backdrop-blur focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-primary/20 bg-background/50 backdrop-blur focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/90 text-lg font-medium hover:from-primary/90 hover:to-primary"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
