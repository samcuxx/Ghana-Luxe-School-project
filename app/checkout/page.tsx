"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/context/cart-context";
import products from "@/data/products.json";
import {
  ShoppingCart,
  CreditCard,
  Truck,
  CheckCircle,
  Smartphone,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

const steps = [
  { id: "cart", name: "Shopping Cart", icon: ShoppingCart },
  { id: "shipping", name: "Shipping", icon: Truck },
  { id: "payment", name: "Payment", icon: CreditCard },
  { id: "confirmation", name: "Confirmation", icon: CheckCircle },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState("cart");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { state, dispatch } = useCart();

  // Calculate cart total
  const cartItems = state.items.map((item) => {
    const product = products.products.find((p) => p.id === item.id);
    return {
      ...item,
      product,
    };
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.product?.price || 0) * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: "REMOVE_ITEM", payload: productId });
    } else {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: productId, quantity: newQuantity },
      });
    }
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background py-16">
      <div className="container px-4">
        {/* Progress Steps */}
        <div className="mb-12 rounded-2xl bg-white/50 p-8 shadow-lg backdrop-blur-sm">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  index < steps.length - 1 ? "flex-1" : ""
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                    currentStep === step.id
                      ? "bg-gradient-to-r from-primary to-primary/60 text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <step.icon className="h-6 w-6" />
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 transition-all duration-300 ${
                      currentStep === step.id
                        ? "bg-gradient-to-r from-primary to-primary/60"
                        : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            {steps.map((step) => (
              <span
                key={step.id}
                className={`text-sm font-medium transition-colors duration-300 ${
                  currentStep === step.id
                    ? "bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                    : "text-muted-foreground"
                }`}
              >
                {step.name}
              </span>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Main Content */}
          <div className="rounded-2xl bg-white/50 p-8 shadow-lg backdrop-blur-sm">
            {currentStep === "cart" && (
              <div className="space-y-6">
                <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
                  Shopping Cart
                </h2>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 rounded-lg border bg-white/30 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md"
                  >
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                      {item.product?.images[0] && (
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name || "Product image"}
                          width={100}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">
                        {item.product?.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        GH₵ {item.product?.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="rounded-full"
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="rounded-full"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentStep === "shipping" && (
              <div className="space-y-6">
                <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
                  Shipping Information
                </h2>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-medium"
                      >
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
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
                      type="email"
                      required
                      className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm font-medium"
                    >
                      Address
                    </label>
                    <Input
                      id="address"
                      required
                      className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="city"
                        className="mb-2 block text-sm font-medium"
                      >
                        City
                      </label>
                      <Input
                        id="city"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="postalCode"
                        className="mb-2 block text-sm font-medium"
                      >
                        Postal Code
                      </label>
                      <Input
                        id="postalCode"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === "payment" && (
              <div className="space-y-6">
                <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
                  Payment Information
                </h2>

                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  {/* Card Payment Option */}
                  <div className="flex items-center space-x-4 rounded-lg border bg-white/30 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                    <RadioGroupItem value="card" id="card" />
                    <div className="flex flex-1 items-center justify-between">
                      <label
                        htmlFor="card"
                        className="flex cursor-pointer items-center space-x-3"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/60">
                          <CreditCard className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <span className="font-medium">Card Payment</span>
                          <p className="text-sm text-muted-foreground">
                            Pay with credit or debit card
                          </p>
                        </div>
                      </label>
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/images/payment/visa.png"
                          alt="Visa"
                          width={40}
                          height={25}
                          className="h-6 w-auto"
                        />
                        <Image
                          src="/images/payment/mastercard.png"
                          alt="Mastercard"
                          width={40}
                          height={25}
                          className="h-6 w-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* MTN MoMo Option */}
                  <div className="flex items-center space-x-4 rounded-lg border bg-white/30 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                    <RadioGroupItem value="mtn" id="mtn" />
                    <div className="flex flex-1 items-center justify-between">
                      <label
                        htmlFor="mtn"
                        className="flex cursor-pointer items-center space-x-3"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FFBE00] to-[#FFD700]">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <span className="font-medium">MTN Mobile Money</span>
                          <p className="text-sm text-muted-foreground">
                            Pay with your MTN MoMo wallet
                          </p>
                        </div>
                      </label>
                      <Image
                        src="/images/payment/mtn-momo.png"
                        alt="MTN MoMo"
                        width={80}
                        height={30}
                        className="h-8 w-auto"
                      />
                    </div>
                  </div>

                  {/* Vodafone Cash Option */}
                  <div className="flex items-center space-x-4 rounded-lg border bg-white/30 p-6 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                    <RadioGroupItem value="vodafone" id="vodafone" />
                    <div className="flex flex-1 items-center justify-between">
                      <label
                        htmlFor="vodafone"
                        className="flex cursor-pointer items-center space-x-3"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#E60000] to-[#FF4444]">
                          <Smartphone className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <span className="font-medium">Vodafone Cash</span>
                          <p className="text-sm text-muted-foreground">
                            Pay with your Vodafone Cash wallet
                          </p>
                        </div>
                      </label>
                      <Image
                        src="/images/payment/vodafone-cash.png"
                        alt="Vodafone Cash"
                        width={100}
                        height={30}
                        className="h-8 w-auto"
                      />
                    </div>
                  </div>
                </RadioGroup>

                {/* Payment Form Fields */}
                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="mb-2 block text-sm font-medium"
                      >
                        Card Number
                      </label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="expiry"
                          className="mb-2 block text-sm font-medium"
                        >
                          Expiry Date
                        </label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                          className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="cvv"
                          className="mb-2 block text-sm font-medium"
                        >
                          CVV
                        </label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          required
                          className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "mtn" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="mtnNumber"
                        className="mb-2 block text-sm font-medium"
                      >
                        MTN Mobile Money Number
                      </label>
                      <Input
                        id="mtnNumber"
                        placeholder="e.g., 024 123 4567"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="mtnPin"
                        className="mb-2 block text-sm font-medium"
                      >
                        MoMo PIN
                      </label>
                      <Input
                        id="mtnPin"
                        type="password"
                        placeholder="Enter your MoMo PIN"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-[#FFBE00]/20 to-[#FFD700]/20 p-6 backdrop-blur-sm">
                      <p className="text-sm text-[#FFBE00]">
                        You will receive a prompt on your phone to confirm the
                        payment. Please have your phone ready.
                      </p>
                    </div>
                  </div>
                )}

                {paymentMethod === "vodafone" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="vodafoneNumber"
                        className="mb-2 block text-sm font-medium"
                      >
                        Vodafone Cash Number
                      </label>
                      <Input
                        id="vodafoneNumber"
                        placeholder="e.g., 020 123 4567"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="vodafonePin"
                        className="mb-2 block text-sm font-medium"
                      >
                        Cash PIN
                      </label>
                      <Input
                        id="vodafonePin"
                        type="password"
                        placeholder="Enter your Cash PIN"
                        required
                        className="rounded-lg border-primary/20 bg-white/50 backdrop-blur-sm transition-all focus:border-primary/40 focus:bg-white/80"
                      />
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-[#E60000]/20 to-[#FF4444]/20 p-6 backdrop-blur-sm">
                      <p className="text-sm text-[#E60000]">
                        You will receive a prompt on your phone to confirm the
                        payment. Please have your phone ready.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentStep === "confirmation" && (
              <div className="space-y-6">
                <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
                  Order Confirmation
                </h2>
                <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 p-8 shadow-lg backdrop-blur-sm">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="rounded-full bg-gradient-to-r from-green-500 to-green-600 p-4 shadow-lg">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-2xl font-semibold text-green-800">
                    Thank you for your order!
                  </h3>
                  <p className="text-center text-green-700">
                    Your order has been successfully placed. We&apos;ll send you
                    an email confirmation shortly.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-3xl font-bold text-transparent">
              Order Summary
            </h2>
            <div className="rounded-2xl bg-white/50 p-8 shadow-lg backdrop-blur-sm">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between rounded-lg bg-white/30 p-4 text-sm backdrop-blur-sm"
                  >
                    <span className="font-medium">
                      {item.product?.name} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      GH₵{" "}
                      {((item.product?.price || 0) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div className="space-y-3 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>GH₵ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>GH₵ {shipping.toFixed(2)}</span>
                  </div>
                  <div className="mt-4 flex justify-between rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-4 text-lg font-semibold">
                    <span>Total</span>
                    <span>GH₵ {total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              {currentStep !== "cart" && (
                <Button
                  variant="outline"
                  className="flex-1 rounded-full bg-white/50 backdrop-blur-sm transition-all hover:bg-white/80"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
              <Button
                className="flex-1 rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all hover:from-primary/90 hover:to-primary/50"
                onClick={handleNext}
                disabled={currentStep === "confirmation"}
              >
                {currentStep === "confirmation"
                  ? "Place Order"
                  : "Continue to " +
                    steps[
                      steps.findIndex((step) => step.id === currentStep) + 1
                    ]?.name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
