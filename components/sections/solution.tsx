"use client";

import { BrainIcon, EyeIcon, ZapIcon, NetworkIcon, ArrowRightIcon } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900 dark:text-blue-200">
            We Built the Missing Nervous System
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            The CFN is a decentralized, AI-powered utility that acts as the shared intelligence for the entire logistics ecosystem. 
            We don't just show you the problem; we <strong className="text-blue-700 dark:text-blue-300">orchestrate a coordinated, network-wide solution</strong>.
          </p>
        </div>

        {/* Visual Representation of Connected Network */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Central Brain */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                  <BrainIcon className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2">
                  <span className="text-sm font-semibold text-blue-800 dark:text-blue-200">CFN Intelligence Layer</span>
                </div>
              </div>
            </div>

            {/* Connected Network Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚛</span>
                    </div>
                    <h3 className="font-bold text-lg">Carriers</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Real-time coordination and optimization</p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-2">✓ Connected & Optimized</div>
                </div>
                {/* Connection Line */}
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
              </div>

              <div className="relative">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <h3 className="font-bold text-lg">Ports</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Predictive capacity management</p>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-2">✓ Proactive Planning</div>
                </div>
                {/* Connection Line */}
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent"></div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="font-bold text-lg">Warehouses</h3>
                </div>
                <p className="text-sm text-muted-foreground">Synchronized inventory flow</p>
                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-2">✓ Smart Coordination</div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Core Capabilities */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Three Core Capabilities
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* See Everything */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
                  <EyeIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-blue-800 dark:text-blue-200">See Everything</h4>
              </div>
              <p className="text-center text-muted-foreground mb-4">
                We create a live <strong>"Digital Twin"</strong> of the network from thousands of real-time data sources.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Real-time fleet tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Port congestion monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Weather & traffic data</span>
                </div>
              </div>
            </div>

            {/* Predict Everything */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
                <h4 className="text-xl font-bold text-purple-800 dark:text-purple-200">Predict Everything</h4>
              </div>
              <p className="text-center text-muted-foreground mb-4">
                Our AI brain runs continuous simulations to predict future bottlenecks and disruptions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>7-day disruption forecasts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Capacity bottleneck alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Risk scenario modeling</span>
                </div>
              </div>
            </div>

            {/* Solve Everything */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-indigo-200 dark:border-indigo-800 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full mb-4">
                  <ZapIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-indigo-800 dark:text-indigo-200">Solve Everything</h4>
              </div>
              <p className="text-center text-muted-foreground mb-4">
                Our platform recommends the optimal, cooperative response for all players, preventing the crisis before it happens.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Coordinated rerouting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Automated load balancing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Smart contract execution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow">
              <NetworkIcon className="w-6 h-6" />
              <span>Transform Chaos into Coordination</span>
              <ArrowRightIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}