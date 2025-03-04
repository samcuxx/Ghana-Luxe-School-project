import {
  ArrowRight,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const returnPolicy = [
  {
    title: "30-Day Return Window",
    description:
      "We offer a 30-day return window for all unused items in their original packaging.",
    icon: Clock,
  },
  {
    title: "Free Returns",
    description:
      "Returns are free for all orders within Ghana. We'll provide a return shipping label.",
    icon: Package,
  },
  {
    title: "Quality Guarantee",
    description:
      "All items are inspected before being accepted for return to ensure quality standards.",
    icon: CheckCircle,
  },
];

const returnProcess = [
  {
    step: "1",
    title: "Initiate Return",
    description:
      "Log into your account and select the item(s) you wish to return.",
  },
  {
    step: "2",
    title: "Print Label",
    description: "Download and print the provided return shipping label.",
  },
  {
    step: "3",
    title: "Package Item",
    description:
      "Securely package the item in its original packaging with all accessories.",
  },
  {
    step: "4",
    title: "Ship Return",
    description: "Drop off the package at any authorized shipping location.",
  },
  {
    step: "5",
    title: "Track Return",
    description: "Track your return status through your account dashboard.",
  },
  {
    step: "6",
    title: "Refund Process",
    description:
      "Once received, we'll process your refund within 5-7 business days.",
  },
];

const nonReturnableItems = [
  "Personal care items",
  "Items with security tags removed",
  "Damaged or worn items",
  "Items without original packaging",
  "Custom or personalized items",
];

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-16">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="inline-block p-2 px-4 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">
              Returns Made Simple
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Returns Policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We want you to be completely satisfied with your purchase. Our
            returns process is simple and hassle-free.
          </p>
        </div>

        {/* Return Policy Highlights */}
        <div className="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {returnPolicy.map((policy) => (
            <div
              key={policy.title}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform group-hover:scale-x-100"></div>
              <div className="mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 w-14 h-14 flex items-center justify-center">
                <policy.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">{policy.title}</h3>
              <p className="text-gray-600">
                {policy.description}
              </p>
            </div>
          ))}
        </div>

        {/* Return Process */}
        <div className="mb-20">
          <h2 className="mb-10 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            How Our Return Process Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {returnProcess.map((process) => (
              <div
                key={process.step}
                className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-5 rounded-2xl"></div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {process.step}
                  </span>
                  <ArrowRight className="h-6 w-6 text-blue-500 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{process.title}</h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Returnable Items */}
        <div className="rounded-2xl bg-white p-8 shadow-lg mb-20">
          <div className="mb-6 flex items-center space-x-3">
            <div className="rounded-full bg-red-100 p-2">
              <AlertCircle className="h-6 w-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Non-Returnable Items
            </h2>
          </div>
          <p className="mb-6 text-gray-600">
            The following items cannot be returned:
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nonReturnableItems.map((item) => (
              <li
                key={item}
                className="flex items-center space-x-3 text-gray-600"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Support */}
        <div className="text-center">
          <div className="inline-block p-2 px-4 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">
              24/7 Support
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Need Help?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Our customer service team is here to assist you with any questions
            about returns.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
          >
            <span>Contact Support</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
