"use client";

import { AlertTriangleIcon, TruckIcon, BuildingIcon, ClockIcon, DollarSignIcon } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900 dark:text-red-200">
            Your Supply Chain is Paralyzed by Silos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Every partner in your network—the carrier, the port, the warehouse—is optimizing for themselves. 
            This creates a state of <strong className="text-red-700 dark:text-red-300">systemic chaos</strong>.
          </p>
        </div>

        {/* Problem Visualization */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Chaotic Network Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-red-200 dark:border-red-800 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TruckIcon className="w-8 h-8 text-red-600" />
                  <h3 className="font-bold text-lg">Carriers</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Optimizing for their own routes and schedules</p>
                <div className="text-xs text-red-600 dark:text-red-400 font-medium">❌ 25-40% empty truck miles</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <BuildingIcon className="w-8 h-8 text-orange-600" />
                  <h3 className="font-bold text-lg">Ports</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Managing only their immediate capacity</p>
                <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">❌ Multi-day congestions</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📦</span>
                  </div>
                  <h3 className="font-bold text-lg">Warehouses</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Focused on local inventory optimization</p>
                <div className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">❌ Poor coordination</div>
              </div>
            </div>

            {/* Disconnection Lines */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-30 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 600 200" style={{ top: '-20px', position: 'relative' }}>
                <g stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-red-500">
                  <line x1="120" y1="100" x2="180" y2="100" />
                  <line x1="420" y1="100" x2="480" y2="100" />
                </g>
                <text x="150" y="95" className="text-xs fill-red-600" textAnchor="middle">BROKEN</text>
                <text x="450" y="95" className="text-xs fill-red-600" textAnchor="middle">BROKEN</text>
              </svg>
            </div>
          </div>
        </div>

        {/* The Consequences */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-red-800 dark:text-red-200">
            The Hidden Tax on Your Business
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangleIcon className="w-6 h-6 text-red-600" />
                <h4 className="font-semibold text-lg">When Disruption Hits</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• You're left firefighting with no real visibility</li>
                <li>• Production halts cascade through your operations</li>
                <li>• Customer commitments become impossible to meet</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-3 mb-4">
                <DollarSignIcon className="w-6 h-6 text-orange-600" />
                <h4 className="font-semibold text-lg">The Financial Impact</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Financial penalties from missed deliveries</li>
                <li>• Reputational damage with key customers</li>
                <li>• Emergency logistics costs 3-5x normal rates</li>
              </ul>
            </div>
          </div>

          {/* Call out the core problem */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full font-semibold">
              <ClockIcon className="w-5 h-5" />
              <span>Every minute of chaos costs you thousands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}