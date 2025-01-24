"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight, Shield, Award } from "lucide-react"
import { RideService } from '@/services/api'

interface Ride {
  _id: string;
  type: string;
  vehicleType: string;
  pickup: {
    location: string;
    address: string;
  };
  dropoff: {
    location: string;
    address: string;
  };
  date: string;
  time: string;
  passengers: number;
  price: number;
  status: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [rides, setRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRides = async () => {
      try {
        setLoading(true)
        const params = {
          type: searchParams.get("type") || "",
          pickup: searchParams.get("pickup") || "",
          dropoff: searchParams.get("dropoff") || ""
        }

        const response = await RideService.searchRides(params)
        if (response) {
          console.log('Rides data:', response.data)
          setRides(response)
        } else {
          console.error('API response not successful:', response)
        }
      } catch (error) {
        console.error('Error fetching rides:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRides()
  }, [searchParams])

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 pt-16">
        {/* Hero Banner */}
        <div className="relative h-[300px]">
          <Image
            src="/search-page-banner.jpeg"
            alt="Car banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Search Details */}
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>Select Car</span>
            </div>

            {/* Route */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-4">
                {searchParams.get("pickup") || "Select Pickup"} <ChevronRight className="inline w-5 h-5" /> 
                {searchParams.get("dropoff") || "Select Dropoff"}
                {searchParams.get("type") && ` (${searchParams.get("type")})`}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                <div>
                  <label className="block text-sm text-gray-600">Pick Up</label>
                  <input type="date" defaultValue="2024-02-06" className="mt-1 w-full border rounded p-2" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Pickup Time</label>
                  <input type="time" defaultValue="10:00" className="mt-1 w-full border rounded p-2" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <button className=" w-full p-3 mt-6 bg-blue-900 text-white rounded  hover:bg-blue-700">Modify</button>
                </div>
              </div>
            </div>

            {/* Promise Banner */}
            <div className="bg-blue-900 text-white p-6 rounded-lg text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">COURTEOUS. AFFORDABLE. RELIABLE.</h2>
              <p>That's our Promise</p>
            </div>

            {/* Car Listings */}
            <div className="space-y-6">
              {loading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-900"></div>
                </div>
              ) : rides.length > 0 ? (
                rides.map((ride) => (
                  <div key={ride._id} className="border rounded-lg p-2 md:p-4 flex flex-col md:flex-row md:justify-between md:gap-4 gap-4">
                    {/* Car Image and Name */}
                    <div className="flex items-center gap-4">
                      <Image
                        src="/car-image.png"
                        alt={ride.vehicleType}
                        width={120}
                        height={80}
                        className="rounded"
                      />
                      <div>
                        <h3 className="font-bold">{ride.vehicleType}</h3>
                        <p className="text-sm text-gray-600">or equivalent</p>
                      </div>
                    </div>

                    {/* Route Details */}
                    <div className="flex flex-col gap-2">
                      <div className="text-sm">
                        <span className="font-medium">From:</span> {ride.pickup.location} - {ride.pickup.address}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">To:</span> {ride.dropoff.location} - {ride.dropoff.address}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Date:</span> {new Date(ride.date).toLocaleDateString()}
                        <span className="ml-2 font-medium">Time:</span> {ride.time}
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">Top Rated Cabs</span>
                        </div>
                        <span className="text-sm">Chauffeurs</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-1">
                          <Shield className="w-5 h-5 text-blue-600" />
                          <span className="text-sm">Includes Toll,</span>
                        </div>
                        <span className="text-sm">State Tax & GST</span>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="text-left md:flex md:gap-8 md:align-center md:justify-between">
                        <div className="text-green-600">₹{ride.price}</div>
                        <div className="text-sm text-green-600">Save ₹{Math.round(ride.price * 0.1)}</div>
                        <div className="text-orange-500 font-bold">₹{Math.round(ride.price * 0.9)}</div>
                        <div className="text-sm text-gray-600">up to 200 km</div>
                        <Link href="/booking/payment">
                          <button className="text-blue-600 mr-4 p-0 h-auto text-sm underline">Details</button>
                        </Link>
                      </div>
                      <Link href={`/booking/pickup?id=${ride._id}`}>
                        <button className="bg-blue-900 hover:bg-blue-700 text-white rounded px-6 py-2">SELECT</button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 text-lg">No rides found for your search criteria.</p>
                  <p className="text-sm text-gray-500 mt-2">Try modifying your search parameters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

