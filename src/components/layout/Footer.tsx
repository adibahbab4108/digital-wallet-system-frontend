import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-muted">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        
        {/* Newsletter */}
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-foreground sm:text-3xl">
            Want us to email you with the latest news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-full border border-input bg-background p-4 pe-32 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />
              <button
                type="submit"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div>
            <p className="mt-4 text-muted-foreground text-center lg:text-left">
              Your trusted digital wallet for secure payments, instant transfers, and rewards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <strong className="font-medium text-foreground"> Quick Links </strong>
            <ul className="mt-6 space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <strong className="font-medium text-foreground"> Legal </strong>
            <ul className="mt-6 space-y-2">
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <strong className="font-medium text-foreground"> Support </strong>
            <ul className="mt-6 space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-muted pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Digital Wallet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
