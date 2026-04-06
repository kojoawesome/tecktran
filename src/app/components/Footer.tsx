import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "./ui/logo.svg";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Summary */}
          <div>
            <img
              src={logo}
              alt="TeckTran International"
              className="h-8 mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4">
              We partner with organizations to simplify operations, strengthen
              people management, and enable sustainable growth across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  info@tecktran.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  +233 24 313 7837
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-accent"
                />
                <span className="text-primary-foreground/80">Accra, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>
            &copy; {new Date().getFullYear()} TeckTran International. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
