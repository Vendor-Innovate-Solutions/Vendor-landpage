"use client";

import { CarIcon, PillIcon, CpuIcon, AlertTriangleIcon, DollarSignIcon, ClockIcon, TrendingUpIcon, ShieldIcon } from "lucide-react";

export default function TargetAudience() {
  const industries = [
    {
      icon: CarIcon,
      title: "Automotive Manufacturing",
      description: "Just-in-time production where a single delayed shipment can halt entire assembly lines",
      riskFactor: "Production halt = $50K-200K per hour",
      color: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20"
    },
    {
      icon: PillIcon,
      title: "Pharmaceuticals",
      description: "Life-critical medications with strict cold-chain requirements and regulatory compliance",
      riskFactor: "Temperature breach = Complete batch loss",
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      icon: CpuIcon,
      title: "High-Tech Electronics",
      description: "Semiconductors and precision components with zero tolerance for delays or damage",
      riskFactor: "Component shortage = Market opportunity loss",
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20"
    }
  ];

  const painPoints = [
    {
      icon: AlertTriangleIcon,
      title: "Single Point of Failure",
      description: "One disrupted link brings your entire operation to a standstill",
      impact: "Cascading production delays"
    },
    {
      icon: DollarSignIcon,
      title: "Catastrophic Financial Risk",
      description: "A single major disruption can cost millions in penalties and lost revenue",
      impact: "Emergency logistics costs 3-5x normal rates"
    },
    {
      icon: ClockIcon,
      title: "No Early Warning System",
      description: "You only discover problems when they've already paralyzed your operations",
      impact: "Reactive firefighting vs proactive planning"
    },
    {
      icon: ShieldIcon,
      title: "Reputation Damage",
      description: "Failed deliveries to key customers erode trust built over decades",
      impact: "Long-term relationship and market share loss"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            For the Leaders of Critical-Path Supply Chains
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            The CFN is designed for <strong className="text-white">"High-Stakes Shippers"</strong>—large manufacturers and exporters 
            in sectors where the cost of a single disruption is catastrophic.
          </p>
        </div>

        {/* Industry Focus */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-200">
            Mission-Critical Industries We Serve
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${industry.color} mb-4 shadow-lg`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{industry.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {industry.description}
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangleIcon className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-semibold text-red-800 uppercase">Critical Risk</span>
                  </div>
                  <p className="text-sm text-red-700 font-medium">
                    {industry.riskFactor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pain Points */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-200">
            Why Traditional Supply Chain Management Fails You
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">{point.title}</h4>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {point.description}
                    </p>
                    <div className="text-xs text-red-400 font-medium">
                      → {point.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Cost of Inaction */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                The True Cost of Supply Chain Disruption
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">$184B</div>
                  <div className="text-sm opacity-90">Annual cost of supply chain disruptions globally</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">62%</div>
                  <div className="text-sm opacity-90">of companies experienced major disruptions in 2023</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">6-12</div>
                  <div className="text-sm opacity-90">months to fully recover from major disruption</div>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed mb-6 opacity-95">
                Every day you operate without intelligent coordination, you're one black swan event away from catastrophe. 
                The question isn't <em>if</em> disruption will strike—it's <em>when</em>.
              </p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
                <TrendingUpIcon className="w-5 h-5" />
                <span className="font-semibold">CFN reduces disruption impact by 70-85%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Qualification Criteria */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-200 mb-4">
              Is CFN Right for Your Organization?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We work exclusively with organizations where supply chain excellence is mission-critical.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-200 mb-4">You're a Perfect Fit If:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">$500M+ annual revenue</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Complex, multi-tier supply networks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">High cost of disruption ($100K+ per day)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Global or regional distribution</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-200 mb-4">CFN May Not Be For You If:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Simple, single-source supply chains</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Local/regional only operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Disruptions have minimal impact</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Looking for off-the-shelf solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}