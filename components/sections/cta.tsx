"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon, StarIcon, UserPlusIcon, ClockIcon } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    title: "",
    challenge: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started", formData);
    setIsLoading(true);
    setError("");

    try {
      console.log("Making API request to /api/foundation-partner");
      const response = await fetch('/api/foundation-partner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log("API response status:", response.status);
      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        console.error("API error:", data);
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error("Network error:", err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnerBenefits = [
    "Early access to CFN platform (before public release)",
    "No licensing fees during foundation period",
    "Direct influence on platform development roadmap", 
    "Priority technical support and dedicated success manager",
    "Co-marketing opportunities and case study participation",
    "Exclusive founder partner recognition and networking"
  ];

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You for Your Interest!</h2>
            <p className="text-lg text-blue-100 mb-6">
              We've received your application for the Foundation Partner Program. 
              Our team will review your submission and contact you within 48 hours.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm">
                <strong>Next Steps:</strong> Schedule a strategic consultation to discuss your specific supply chain challenges and CFN implementation timeline.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-200">Exclusive Opportunity</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Founding Partner in Building the Future of Logistics
            </h2>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto mb-8">
              We are currently selecting a small, exclusive group of industry leaders to join our 
              <strong className="text-white"> "Foundation Partner Program"</strong>. As a partner, you will get early, 
              free access to our platform and help shape the future of this technology.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
              <ClockIcon className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-200">Limited to 12 founding partners globally</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-200">
                Foundation Partner Benefits
              </h3>
              
              <div className="space-y-4 mb-8">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3 text-blue-200">Investment Value</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-100">Platform Development Value:</span>
                    <span className="font-semibold">$2.5M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-100">Your Foundation Partner Cost:</span>
                    <span className="font-semibold text-green-400">$0</span>
                  </div>
                  <div className="border-t border-white/20 pt-2 mt-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-blue-100">Total Value:</span>
                      <span className="font-bold text-green-400">Priceless Early Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <UserPlusIcon className="w-6 h-6 text-blue-300" />
                <h3 className="text-xl font-bold text-blue-200">Request an Invitation</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-200 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Acme Manufacturing Corp"
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-blue-200 mb-2">
                    Your Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="VP of Supply Chain Operations"
                  />
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-blue-200 mb-2">
                    Your Biggest Supply Chain Challenge *
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={4}
                    value={formData.challenge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                    placeholder="Describe your most critical supply chain pain point (e.g., port congestion, carrier capacity, inventory optimization, disruption visibility, etc.)"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-200 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Button clicked - calling handleSubmit");
                    handleSubmit(e as any);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Request Invitation to Foundation Program
                      <ArrowRightIcon className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-blue-200 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service. 
                  We will only contact you regarding the Foundation Partner Program.
                </p>
              </form>
            </div>
          </div>

          {/* Urgency & Scarcity */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-6 bg-red-600/20 border border-red-500/30 rounded-xl">
              <h4 className="text-xl font-bold text-red-200">
                ⚠️ Applications Close December 31, 2025
              </h4>
              <p className="text-red-100 max-w-2xl">
                The supply chain disruption crisis is accelerating. Every quarter you wait, your competitors 
                gain an insurmountable advantage. Join the cognitive revolution today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
