import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#0E1217] text-white">
      {/* Diagonal Design */}
      <div className="absolute left-0 right-0 top-0 h-48 w-full overflow-hidden">
        <div className="absolute -top-16 right-0 h-32 w-[50%] bg-[#4169E1] transform skew-y-[10deg]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container relative mx-auto px-4 py-12">
        {/* Logo and Description Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/cabmate-logo.png" alt="Cab Mate" className="invert mb-4 h-12" />
            <p className="mb-6 text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
              Ipsum has been the industry's standard dummy text ever since the 1500s, when 
              an unknown printer took a galley.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick <span className="text-[#4169E1]">Links</span></h4>
            <ul className="space-y-2">
              {["Join Our Family", "Contact Us", "Privacy Policy", "Case Study", "Blog"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white flex items-center">
                    <span className="text-[#4169E1] mr-2">›</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="mb-4 font-semibold">Our <span className="text-[#4169E1]">Services</span></h4>
            <ul className="space-y-2">
              {["Local Car Rentals", "Outstation Taxi", "One way cabs", "Corporate Car Rental", "Airport Taxi"].map(
                (service) => (
                  <li key={service}>
                    <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-white flex items-center">
                      <span className="text-[#4169E1] mr-2">›</span> {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-4 font-semibold">Contact <span className="text-[#4169E1]">Us</span></h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="mb-2">Call Us :</p>
              <p className="mb-4">033 6642 6642</p>
              <p className="mb-2">Email Us :</p>
              <p>info@cabmate.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-4">
              <img src="/homepage/payment-methods.png" alt="Payment Methods" className="h-8" />
            </div>
            <div className="flex items-center space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#4169E1]"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-400">Copyright © 2024 <span className="text-[#4169E1]">Cab Mate & Lomash Bhuva</span> | All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

