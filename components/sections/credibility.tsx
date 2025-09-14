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

        {/* Validation Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Validated by Industry Experts
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our concept has been rigorously evaluated and validated through the prestigious Wadhwani Foundation entrepreneurship bootcamp.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Validation Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="/validation.png" 
                    alt="CFN Validation by Wadhwani Foundation" 
                    className="w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-600"
                  />
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white p-2 rounded-full">
                    <AwardIcon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Validation Details */}
              <div className="order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3">
                      ✅ Concept Validated
                    </h4>
                    <p className="text-green-700 dark:text-green-200">
                      The Cognitive Freight Network idea was evaluated and validated by <strong>Vishal Nair</strong>, 
                      Entrepreneur Educator at Wadhwani Foundation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-semibold text-lg">Validator Credentials:</h5>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Entrepreneur Educator</strong> - Wadhwani Foundation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Co-founder and Director</strong> - LIGHTNSALT Pvt. Ltd</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Co-founder</strong> - Krossway Solutions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      🎓 Wadhwani Foundation Bootcamp
                    </h5>
                    <p className="text-blue-700 dark:text-blue-200 text-sm">
                      Successfully completed the rigorous entrepreneurship bootcamp program, 
                      where our concept underwent thorough evaluation by industry experts and seasoned entrepreneurs.
                    </p>
                    <a 
                      href="/Wadhwani Foundation Certificate - 68b414ab0f159eb4c1bc952e (1).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      View Certificate
                    </a>
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