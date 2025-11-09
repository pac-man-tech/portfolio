"use client"

import { motion } from "framer-motion"
import { ArrowUp, Heart, Linkedin, Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  const services = [
    "Lead Generation Systems",
    "Workflow Automation (n8n)",
    "Admin Task Elimination",
    "Web Scraping Solutions",
    "CRM Integrations"
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/victor-folajimi-b1051624b",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/pac-man-tech/",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/pacman_nl",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:victor.pacmantech@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold font-poppins text-primary mb-2">Pacman Tech Solutions</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Building lead generation workflows and automation systems that capture opportunities 24/7 so you can
                  focus on growth.
                </p>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-background border border-border hover:border-primary p-2 rounded-lg transition-colors group"
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href)
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold font-poppins text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-muted-foreground text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0"
            >
              <span>© 2025 Pacman Tech Solutions. Made with</span>
              <Heart className="h-4 w-4 text-primary mx-1 fill-current" />
              <span>for growth-focused businesses.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-sm text-muted-foreground">Taking new clients</span>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}