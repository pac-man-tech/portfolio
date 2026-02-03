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
      title: "Tested & Proven Workflow systems",
      description: "15+ businesses automated successfully",
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Systems live within 48-72 hours",
    },
    {
      icon: Users,
      title: "Revenue Impact",
      description: "Average 3x ROI within 6 months",
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
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            Your Growth Partner, Not Just a Developer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I build lead generation workflows & automation systems that save time, boost revenue, and work around the clock so that you can focus on closing deals, not chasing them.
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
                    src="/images/pfp.jpg"
                    alt="Professional headshot"
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold font-poppins text-foreground mb-2">Victor Folajimi</h3>
                    <p className="text-accent font-medium mb-4">Lead Generation & Automation Specialist</p>
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
                BIO
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I started my career as Python developer, because I find beauty in automating tasks. Discovering n8n took this passion to a new level, allowing me to craft elegant, lean, and lightning-fast solutions with the same flexibility and power that writing Python scripts offered. My mission is to give time back to the creative, strategic minds who need it most, and my greatest joy is seeing a process that once took hours now execute in seconds.
                ​I specialize in helping businesses escape the cycle of manual lead hunting and repetitive, tedious work. Join the successful organizations I've partnered with today and start focusing on what truly matters.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold font-poppins text-foreground mb-2">What You Get</h4>
                <ul className="space-y-2">
                  {[
                    "Lead generation systems that find and qualify prospects automatically",
                    "Business automation that eliminates hours of daily grunt work",
                    "Data pipelines that keep your CRM fresh and your team productive",
                    "Custom integrations between your tools (no more copy-pasting)",
                    "Intelligent scrapers that extract exactly what you need from any source",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold font-poppins text-foreground mb-2">How I'm Different</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I don't just write code and disappear. Every solution will come with clear documentation your team 
                  can actually use, training so you're never dependent on me, and 30 days of post-launch support. 
                  You'll know exactly how it works, what it costs, and what results to expect.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Your Free Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                See Real Results
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}