'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">EzPay</h3>
            <p className="text-background/70 text-sm">Stellar payment infrastructure for the modern merchant.</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <p>&copy; {currentYear} EzPay. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="hover:text-background transition-colors duration-300">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
