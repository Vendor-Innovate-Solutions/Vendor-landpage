"use client";

import { DownloadIcon, AwardIcon } from "lucide-react";

export default function Credibility() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built on a Foundation of Research and Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a serious, credible team capable of solving the world's most complex supply chain challenges.
          </p>
        </div>

        {/* Whitepaper Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <AwardIcon className="w-8 h-8" />
                  <span className="text-sm font-medium uppercase tracking-wide opacity-90">Foundational Research</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Cognitive Freight Network: A New Paradigm for Global Logistics
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Our comprehensive whitepaper details the mathematical models, AI algorithms, and blockchain protocols 
                  that power the world's first truly intelligent supply chain network.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Peer-reviewed methodology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Real-world case studies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>Technical implementation guide</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                  <DownloadIcon className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                  <div className="text-sm opacity-90 mb-2">156-page research document</div>
                  <div className="text-2xl font-bold">Free Download</div>
                </div>
                <a 
                  href="https://www.notion.so/The-Cognitive-Freight-Network-A-Whitepaper-26e47c14be9d80b29ca1e848996770e8?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <DownloadIcon className="w-5 h-5" />
                  Download Whitepaper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}