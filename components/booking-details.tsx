interface BookingDetailsProps {
  itinerary: string
  pickupDate: string
  carType: string
  kms: string
  totalFare: string
}

export function BookingDetails({ itinerary, pickupDate, carType, kms, totalFare }: BookingDetailsProps) {
  return (
    <div className="bg-white shadow-lg">
      <div className="bg-blue-900 text-white rounded-t-lg p-4">
        <h2 className="text-lg">YOUR BOOKING DETAILS</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="text-gray-600">Itinerary:</span>
            <span className="font-medium">{itinerary}</span>

            <span className="text-gray-600">Pickup Date:</span>
            <span className="font-medium">{pickupDate}</span>

            <span className="text-gray-600">Car Type:</span>
            <span className="font-medium">{carType}</span>

            <span className="text-gray-600">KMs Included:</span>
            <span className="font-medium">{kms}</span>

            <span className="text-gray-600">Total Fare:</span>
            <span className="font-medium">₹ {totalFare}</span>
          </div>

          <div className="w-full">
            <div className="grid w-full grid-cols-3">
              <button className="p-2 text-blue-500">Inclusions</button>
              <button className="p-2 text-gray-500">Exclusions</button>
              <button className="p-2 text-gray-500">T&C</button>
            </div>
            <div className="pt-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-600">🚗</span>
                  Base Fare for 200 km
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-600">⏰</span>
                  Driver Allowance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-600">📍</span>
                  State Tax & Toll
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 text-gray-600">💰</span>
                  GST (5%)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

