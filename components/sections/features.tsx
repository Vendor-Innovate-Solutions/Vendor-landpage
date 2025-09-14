"use client";

import { 
  AlertTriangleIcon, 
  RouteIcon, 
  ShieldCheckIcon, 
  TrendingUpIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from "lucide-react";

const features = [
  {
    icon: AlertTriangleIcon,
    title: "Predictive Disruption Alerts",
    description: "Advanced AI algorithms continuously monitor network conditions and predict potential disruptions 3-7 days in advance, giving you time to act before problems cascade.",
    advantage: "Move from being reactive to proactive. Stop firefighting and start strategic planning.",
    color: "text-red-600",
    bgGradient: "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20",
    borderColor: "border-red-200 dark:border-red-800"
  },
  {
    icon: RouteIcon,
    title: "System-Wide Route Optimization",
    description: "Real-time optimization algorithms coordinate across all network participants to find the most efficient paths, reducing empty miles and maximizing asset utilization.",
    advantage: "Drastically reduce fuel costs, eliminate empty miles, and cut your carbon footprint.",
    color: "text-green-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    icon: ShieldCheckIcon,
    title: "Decentralized Trust Ledger",
    description: "Blockchain-powered smart contracts automatically execute agreed-upon actions when conditions are met, creating transparent and verifiable coordination across the network.",
    advantage: "Enable seamless, verifiable coordination with your partners through smart contracts, eliminating disputes and building trust.",
    color: "text-blue-600",
    bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    icon: TrendingUpIcon,
    title: "Verifiable ROI Reporting",
    description: "Comprehensive analytics dashboard tracks every optimization, cost saving, and efficiency gain, providing concrete proof of value with detailed financial impact reports.",
    advantage: "See the exact, quantifiable savings our platform generates for your business every quarter.",
    color: "text-purple-600",
    bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features & Advantages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect your technology to tangible, high-value customer benefits. Each feature is designed 
            to deliver measurable ROI and competitive advantage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border-2 ${feature.borderColor} bg-gradient-to-br ${feature.bgGradient} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Feature Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-white dark:bg-gray-800 border-2 ${feature.borderColor} flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Advantage Box */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 dark:border-gray-700/50">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-green-800 dark:text-green-200 mb-1">Advantage:</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.advantage}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRightIcon className={`w-5 h-5 ${feature.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200">
              Ready to Transform Your Supply Chain?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Every day you wait, millions in potential savings slip away. 
              The question isn't whether you can afford to implement CFN—it's whether you can afford not to.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Calculate Your ROI
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
