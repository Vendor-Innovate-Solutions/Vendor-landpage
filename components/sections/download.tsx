"use client";

import { 
  GlobeIcon, 
  DownloadIcon, 
  DatabaseIcon,
  ArrowRightIcon,
  CheckIcon,
  ServerIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const downloadOptions = [
  {
    icon: GlobeIcon,
    title: "Browser Access",
    description: "Access Vendor ERP directly through your web browser. No installation required.",
    features: [
      "Instant access",
      "Auto-updates",
      "Cross-platform compatibility",
      "Shared cloud database",
      "Real-time collaboration"
    ],
    buttonText: "Access Now",
    buttonVariant: "outline" as const,
    href: "https://app.vendor-erp.com",
    badge: "Recommended for Teams",
    badgeVariant: "secondary" as const
  },
  {
    icon: DownloadIcon,
    title: "Desktop Application",
    description: "Download our native desktop application for enhanced performance and offline capabilities.",
    features: [
      "Offline functionality",
      "Enhanced performance",
      "Native integrations",
      "Local file handling",
      "Desktop notifications"
    ],
    buttonText: "Download App",
    buttonVariant: "default" as const,
    href: "#download-desktop",
    badge: "Most Popular",
    badgeVariant: "default" as const
  },
  {
    icon: DatabaseIcon,
    title: "Private Database",
    description: "Complete enterprise solution with dedicated database instance and full control over your data.",
    features: [
      "Dedicated database server",
      "Full data ownership",
      "Custom configurations",
      "Enhanced security",
      "Compliance ready"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    href: "mailto:sales@vendor-erp.com",
    badge: "Enterprise",
    badgeVariant: "secondary" as const
  }
];

export default function Download() {
  return (
    <section id="download" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Deployment Option
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vendor ERP is available in three flexible deployment options to meet your specific business needs and requirements.
          </p>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {downloadOptions.map((option, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-2xl border bg-background hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant={option.badgeVariant} className="px-3 py-1">
                  {option.badge}
                </Badge>
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                  <option.icon className="w-8 h-8" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>

                {/* Features */}
                <div className="space-y-3 text-left">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant={option.buttonVariant}
                className="w-full group-hover:scale-105 transition-transform"
                asChild
              >
                <a href={option.href} target="_blank" rel="noopener noreferrer">
                  {option.buttonText}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop Download Section */}
        <div id="download-desktop" className="bg-background rounded-2xl border p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Download Desktop Application</h3>
            <p className="text-muted-foreground">
              Choose your operating system to download the latest version of Vendor ERP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { os: "Windows", version: "v2.0.0", size: "125 MB", href: "#windows-download" },
              { os: "macOS", version: "v2.0.0", size: "108 MB", href: "#macos-download" },
              { os: "Linux", version: "v2.0.0", size: "95 MB", href: "#linux-download" }
            ].map((download, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/50">
                <div>
                  <h4 className="font-semibold">{download.os}</h4>
                  <p className="text-sm text-muted-foreground">{download.version} • {download.size}</p>
                </div>
                <Button size="sm" asChild>
                  <a href={download.href}>
                    <DownloadIcon className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              System requirements: 4GB RAM, 2GB storage space. Windows 10+, macOS 10.15+, Ubuntu 18.04+
            </p>
          </div>
        </div>

        {/* Enterprise Database Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary">
            <ServerIcon className="w-5 h-5" />
            <span className="font-medium">Need a private database solution?</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our enterprise plan includes a dedicated database instance with full control, 
            enhanced security, and compliance features perfect for large organizations.
          </p>
          <Button className="mt-6" asChild>
            <a href="mailto:sales@vendor-erp.com">
              Schedule Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
