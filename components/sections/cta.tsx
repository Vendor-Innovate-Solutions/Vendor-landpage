"use client";

import { ArrowRightIcon, RocketIcon, PhoneIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Vendor ERP to streamline operations, 
              boost productivity, and drive growth with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="px-8 py-6 text-lg min-w-[200px]" asChild>
                <a href="https://app.vendor-erp.com/register">
                  <RocketIcon className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg min-w-[200px]" asChild>
                <a href="mailto:sales@vendor-erp.com">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Schedule Demo
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Talk to Sales</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get a personalized demo and discuss your specific requirements
              </p>
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:+1-555-0123">
                  Call +1 (555) 012-3456
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <MessageCircleIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Chat with our support team for instant help and guidance
              </p>
              <Button variant="ghost" size="sm" asChild>
                <a href="#chat">
                  Start Chat
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <RocketIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore our comprehensive guides and API documentation
              </p>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/docs/getting-started/introduction">
                  View Docs
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Security & Trust */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-xs font-bold">ISO</span>
                </div>
                <span className="text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-xs font-bold">SOC</span>
                </div>
                <span className="text-sm font-medium">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 text-xs font-bold">GDPR</span>
                </div>
                <span className="text-sm font-medium">GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
