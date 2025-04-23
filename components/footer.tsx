import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="flex items-center">
                <Logo className="h-10 w-auto text-white" />
                <span className="ml-2 text-xl font-bold text-white">
                  Alpha<span className="text-maroon-400">binet</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400">
              We create digital solutions that help businesses grow and succeed in the digital landscape.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-maroon-400" />
                <span>+91 8273873950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-maroon-400" />
                <span>alphabinetglobal@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-maroon-400" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-maroon-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-maroon-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-maroon-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-maroon-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-maroon-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-maroon-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="hover:text-maroon-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-maroon-400 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-maroon-400 transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="hover:text-maroon-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-maroon-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/custom-applications" className="hover:text-maroon-400 transition-colors">
                  Custom Web Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-maroon-500 bg-gray-800 border-gray-700"
                />
                <button
                  type="submit"
                  className="bg-maroon-600 hover:bg-maroon-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="py-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4 text-white">Sitemap</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div>
              <h4 className="text-sm font-medium text-maroon-400 mb-2">Main Pages</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/" className="hover:text-maroon-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-maroon-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-maroon-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-maroon-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-maroon-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-maroon-400 mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/services/web-development" className="hover:text-maroon-400 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ui-ux-design" className="hover:text-maroon-400 transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/ecommerce" className="hover:text-maroon-400 transition-colors">
                    E-Commerce
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-maroon-400 mb-2">More Services</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/services/mobile-apps" className="hover:text-maroon-400 transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital-marketing" className="hover:text-maroon-400 transition-colors">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/services/custom-applications" className="hover:text-maroon-400 transition-colors">
                    Custom Applications
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-maroon-400 mb-2">Resources</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/blog" className="hover:text-maroon-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-maroon-400 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-maroon-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-maroon-400 mb-2">Company</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/careers" className="hover:text-maroon-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-maroon-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-maroon-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-maroon-400 mb-2">Legal</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/privacy-policy" className="hover:text-maroon-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-maroon-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-maroon-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-white">Connect With Us</h3>
              <p className="text-gray-400">Follow us on social media for updates and insights</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-gray-800 hover:bg-maroon-600 transition-colors p-3 rounded-full"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-gray-800 hover:bg-maroon-600 transition-colors p-3 rounded-full"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="bg-gray-800 hover:bg-maroon-600 transition-colors p-3 rounded-full"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="bg-gray-800 hover:bg-maroon-600 transition-colors p-3 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Alphabinet. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-maroon-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-maroon-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-maroon-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
