"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { createRide, type RideFormData } from "../../services/api";

export default function CreateRide() {
  const router = useRouter();
  const [formData, setFormData] = useState<RideFormData>({
    type: "Outstation",
    pickup: {
      location: "",
      address: "",
    },
    dropoff: {
      location: "",
      address: "",
    },
    vehicleType: "Sedan",
    date: "",
    time: "",
    passengers: 1,
    price: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await createRide(formData);
      console.log(response);
      if (response) {
        setFormData({
          type: "Outstation",
          pickup: {
            location: "",
            address: "",
          },
          dropoff: {
            location: "",
            address: "",
          },
          vehicleType: "Sedan",
          date: "",
          time: "",
          passengers: 1,
          price: 0,
        });
        toast.success(`Ride booked successfully!`);
        // Add delay before navigation
        setTimeout(() => {
          router.push("/search");
        }, 2000); // 2 second delay
      }
    } catch (error) {
      console.error("Error creating ride:", error);
      toast.error("Failed to create ride");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[400px]">
        <Image
          src="/payment-page-banner.jpeg"
          alt="Create Ride"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center px-4">
          <div className="container mx-auto">
            <h1 className="text-white text-3xl font-bold">Create New Ride</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ride Type
                </label>
                <select
                  className="w-full p-2 border rounded"
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as
                        | "Outstation"
                        | "Local"
                        | "Airport",
                    })
                  }
                >
                  <option value="Outstation">Outstation</option>
                  <option value="Local">Local</option>
                  <option value="Airport">Airport</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Vehicle Type
                </label>
                <select
                  className="w-full p-2 border rounded"
                  value={formData.vehicleType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vehicleType: e.target.value as "Sedan" | "SUV" | "Luxury",
                    })
                  }
                >
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pickup Location
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="City"
                  value={formData.pickup.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pickup: { ...formData.pickup, location: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pickup Address
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Address"
                  value={formData.pickup.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pickup: { ...formData.pickup, address: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Drop-off Location
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="City"
                  value={formData.dropoff.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dropoff: {
                        ...formData.dropoff,
                        location: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Drop-off Address
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Address"
                  value={formData.dropoff.address}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dropoff: { ...formData.dropoff, address: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Time</label>
                <input
                  type="time"
                  className="w-full p-2 border rounded"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Passengers
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={formData.passengers}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      passengers: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700"
            >
              Create Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
