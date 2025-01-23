import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, image, icon }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="mb-2 flex items-center">
          <div className="mr-3 rounded-full bg-white/20 p-2">{icon}</div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  )
}

