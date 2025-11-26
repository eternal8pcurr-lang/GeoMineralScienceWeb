import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { InvestmentSection } from "@/components/investment-section"
import { FoundersSection } from "@/components/founders-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { InvestorPortal } from "@/components/investor-portal"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <InvestmentSection />
      <FoundersSection />
      <CapabilitiesSection />
      <InvestorPortal />
      <Footer />
    </main>
  )
}
