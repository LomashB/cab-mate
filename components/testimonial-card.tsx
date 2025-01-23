import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  image: string
  testimonial: string
}

export function TestimonialCard({ name, image, testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-blue-900 text-white rounded-lg shadow-lg p-6">
      <div className="flex items-start gap-4">
        <Quote className="h-8 w-8 text-blue-300" />
        <div>
          <p className="mb-4">{testimonial}</p>
          <div className="flex items-center gap-3">
            <Image src={image || "/placeholder.svg"} alt={name} width={40} height={40} className="rounded-full" />
            <span className="font-semibold">{name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}