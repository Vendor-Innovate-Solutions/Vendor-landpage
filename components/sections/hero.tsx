"use client";

import { buttonVariants } from "@/components/ui/button";
import { MoveUpRightIcon, BrainIcon, NetworkIcon, TruckIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <pattern id="neural-grid" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)"/>
          <g stroke="currentColor" strokeWidth="1" opacity="0.2">
            <line x1="100" y1="100" x2="200" y2="150"/>
            <line x1="200" y1="150" x2="300" y2="120"/>
            <line x1="300" y1="120" x2="400" y2="180"/>
            <line x1="100" y1="300" x2="200" y2="250"/>
            <line x1="200" y1="250" x2="300" y2="280"/>
            <line x1="500" y1="200" x2="600" y2="150"/>
            <line x1="600" y1="150" x2="700" y2="200"/>
          </g>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
          <Badge variant="secondary" className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <BrainIcon className="w-3 h-3 mr-1" />
            Revolutionary
          </Badge>
          <span className="text-sm font-medium">The world's first Cognitive Freight Network</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            The Supply Chain
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Has a Brain
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
          The Cognitive Freight Network is the shared AI intelligence layer for the global supply chain, 
          making it <strong className="text-foreground">proactive</strong>, <strong className="text-foreground">cooperative</strong>, 
          and <strong className="text-foreground">resilient</strong>. We predict and prevent disruptions before they cost you millions.
        </p>

        {/* Visual Network Representation */}
        <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 dark:border-blue-800/50">
            <TruckIcon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">Carriers</span>
          </div>
          <div className="hidden md:block text-muted-foreground">⇄</div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-200/50 dark:border-purple-800/50">
            <NetworkIcon className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium">CFN Brain</span>
          </div>
          <div className="hidden md:block text-muted-foreground">⇄</div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-200/50 dark:border-indigo-800/50">
            <div className="w-5 h-5 bg-indigo-600 rounded-sm"></div>
            <span className="text-sm font-medium">Warehouses</span>
          </div>
        </div>

        {/* Primary CTA */}
          <div className="mb-16">
            <a
              href="https://www.notion.so/The-Cognitive-Freight-Network-A-Whitepaper-26e47c14be9d80b29ca1e848996770e8?source=copy_link"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ 
                size: "lg", 
                className: "px-12 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300" 
              })}
            >
              <FileTextIcon className="w-5 h-5 mr-2" />
              Read Our Whitepaper
            </a>
          </div>        {/* Value Proposition Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">👁️</span>
            </div>
            <h3 className="font-semibold mb-2">See Everything</h3>
            <p className="text-sm text-muted-foreground">Live Digital Twin from thousands of real-time data sources</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">🔮</span>
            </div>
            <h3 className="font-semibold mb-2">Predict Everything</h3>
            <p className="text-sm text-muted-foreground">AI simulations predict future bottlenecks and disruptions</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Solve Everything</h3>
            <p className="text-sm text-muted-foreground">Orchestrate coordinated network-wide solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
