import Link from "next/link"
import { Phone, Download, Bell } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Top Bar */}
          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              +91 9725556786
            </span>
            <Link href="mailto:info@cabmate.com" className="hover:text-blue-600">
              Hello@cabmate.com
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 bg-transparent border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
              <Bell className="w-4 h-4" />
              <span>Special Offers</span>
            </button>
            <button className="flex items-center space-x-2 bg-transparent border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
            <button className="flex items-center space-x-2 bg-transparent border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
              <span>Travel Agent</span>
            </button>
            <button className="flex items-center space-x-2 bg-transparent border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
              <span>Cab Mate Blog</span>
            </button>
            <button className="bg-blue-900 text-white hover:bg-blue-700 rounded px-4 py-2">
              Login or Signup
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

