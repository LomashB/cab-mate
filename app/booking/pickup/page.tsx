import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingDetails } from "@/components/booking-details"
import { MapPin } from "lucide-react"

export default function PickupDetails() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-[400px]">
          <Image
            src="/pickup-page-banner.jpeg"
            alt="Booking banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center px-4">
            <div className="container mx-auto">
              <h1 className="text-white text-2xl">Home › Select Car › Booking</h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact & Pickup Form */}
            <div className="bg-blue-900 text-white rounded-lg p-6">
              <h2 className="text-lg font-bold">CONTACT & PICKUP DETAILS</h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name</label>
                    <input className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your name" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Enter email address" />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="alternate-email" className="h-4 w-4" />
                    <label
                      htmlFor="alternate-email"
                      className="text-sm text-gray-100 leading-none"
                    >
                      Send ride details to alternate email
                    </label>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Mobile (+91)</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Pickup</label>
                    <div className="relative">
                      <input className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your pickup address" />
                      <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-1 block">Drop</label>
                    <div className="relative">
                      <input className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your drop address" />
                      <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-white text-blue-900 font-bold py-2 rounded-lg" type="submit">
                  PROCEED
                </button>
              </form>
            </div>

            {/* Booking Details */}
            <BookingDetails
              itinerary="Bangalore > Mysore"
              pickupDate="7th December 2024 at 7:00 AM"
              carType="Wagon R or Equivalent"
              kms="145 km"
              totalFare="2358"
            />
          </div>
        </div>
      </main>

    </div>
  )
}

