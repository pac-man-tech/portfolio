"use client"
import React from 'react'
import { ArrowDown, Code, Database, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const svgBackground = "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ea8de'fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"

  return (
    <section id="home" className="min-h-[70vh] flex flex-col relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: svgBackground }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 relative z-0">
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    {/* Left Column - Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center lg:items-start text-center lg:text-left"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-foreground mb-4 leading-tight"
      >
        Let Automation Work for You.
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="block text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-[#FF6B6B] to-[#4EA8DE] text-transparent bg-clip-text font-medium font-inter"
      >
        Capture Leads Effortlessly, Grow with Ease.
      </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              <br/>
              From automated client acquisition to scaling beyond 7-figures.I build custom lead generation systems and automation workflows that work 24/7 so you get more qualified prospects, 
              eliminate manual busywork, and scale without burning out your team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 animate-glow"
              >
                Get Your Free Automation Plan
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProjects}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3"
              >
                See What's Possible
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary font-poppins">$20k+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary font-poppins">2K+</div>
                <div className="text-sm text-muted-foreground">Leads Captured</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary font-poppins">24/7</div>
                <div className="text-sm text-muted-foreground">Always Working</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-2 border-[#4EA8DE]/30 rounded-full"
              />
              <div className="absolute inset-8 bg-gradient-to-br from-[#FF6B6B]/20 to-[#4EA8DE]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Database className="h-12 w-12 text-[#FF6B6B] mx-auto mb-2 animate-float" />
                  <div className="text-sm font-semibold text-foreground">Lead Engine</div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                    <Database className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </motion.div>

              {/* Data Flow Lines */}
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <motion.path
                    d="M50,10 Q80,30 50,50 Q20,70 50,90"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4ea8de" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-muted-foreground cursor-pointer"
            onClick={scrollToProjects}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}