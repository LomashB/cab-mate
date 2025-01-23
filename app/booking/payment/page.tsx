import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingDetails } from "@/components/booking-details"

export default function PaymentDetails() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-[400px]">
          <Image
            src="/payment-page-banner.jpeg"
            alt="Payment banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center px-4">
            <div className="container mx-auto">
              <h1 className="text-white text-2xl">Home › Select Car › Payment</h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div className="bg-blue-900 text-white rounded-lg">
              <div className="p-6">
                <h2 className="text-lg font-bold">PAYMENT DETAILS</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input type="radio" value="0" id="pay-0" name="payment" className="hidden" />
                      <label htmlFor="pay-0" className="flex flex-col cursor-pointer">
                        <span className="font-medium">₹0</span>
                        <span className="text-sm text-gray-200">Pay Later</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" value="25" id="pay-25" name="payment" className="hidden" />
                      <label htmlFor="pay-25" className="flex flex-col cursor-pointer">
                        <span className="font-medium">25%</span>
                        <span className="text-sm text-gray-200">₹589.5 now</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" value="50" id="pay-50" name="payment" className="hidden" />
                      <label htmlFor="pay-50" className="flex flex-col cursor-pointer">
                        <span className="font-medium">50%</span>
                        <span className="text-sm text-gray-200">₹1179 now</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" value="100" id="pay-100" name="payment" className="hidden" />
                      <label htmlFor="pay-100" className="flex flex-col cursor-pointer">
                        <span className="font-medium">100%</span>
                        <span className="text-sm text-gray-200">₹2358 now</span>
                      </label>
                    </div>
                  </div>

                  <div className="text-sm text-gray-200 text-center">
                    You are one step away from booking a reliable cab.
                  </div>

                  <div className="flex gap-2">
                    <input type="text" placeholder="Coupon Code" className="border border-gray-300 p-2 rounded" />
                    <button className="border border-gray-300 bg-transparent text-white p-2 rounded">Apply</button>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="gst" className="cursor-pointer" />
                    <label
                      htmlFor="gst"
                      className="text-sm text-gray-200 leading-none cursor-pointer"
                    >
                      I have a GST Number (Optional)
                    </label>
                  </div>

                  <button className="w-full border bg-blue-900 text-white p-2 rounded-lg">
                    PROCEED
                  </button>
                </form>
              </div>
            </div>

            {/* Booking Details */}
            <BookingDetails
              itinerary="Bangalore > Mysore"
              pickupDate="7th December 2024 at 7:00 AM"
              carType="Wagon R or Equivalent"
              kms="145 (+5 + 5) km"
              totalFare="2279 (2358 - 20)"
            />
          </div>
        </div>
      </main>

    </div>
  )
}

