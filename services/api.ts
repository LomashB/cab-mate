import axios from '@/lib/axios';

// Update the Ride interface to match the API response
export interface Ride {
  _id: string;
  type: string;
  pickup: {
    location: string;
    address: string;
  };
  dropoff: {
    location: string;
    address: string;
  };
  vehicleType: string;
  date: string;
  time: string;
  passengers: number;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// Update ApiResponse to include count and properly type the data
interface ApiResponse {
  success: boolean;
  count?: number;
  data: Ride[];
  status: number;
}

export const RideService = {
  searchRides: async (params: { type: string; pickup: string; dropoff: string }) => {
    const response = await axios.get<ApiResponse>('api/rides/search', { params });
    return response.data;  // Return response.data directly instead of the whole response
  },
};

export const BookingService = {
  createBooking: async (bookingData: any) => {
    const response = await axios.post<ApiResponse>('/bookings', bookingData);
    return response.data;
  },
}; 

// Types for the ride data
export interface RideFormData {
    type: "Outstation" | "Local" | "Airport"
    pickup: {
      location: string
      address: string
    }
    dropoff: {
      location: string
      address: string
    }
    vehicleType: "Sedan" | "SUV" | "Luxury"
    date: string
    time: string
    passengers: number
    price: number
  }
  
  // API function to create a ride
  export async function createRide(formData: RideFormData): Promise<ApiResponse> {
    const response = await axios.post<ApiResponse>('/api/rides', formData);
    return response.data;
  }