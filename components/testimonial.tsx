"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Olayinka Emidun",
      title: "CEO, Cela Naturals",
      image: "/images/testimonials/CELA.png",
      text: "Before hiring Pacman tech, we usually handled our inventories manually, which took a lot of time and resources, I also manually prospect leads for about 3/4 hours everyday. Pacman took time to understand our goals and designed a brilliant solution. The results have been phenomenal, we now save money and 30+ hours every week from automated leads and administrative work, the system paid for itself in two weeks. I highly recommend Pacman tech to anyone serious about smart, effective business automation"
    },
    {
      name: "Mr. Blessing",
      title: "Founder, SpotlightCode Digital Businesses",
      image: "/images/testimonials/b&w.jpg",
      text: "Pacman's n8n skill is top-tier. They built a fast workflow that searches LinkedIn and accurately enriches HR contacts for our pipeline. An exceptional solution that immediately added value to our business."
    },
    {
      name: "Helen Kenny",
      title: "Freelancer",
      image: "/images/testimonials/kenny.png",
      text: "As a busy solo freelancer, my client onboarding was entirely manual and was always taking away precious time needed for my work. I met Pacman by chance but he changed my entire business structure with his workflow, he didn't just automate the tasks, he also built a robust and low-maintainance system integrating warm leads from linkedin and reddit into my CRM. I would highly recommend any freelancer looking to professionalize and maximize their time. "
    }
  ]

  // Auto-scroll every few seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 9000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold font-poppins text-foreground mb-4">
            What Clients Say
          </h3>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg p-8 shadow-lg border border-border"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              
              <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}