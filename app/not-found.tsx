import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <Image
          src="/404-image.png" // Replace with your 404 image path
          alt="Not Found"
          width={300}
          height={300}
          className="mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}