"use client";

import { LinkIcon, BrainIcon, PlayIcon, ArrowRightIcon, DatabaseIcon, BarChart3Icon } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "CONNECT",
      icon: LinkIcon,
      description: "Securely integrate your existing ERP and logistics data via our API.",
      details: [
        "Zero-downtime integration",
        "Enterprise-grade security",
        "Real-time data synchronization",
        "Compatible with major ERP systems"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      number: "02", 
      title: "PREDICT",
      icon: BrainIcon,
      description: "Our AI analyzes your data in the context of the entire network to identify future risks and opportunities.",
      details: [
        "Network-wide pattern recognition",
        "3-7 day disruption forecasting",
        "Bottleneck identification",
        "Scenario modeling & simulation"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      number: "03",
      title: "ACT", 
      icon: PlayIcon,
      description: "Receive proactive, intelligent recommendations on a strategic dashboard to prevent disruptions and optimize your operations.",
      details: [
        "Real-time decision support",
        "Automated coordination protocols",
        "Smart contract execution",
        "Performance monitoring"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Demystify our complex technology with a simple 3-step process that transforms your supply chain operations.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full border shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Simple • Secure • Scalable</span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className={`${step.bgColor} p-8 rounded-2xl border-2 border-white dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.number}
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Details */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`}></div>
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connector Arrow (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center shadow-lg">
                      <ArrowRightIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Visual */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border shadow-lg">
            <h3 className="text-xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
              Seamless Integration with Your Existing Infrastructure
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DatabaseIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Your ERP System</h4>
                <p className="text-sm text-muted-foreground">SAP, Oracle, Microsoft Dynamics, or custom solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BrainIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">CFN Intelligence</h4>
                <p className="text-sm text-muted-foreground">AI-powered coordination layer</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Strategic Dashboard</h4>
                <p className="text-sm text-muted-foreground">Real-time insights and recommendations</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Implementation takes just 2-4 weeks. Start seeing results on day one.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-lg">
              Schedule Your Integration
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}