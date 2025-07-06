"use client";

import { CheckIcon, XIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Browser Access",
    description: "Perfect for small teams and getting started",
    price: "$29",
    period: "/month",
    isPopular: false,
    features: [
      "Web-based access only",
      "Up to 5 users",
      "Basic reporting",
      "Email support",
      "Cloud storage (10GB)",
      "Standard security",
      "Mobile responsive interface"
    ],
    notIncluded: [
      "Desktop application",
      "Private database",
      "Advanced analytics",
      "24/7 phone support"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    href: "https://app.vendor-erp.com/register"
  },
  {
    name: "Professional",
    description: "Most popular choice for growing businesses",
    price: "$99",
    period: "/month",
    isPopular: true,
    features: [
      "Desktop application download",
      "Web browser access",
      "Up to 25 users",
      "Advanced reporting & analytics",
      "Priority email & chat support",
      "Cloud storage (100GB)",
      "Enhanced security features",
      "API access",
      "Custom integrations",
      "Mobile apps (iOS & Android)"
    ],
    notIncluded: [
      "Private database hosting",
      "Dedicated support manager"
    ],
    buttonText: "Get Started",
    buttonVariant: "default" as const,
    href: "https://app.vendor-erp.com/register?plan=professional"
  },
  {
    name: "Enterprise",
    description: "Complete solution with private database",
    price: "$299",
    period: "/month",
    isPopular: false,
    features: [
      "Everything in Professional",
      "Private database instance",
      "Unlimited users",
      "Custom database configuration",
      "Dedicated server resources",
      "Advanced security & compliance",
      "24/7 phone support",
      "Dedicated account manager",
      "Custom training & onboarding",
      "On-premise deployment option",
      "SLA guarantee (99.9% uptime)",
      "White-label options"
    ],
    notIncluded: [],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    href: "mailto:sales@vendor-erp.com"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your business. 
            All plans include our core ERP features with varying levels of access and support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 ${
                plan.isPopular 
                  ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                  : 'border-border bg-background hover:border-primary/50'
              } transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-4 py-1 bg-primary text-primary-foreground">
                    <StarIcon className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3 opacity-50">
                    <XIcon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant}
                className="w-full py-6 text-lg"
                asChild
              >
                <a href={plan.href} target="_blank" rel="noopener noreferrer">
                  {plan.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? 
            <a href="mailto:sales@vendor-erp.com" className="text-primary hover:underline ml-1">
              Contact our enterprise team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
