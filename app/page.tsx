import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { BookingForm } from "@/components/booking-form";
import { ServiceCard } from "@/components/service-card";
import { FeatureCard } from "@/components/feature-card";
import { Footer } from "@/components/footer";
import {
  Car,
  MapPin,
  Shield,
  User,
  Clock,
  Plane,
  Star,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <Image
          src="/home-page-banner.png"
          alt="Hero background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

        <div className="container relative mx-auto px-4 h-screen">
          <div className="grid lg:grid-cols-2 gap-8 h-full items-center pt-28">
            <div className="text-white pt-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
                Your Journey <br />
                <span className="text-blue-400">Our Responsibility</span>
              </h1>
              <p className="mt-6 text-xl text-white/90 max-w-xl">
                Book reliable rides at affordable rates across India. Experience
                comfort and safety with our professional drivers.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/search">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
                  Book Now
                </button>
                </Link>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Choose from our wide range of services designed to make your
              journey comfortable and hassle-free
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-blue-600">Cab Mate</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the difference with our premium services and dedicated
              support
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group hover:-translate-y-2 transition-all duration-300"
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Benefits Section */}
<section className="py-24 bg-blue-900 text-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold mb-8">
          See Some Benefits of Joining Us
        </h2>
        
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                01
              </div>
              <div>
                <h3 className="font-bold mb-2">Get best deals</h3>
                <p className="text-sm text-white/80">
                  Unlock Unbeatable Deals and Discounts for Your Dream Gateway. Explore Fresh, 
                  Handpicked Travel Recommendations and Exciting Activities - All at Incredible Prices!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                02
              </div>
              <div>
                <h3 className="font-bold mb-2">100% price transparency</h3>
                <p className="text-sm text-white/80">
                  No Hidden Costs or Surprises! Our 100% Price Transparency Ensures You Know Exactly What 
                  You're Paying For. Trustworthy and Reliable, Book with Confidence Today!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex gap-4">
              <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                03
              </div>
              <div>
                <h3 className="font-bold mb-2">Travel with more confidence</h3>
                <p className="text-sm text-white/80">
                  Your Safety is Our Priority! From Secure Booking to Reliable Support, We've Got You 
                  Covered. Experience Worry-Free Travel and Make Your Next Adventure Perfect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative h-[400px] rounded-tr-full rounded-br-full overflow-hidden">
          <div className="absolute right-0 top-0 w-3/4 h-[200px] rounded-full overflow-hidden border-4 border-yellow-400">
            <Image
              src="/homepage/benifit-1.jpeg"
              alt="Travel globe"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-3/4 h-[200px] rounded-full overflow-hidden border-4 border-yellow-400">
            <Image
              src="/homepage/benifit-2.jpeg"
              alt="Traveler"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Flexible Hourly Car Rentals Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">
        Flexible Hourly Car Rentals in India
      </h2>
      <p className="text-gray-600">
        Choose from our wide range of cars available for hourly rentals across major cities
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {carRentals.map((car, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
          <div className="relative h-48">
            <Image
              src={car.image}
              alt={car.location}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <div className="bg-blue-900 text-white p-2 rounded-full">
                <Clock className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">{car.location}</h3>
              <span className="text-blue-900 font-semibold">₹{car.price}/hr</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{car.description}</p>
            <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="bg-blue-900 py-24">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-12">
      What Our Customer Say About Us
    </h2>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl p-8 relative">
        <div className="absolute -right-4 top-4">
          <div className="text-blue-900 text-4xl font-serif">"</div>
        </div>
        <p className="text-gray-600 mb-6">
          I've used Cabmate for years, and it never disappoints. 
          The website has a vast amount of information, and I 
          love reading travelers' experiences and recommendations. 
          It's an essential tool for planning trips!
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="/homepage/person-1.png"
            alt="Customer"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h4 className="font-bold text-blue-900">Wade Warren</h4>
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Add more testimonial cards here */}
    </div>
  </div>
</section>

      

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Book your ride in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <div className="text-blue-600 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 ml-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Popular <span className="text-blue-600">Routes</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our most booked destinations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {routes.map((route, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{route.title}</h3>
                    <p className="text-sm text-white/80">
                      Starting from ₹{route.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intercity Services Section */}
<section className="py-24 ">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">
          India's Largest Intercity and Local Cab Services
        </h2>
        <p className="text-gray-600">
          We at Cab Mate Co. became India's most trusted intercity mobility solutions with reliable and 
          premium intercity and local car rental services. Over the last decade, we are uniquely placed as the largest 
          chauffeur-driven car rental company in India in terms of geographical reach.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Exploring India, one road trip at a time</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer took a galley of type and scrambled it to 
              make a type specimen book.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">No matter where you travel - we've got a cab for you</h3>
            <p className="text-gray-600">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 
              1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/homepage/intercity.png"
          alt="Intercity Service"
          width={600}
          height={800}
          className="rounded-lg"
        />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm">Cities</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What Our <span className="text-blue-600">Customers Say</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    objectFit="contain"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated with{" "}
              <span className="text-blue-400">Special Offers</span>
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Subscribe to our newsletter and never miss out on exclusive deals
            </p>
            <form className="flex gap-4 max-w-md flex-col md:flex-row mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

       {/* Download App Section */}
       <section className="py-24  text-blue-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Download Our App
                <span className="block text-blue-400 mt-2">
                  Get Started Now!
                </span>
              </h2>
              <p className="text-lg text-blue-900/80 mb-8">
                Get exclusive offers and seamless booking experience with our
                mobile app. Available for iOS and Android devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform">
                  <Image
                    src="/homepage/app-store-icon-new.png"
                    alt="App Store"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </button>
                <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform">
                  <Image
                    src="/homepage/google-play-store-icon.webp"
                    alt="Play Store"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/home-bottom-ss.png"
                alt="App screenshots"
                fill
                className="object-contain scale-110 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "City Rides",
    description: "Comfortable rides within the city",
    image: "/homepage/service-1.png",
    icon: <Car className="h-6 w-6 text-white" />,
  },
  {
    title: "Outstation",
    description: "Intercity travel made easy",
    image: "/homepage/service-2.png",
    icon: <MapPin className="h-6 w-6 text-white" />,
  },
  {
    title: "Airport Transfer",
    description: "Never miss your flight",
    image: "/homepage/service-3.png",
    icon: <Plane className="h-6 w-6 text-white" />,
  },
  {
    title: "Hourly Rental",
    description: "Flexible hourly packages",
    image: "/homepage/service-4.png",
    icon: <Clock className="h-6 w-6 text-white" />,
  },
];

const features = [
  {
    icon: <User className="h-6 w-6" />,
    title: "Expert Chauffeurs",
    description: "Professional and courteous drivers",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Clean Vehicles",
    description: "Regularly sanitized cars",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Safe Rides",
    description: "100% safety guaranteed",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Always here to help",
  },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "1M+", label: "Kilometers Driven" },
  { value: "500+", label: "Cities Covered" },
  { value: "24/7", label: "Customer Support" },
];

const steps = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Choose Location",
    description: "Enter your pickup and drop location",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Select Car",
    description: "Choose from our wide range of vehicles",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Book & Pay",
    description: "Secure payment and instant confirmation",
  },
];

const routes = [
  {
    title: "Mumbai to Pune",
    price: "1999",
    image: "/homepage/chennai.jpeg",
  },
  {
    title: "Delhi to Agra",
    price: "2499",
    image: "/homepage/delhi-agra.jpg",
  },
  {
    title: "Bangalore to Mysore",
    price: "1799",
    image: "/homepage/mumbai.jpeg",
  },
];

const testimonials = [
  {
    name: "John Doe",
    avatar: "/homepage/person-1.png",
    comment:
      "Excellent service! The driver was professional and the car was clean. Will definitely use again.",
  },
  {
    name: "Jane Smith",
    avatar: "/homepage/person-2.jpeg",
    comment:
      "Very reliable and affordable. The booking process was smooth and hassle-free.",
  },
  {
    name: "Mike Johnson",
    avatar: "/homepage/person-3.png",
    comment:
      "Best cab service I've used. The app is person--friendly and the support team is very helpful.",
  },
];

const carRentals = [
  {
    location: "Delhi, India",
    price: "940",
    description: "Luxury cars available",
    image: "/homepage/car-1.jpg",
  },
  {
    location: "Hyderabad",
    price: "940",
    description: "Premium sedans",
    image: "/homepage/car-2.jpg",
  },
  {
    location: "Bangalore",
    price: "940",
    description: "SUVs and luxury cars",
    image: "/homepage/car-3.webp",
  },
  {
    location: "Chennai",
    price: "940",
    description: "Comfortable rides",
    image: "/homepage/car-4.jpg",
  },
];