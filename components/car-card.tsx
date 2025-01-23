import Image from "next/image"

interface CarCardProps {
  city: string
  price: string
  image: string
}

export function CarCard({ city, price, image }: CarCardProps) {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md">
      <div className="p-4">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={`Car in ${city}`} fill className="object-cover" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{city}, India</h3>
            <p className="text-sm text-gray-600">Starting from {price}</p>
          </div>
          <button className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

