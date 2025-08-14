import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-lg font-bold text-lg cursor-pointer">NAC</div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link
              href="/school-registration"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Participation Via School
            </Link>
            <Link
              href="/direct-registration"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Direct Participation
            </Link>
            <Link href="/legacy" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              NAC Legacy
            </Link>
            <Link href="/study-material" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Study Materials
            </Link>
            <Link href="/rewards" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Awards
            </Link>
            <Link href="/faqs" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              FAQs
            </Link>
          </nav>

          {/* Register Button */}
          <div className="flex-shrink-0">
            <Link href="/school-registration">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                Register for School
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
