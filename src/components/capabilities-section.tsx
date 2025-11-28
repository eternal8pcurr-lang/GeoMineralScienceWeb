import { Search, Mountain, Pickaxe, Coins } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Search,
      title: "Land Assaying",
      description:
        "Professional verification of gold and silver content using state-of-the-art analysis equipment and proven methodologies.",
    },
    {
      icon: Mountain,
      title: "Prospecting",
      description:
        "Expert scouting and identification of new, unexploited mineral properties with high-yield potential.",
    },
    {
      icon: Pickaxe,
      title: "Placer Mining",
      description:
        "Active extraction operations utilizing both traditional expertise and modern placer mining techniques.",
    },
    {
      icon: Coins,
      title: "Gold Coin Production",
      description:
        "Processing raw gold into investment-grade coins, offering tangible value to our partners and investors.",
    },
  ]

  return (
    <section id="capabilities" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Our Core Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            End-to-end mineral extraction services, from initial prospecting to refined gold products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="bg-secondary border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-3">{capability.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
