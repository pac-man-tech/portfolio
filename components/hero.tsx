"use client"

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%234ea8de%22 fillOpacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6 text-balance"
            >
              Automate Your Data,{" "}
              <span className="text-primary">Grow Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty"
            >
              Freelance web scraping and automation specialist helping businesses save time, reduce costs, and unlock valuable insights through intelligent data solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 animate-glow"
              >
                View My Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3"
              >
                Get In Touch
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
                <div className="text-2xl font-bold text-primary font-poppins">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary font-poppins">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary font-poppins">24/7</div>
                <div className="text-sm text-muted-foreground">Data Processing</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Central Hub */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-2 border-accent/30 rounded-full"
              />
              
              <div className="absolute inset-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <Database className="h-12 w-12 text-primary mx-auto mb-2 animate-float" />
                  <div className="text-sm font-semibold text-foreground">Data Hub</div>
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
    </section>
  )
}
