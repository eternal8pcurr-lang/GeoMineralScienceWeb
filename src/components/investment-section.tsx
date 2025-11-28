import { TrendingUp, Shield, Gem } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function InvestmentSection() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Proven Reserves",
      description: "Verified gold and silver deposits with documented assay reports",
    },
    {
      icon: Shield,
      title: "Expert Management",
      description: "Decades of combined experience in mineral extraction and operations",
    },
    {
      icon: Gem,
      title: "Immediate Potential",
      description: "Properties ready for extraction with established infrastructure",
    },
  ]

  return (
    <section id="investment" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm tracking-widest uppercase">The Opportunity</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Strategic Acquisition Target
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are actively seeking strategic partners for a prime property acquisition valued at{" "}
              <span className="text-primary font-semibold">$1.5 Million</span>. This represents a rare opportunity to
              invest in verified mineral-rich land with immediate extraction potential.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team has conducted extensive geological surveys and assay testing, confirming the presence of
              high-grade gold and silver deposits. With our proven track record and expert management, this acquisition
              presents an exceptional investment opportunity.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request Investment Details
            </Button>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-secondary border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex gap-5">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
