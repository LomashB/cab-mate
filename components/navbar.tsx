"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Download, Bell, Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">+91</span> 9725556786
              </span>
              <Link href="mailto:info@cabmate.com" className="hidden sm:block hover:text-blue-400">
                Hello@cabmate.com
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <span className="hidden sm:inline">India (INR)</span>
              <span>🇮🇳</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
            <Image
          src="/cabmate-logo.png"
          alt="Hero background"
          width={150}
          height={100}  
          className="w-12 h-12 object-contain"
        />
              </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="#" className="flex items-center px-3 py-2 text-sm hover:text-blue-600">
                <Bell className="w-4 h-4 mr-2" />
                Special Offers
              </Link>
              <Link href="#" className="flex items-center px-3 py-2 text-sm hover:text-blue-600">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Link>
              <Link href="#" className="px-3 py-2 text-sm hover:text-blue-600">
                Travel Agent
              </Link>
              <Link href="#" className="px-3 py-2 text-sm hover:text-blue-600">
                Cab Mate Blog
              </Link>
              <Link
                href="/login"
                className="ml-4 px-4 py-2 text-sm text-white bg-blue-900 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login or Signup
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link href="#" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
              <Bell className="w-4 h-4 mr-2" />
              Special Offers
            </Link>
            <Link href="#" className="flex items-center px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Link>
            <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
              Travel Agent
            </Link>
            <Link href="#" className="block px-3 py-2 text-sm hover:bg-gray-100 rounded-md">
              Cab Mate Blog
            </Link>
            <Link href="/login" className="block px-3 py-2 text-sm text-white bg-blue-900 rounded-md hover:bg-blue-700">
              Login or Signup
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

