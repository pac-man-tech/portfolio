"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95, color: "bg-primary" },
        { name: "JavaScript", level: 90, color: "bg-accent" },
        { name: "TypeScript", level: 85, color: "bg-chart-3" },
        { name: "SQL", level: 88, color: "bg-chart-4" },
      ],
    },
    {
      title: "Web Scraping & Automation",
      icon: Globe,
      skills: [
        { name: "Scrapy", level: 98, color: "bg-primary" },
        { name: "Playwright", level: 92, color: "bg-accent" },
        { name: "Selenium", level: 90, color: "bg-chart-3" },
        { name: "BeautifulSoup", level: 95, color: "bg-chart-4" },
      ],
    },
    {
      title: "Data & Databases",
      icon: Database,
      skills: [
        { name: "Pandas", level: 93, color: "bg-primary" },
        { name: "PostgreSQL", level: 87, color: "bg-accent" },
        { name: "MongoDB", level: 82, color: "bg-chart-3" },
        { name: "Redis", level: 85, color: "bg-chart-4" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Server,
      skills: [
        { name: "Docker", level: 88, color: "bg-primary" },
        { name: "AWS", level: 85, color: "bg-accent" },
        { name: "Git", level: 92, color: "bg-chart-3" },
        { name: "Linux", level: 90, color: "bg-chart-4" },
      ],
    },
  ]

  const technologies = [
    "Python",
    "Scrapy",
    "Playwright",
    "JavaScript",
    "n8n",
    "BeautifulSoup",
    "Selenium",
    "Pandas",
    "FastAPI",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Git",
    "Linux",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building robust web scraping and automation solutions that scale with your
            business needs.
          </p>
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold font-poppins text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold font-poppins text-foreground mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold font-poppins text-foreground text-center mb-8">Experience Timeline</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                {[
                  {
                    year: "2024-Present",
                    title: "Senior Freelance Developer",
                    description: "Specialized web scraping and automation solutions for enterprise clients",
                  },
                  {
                    year: "2022-2024",
                    title: "Full-Stack Developer",
                    description: "Built scalable data extraction systems and automation workflows",
                  },
                  {
                    year: "2020-2022",
                    title: "Python Developer",
                    description: "Focused on web scraping, data analysis, and process automation",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                    <div className="ml-12">
                      <div className="text-sm font-medium text-accent mb-1">{item.year}</div>
                      <h4 className="text-lg font-semibold font-poppins text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
