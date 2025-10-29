"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import projectsData from "@/data/projects.json"
import Image from "next/image"

interface Project {
  id: string
  title: string
  year: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  gallery: string[]
  features: string[]
  results: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projects = projectsData.projects as Project[]

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1))
    }
  }

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore my latest web scraping and automation projects that have helped businesses streamline operations and
            unlock valuable data insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="group cursor-pointer overflow-hidden border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:scale-[1.02]"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                      {project.year}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-poppins text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-accent/10 text-accent hover:bg-accent/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Click to view details</span>
                    <ExternalLink className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold font-poppins text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image Gallery */}
                  <div className="relative">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={selectedProject.gallery[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />

                      {selectedProject.gallery.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={prevImage}
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                            onClick={nextImage}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>

                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {selectedProject.gallery.map((_, index) => (
                              <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                                }`}
                                onClick={() => setCurrentImageIndex(index)}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold font-poppins text-foreground mb-3">Project Overview</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{selectedProject.longDescription}</p>

                      <h4 className="text-md font-semibold font-poppins text-foreground mb-2">Key Results</h4>
                      <p className="text-sm text-accent font-medium bg-accent/10 p-3 rounded-lg">
                        {selectedProject.results}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold font-poppins text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold font-poppins text-foreground mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
