"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Sales, TechCorp",
      image: "/images/testimonials/client.jpg",
      text: "The LinkedIn lead generation system generated 500+ qualified leads in the first month. Our sales team is overwhelmed with opportunities—in a good way!"
    },
    {
      name: "Michael Chen",
      title: "Founder, GrowthLabs",
      image: "/images/testimonials/b&w.jpg",
      text: "We went from manually prospecting for 6 hours daily to having warm leads delivered automatically. This automation paid for itself in the first week."
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Director, ScaleUp Inc",
      image: "/images/testimonials/upwork.jpg",
      text: "The AI personalization is incredible. Our reply rates jumped from 3% to 18% because every message feels hand-written. Game changer for our outbound."
    }
  ]

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 7000)

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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses that automated their lead generation
          </p>
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