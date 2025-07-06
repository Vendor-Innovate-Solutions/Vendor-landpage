"use client";

import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, CheckIcon, StarIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Announcement Badge */}
        <Link
          href="https://github.com/venkatesh21bit/modernERP"
          target="_blank"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
        >
          <Badge variant="secondary" className="px-2 py-1">
            <StarIcon className="w-3 h-3 mr-1" />
            New
          </Badge>
          <span className="text-sm font-medium">Vendor ERP v2.0 is live</span>
          <MoveUpRightIcon className="w-4 h-4" />
        </Link>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          The Future of
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Enterprise Management
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Transform your business with AI-powered ERP platform featuring blockchain security, 
          IoT integration, and predictive analytics. Built for modern enterprises.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "AI-Powered Automation",
            "Blockchain Security", 
            "Real-time Analytics",
            "IoT Integration"
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
              <CheckIcon className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#pricing"
            className={buttonVariants({ 
              size: "lg", 
              className: "px-8 py-6 text-lg min-w-[200px]" 
            })}
          >
            Start Free Trial
          </Link>
          <Link
            href="#demo"
            className={buttonVariants({ 
              variant: "outline", 
              size: "lg",
              className: "px-8 py-6 text-lg min-w-[200px]" 
            })}
          >
            <PlayIcon className="w-5 h-5 mr-2" />
            Watch Demo
          </Link>
          <Link
            href={`/docs${page_routes[0].href}`}
            className={buttonVariants({ 
              variant: "ghost", 
              size: "lg",
              className: "px-8 py-6 text-lg min-w-[200px]" 
            })}
          >
            Documentation
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center gap-4 opacity-70">
          <p className="text-sm text-muted-foreground">Trusted by 1000+ businesses worldwide</p>
          <div className="flex items-center gap-8 grayscale opacity-60">
            {/* You can add company logos here */}
            <div className="text-xs font-semibold px-4 py-2 border rounded-lg">ENTERPRISE</div>
            <div className="text-xs font-semibold px-4 py-2 border rounded-lg">STARTUP</div>
            <div className="text-xs font-semibold px-4 py-2 border rounded-lg">SME</div>
          </div>
        </div>
      </div>
    </section>
  );
}
