import Image from "next/image"

export function AppDownload() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">Download App Now!</h2>
        <p className="text-gray-600 mb-6">Use code MTR3 and get FLAT 10 % off on your domestic flight booking</p>
        <div className="flex gap-4">
          <a href="#" className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Image src="/placeholder.svg" alt="Play Store" width={24} height={24} />
            Google Play
          </a>
          <a href="#" className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100">
            <Image src="/placeholder.svg" alt="App Store" width={24} height={24} />
            App Store
          </a>
        </div>
      </div>
      <div className="relative h-[600px]">
        <Image
          src="/home-bottom-ss.png"
          alt="App screenshots"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}

