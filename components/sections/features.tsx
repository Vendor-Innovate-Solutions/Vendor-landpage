"use client";

import { 
  BrainIcon, 
  ShieldIcon, 
  BarChart3Icon, 
  CloudIcon,
  DatabaseIcon,
  CpuIcon,
  TrendingUpIcon,
  LockIcon,
  ZapIcon
} from "lucide-react";

const features = [
  {
    icon: BrainIcon,
    title: "AI-Powered Automation",
    description: "Intelligent workflows that adapt and optimize your business processes automatically using machine learning algorithms.",
    color: "text-blue-600"
  },
  {
    icon: ShieldIcon,
    title: "Blockchain Security",
    description: "Immutable transaction records and smart contracts ensure complete transparency and security in your supply chain.",
    color: "text-green-600"
  },
  {
    icon: BarChart3Icon,
    title: "Predictive Analytics",
    description: "Advanced forecasting models help you make data-driven decisions and predict market trends with 95% accuracy.",
    color: "text-purple-600"
  },
  {
    icon: CloudIcon,
    title: "Cloud-Native Infrastructure",
    description: "Scalable, reliable cloud architecture that grows with your business and ensures 99.9% uptime.",
    color: "text-cyan-600"
  },
  {
    icon: DatabaseIcon,
    title: "Real-time Data Processing",
    description: "Process millions of transactions per second with our high-performance database and caching systems.",
    color: "text-orange-600"
  },
  {
    icon: CpuIcon,
    title: "IoT Integration",
    description: "Connect and monitor your physical assets in real-time with our comprehensive IoT platform.",
    color: "text-red-600"
  },
  {
    icon: TrendingUpIcon,
    title: "ESG Analytics",
    description: "Track environmental, social, and governance metrics to ensure sustainable business practices.",
    color: "text-emerald-600"
  },
  {
    icon: LockIcon,
    title: "Enterprise Security",
    description: "Multi-layer security with encryption, access controls, and compliance with international standards.",
    color: "text-indigo-600"
  },
  {
    icon: ZapIcon,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second response times and efficient resource utilization.",
    color: "text-yellow-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive ERP solution combines cutting-edge technology with intuitive design 
            to transform how you manage your enterprise operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border bg-background hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience the future of enterprise management?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Our Plans
          </a>
        </div>
      </div>
    </section>
  );
}
