import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-foreground font-semibold text-lg">Geo Mineral Science LLC</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Premier land assaying, prospecting, and placer mining operations. Unlocking the earth's hidden mineral
              wealth.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#investment" className="text-muted-foreground hover:text-primary transition-colors">
                  Investment Opportunity
                </a>
              </li>
              <li>
                <a href="#founders" className="text-muted-foreground hover:text-primary transition-colors">
                  Meet the Founders
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Capabilities
                </a>
              </li>
              <li>
                <a href="#portal" className="text-muted-foreground hover:text-primary transition-colors">
                  Investor Portal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>invest@geomineralscience.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  123 Mining District Road
                  <br />
                  Gold Valley, NV 89001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Geo Mineral Science LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
