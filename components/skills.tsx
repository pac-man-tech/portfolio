"use client"

import { motion } from "framer-motion"
import { Target, Workflow, Zap, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Testimonials from './testimonial'

export default function Skills() {
  const expertise = [
    {
      title: "Lead Generation",
      icon: Target,
      description: "Find and capture qualified prospects automatically",
      capabilities: [
        "Multi-platform data extraction",
        "Contact enrichment & validation",
        "CRM integration & automation",
        "Real-time lead scoring",
      ],
    },
    {
      title: "Workflow Automation",
      icon: Workflow,
      description: "Connect your tools and eliminate manual processes",
      capabilities: [
        "n8n workflow development",
        "API integrations (any platform)",
        "Data syncing between systems",
        "Custom automation scripts",
      ],
    },
    {
      title: "Process Optimization",
      icon: Zap,
      description: "Eliminate repetitive tasks and boost productivity",
      capabilities: [
        "Document processing automation",
        "Email & notification workflows",
        "Scheduled task execution",
        "Report generation",
      ],
    },
    {
      title: "Reliable & Scalable",
      icon: Shield,
      description: "Built to run 24/7 without breaking",
      capabilities: [
        "Error handling & recovery",
        "Performance optimization",
        "Monitoring & alerts",
        "Easy maintenance",
      ],
    },
  ]

  const techStack = [
    "Python",
    "n8n",
    "Airtable",
    "Heyreach",
    "Brevo",
    "REST APIs",
    "PostgreSQL",
    "HubSpot",
    "Docker",
    "GA4",
    "Make/Zapier",
    "GTM",
    "Webhooks"
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">
            What I Bring to Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            The expertise and tools to build automation that actually works—and keeps working.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-poppins text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-lg font-semibold font-poppins text-foreground mb-4">Technologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            I choose the right tool for every job based on your needs, not what's trendy. If it works and scales, I use it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}