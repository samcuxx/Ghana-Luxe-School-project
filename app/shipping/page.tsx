import { Truck, Clock, Shield } from "lucide-react";

const shippingMethods = [
  {
    name: "Standard Delivery",
    description: "3-5 business days",
    price: "GH₵ 50",
    icon: Truck,
  },
  {
    name: "Express Delivery", 
    description: "1-2 business days",
    price: "GH₵ 100",
    icon: Clock,
  },
  {
    name: "Secure Delivery",
    description: "With insurance",
    price: "GH₵ 75",
    icon: Shield,
  },
];

const shippingZones = [
  {
    region: "Greater Accra",
    deliveryTime: "1-2 business days",
    price: "GH₵ 50",
  },
  {
    region: "Other Regions",
    deliveryTime: "3-5 business days", 
    price: "GH₵ 75",
  },
  {
    region: "Remote Areas",
    deliveryTime: "5-7 business days",
    price: "GH₵ 100",
  },
];

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 py-16">
      <div className="container px-4 mx-auto">
        <h1 className="mb-16 text-center text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shipping Information
        </h1>

        {/* Shipping Methods */}
        <section className="mb-20">
          <h2 className="mb-10 text-center text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Shipping Methods
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shippingMethods.map((method) => (
              <div
                key={method.name}
                className="flex items-start space-x-6 rounded-xl border-2 border-blue-100 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-3">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{method.name}</h3>
                  <p className="text-gray-600 mt-2">{method.description}</p>
                  <p className="mt-4 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {method.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shipping Zones */}
        <section className="mb-20">
          <h2 className="mb-10 text-center text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Shipping Zones
          </h2>
          <div className="overflow-hidden rounded-xl border-2 border-blue-100 bg-white shadow-lg">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <tr>
                  <th className="px-8 py-5 text-left text-lg">Region</th>
                  <th className="px-8 py-5 text-left text-lg">Delivery Time</th>
                  <th className="px-8 py-5 text-left text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {shippingZones.map((zone) => (
                  <tr key={zone.region} className="border-t border-blue-50 hover:bg-blue-50 transition-colors duration-200">
                    <td className="px-8 py-6 font-medium text-gray-800">{zone.region}</td>
                    <td className="px-8 py-6 text-gray-600">{zone.deliveryTime}</td>
                    <td className="px-8 py-6 font-bold text-blue-600">{zone.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Shipping Process */}
        <section>
          <h2 className="mb-10 text-center text-3xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Shipping Process
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 1,
                title: "Order Placed",
                description: "Your order is received and confirmed"
              },
              {
                step: 2,
                title: "Processing",
                description: "Order is prepared for shipping"
              },
              {
                step: 3,
                title: "In Transit",
                description: "Package is on its way to you"
              },
              {
                step: 4,
                title: "Delivered",
                description: "Package arrives at your doorstep"
              }
            ].map((step) => (
              <div key={step.step} className="text-center group">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
