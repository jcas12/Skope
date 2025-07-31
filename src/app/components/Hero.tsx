"use client"

import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  Websites that turn lurkers into{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      clients
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  </span>
                </h1>

                <div className="flex items-start space-x-4 bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                      <strong className="text-white">75% of users judge credibility by design alone.</strong> Skope
                      builds stunning, high-converting websites that earn trust, drive sales, and grow your brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Logo/Brand Element */}
              <div className="relative z-10 bg-slate-800/50 rounded-3xl p-12 border border-slate-700 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Image
                      src="/skope-logo.png"
                      alt="Skope"
                      width={120}
                      height={120}
                      className="w-30 h-30 object-contain mx-auto"
                    />
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full blur-xl"></div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-slate-300">Powerful websites for personal brands</p>
                  </div>

                  {/* Mini Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-xs text-slate-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">200%</div>
                      <div className="text-xs text-slate-400">Avg Growth</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-2xl rotate-12 border border-blue-500/20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full border border-blue-400/20"></div>

              {/* Floating Stats Cards */}
              <div className="absolute -left-8 top-1/4 bg-slate-800/90 rounded-xl p-4 border border-slate-700 backdrop-blur-sm transform -rotate-6 shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">+200%</div>
                  <div className="text-xs text-slate-400">Conversions</div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 bg-slate-800/90 rounded-xl p-4 border border-slate-700 backdrop-blur-sm transform rotate-6 shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">10+</div>
                  <div className="text-xs text-slate-400">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
