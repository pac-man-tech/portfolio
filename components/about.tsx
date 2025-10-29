"use client"

import { motion } from "framer-motion"
import { Download, Award, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "Certified Expert",
      description: "Python & Web Scraping Specialist",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Average 48-hour turnaround",
    },
    {
      icon: Users,
      title: "Happy Clients",
      description: "50+ successful projects delivered",
    },
  ]

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume
    console.log("Downloading resume...")
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about turning complex data challenges into simple, automated solutions that drive business
            growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border">
                  <Image
                    src="/web-developer-headshot.png"
                    alt="Professional headshot"
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold font-poppins text-foreground mb-2">John Pacman</h3>
                    <p className="text-accent font-medium mb-4">Web Scraping & Automation Expert</p>
                    <Button
                      onClick={downloadResume}
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center border-border hover:border-accent/50 transition-colors">
                    <CardContent className="p-4">
                      <achievement.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-foreground text-sm mb-1">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold font-poppins text-foreground mb-4">
                Freelance Developer Specializing in Web Scraping and Automation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience in web scraping and automation, I help businesses save time and unlock
                valuable insights from web data. My expertise spans from simple data extraction tasks to complex
                automation workflows that can transform how your business operates.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold font-poppins text-foreground mb-2">What I Do</h4>
                <ul className="space-y-2">
                  {[
                    "Custom web scraping solutions for any website",
                    "Automated data collection and processing pipelines",
                    "API integrations and data synchronization",
                    "Business process automation using Python and JavaScript",
                    "Data cleaning, transformation, and analysis",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold font-poppins text-foreground mb-2">Why Choose Me</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in delivering not just code, but complete solutions that solve real business problems. Every
                  project comes with comprehensive documentation, ongoing support, and the flexibility to adapt as your
                  needs evolve. My goal is to become your trusted partner in data automation.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
