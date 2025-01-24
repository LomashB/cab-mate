"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPin, Calendar, Clock } from "lucide-react"
import { BookingService } from "@/services/api"

export function BookingForm() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("one-way")
  const [formData, setFormData] = useState({
    type: "one-way",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    phone: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        const queryParams = new URLSearchParams({
          pickup: formData.pickup,
          dropoff: formData.dropoff,
        });
        router.push(`/search?${queryParams.toString()}`);    
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-6">
      {/* Tabs */}
      <div className="flex mb-6 border-b">
        {["one-way", "round-trip", "local", "airport"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              setFormData({...formData, type: tab})
            }}
            className={`flex-1 py-2 text-sm font-medium transition-colors
              ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600"}`}
          >
            {tab
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">From</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter City"
                value={formData.pickup}
                onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">To</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter City"
                value={formData.dropoff}
                onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Pick Up Date</label>
            <div className="relative">
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Pick Up Time</label>
            <div className="relative">
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Explore Cabs
        </button>
      </form>
    </div>
  )
}