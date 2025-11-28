import { Card, CardContent } from "@/components/ui/card"

export function FoundersSection() {
  const founders = [
    {
      name: "Pete Currington",
      role: "Operations Leadership",
      description:
        "Overseeing all mining operations with a focus on efficiency, safety, and sustainable extraction practices.",
      image: "https://site-assets.plasmic.app/df7bfec0441b23581822834c9fc596fa.jpg",
    },
    {
      name: "Ken Currington",
      role: "Strategic Leadership",
      description: "Driving strategic vision and investor relations, ensuring long-term growth and profitability.",
      image: "https://site-assets.plasmic.app/8b433aaf03fee8407942f737f95e15e6.jpg",
    },
    {
      name: "Ben Siminocci",
      role: "Lead Prospector & Geologist",
      description:
        "Known for his legendary 'Golden Eye' — an unparalleled talent for identifying high-yield properties rich in gold and silver.",
      image: "/rugged-male-geologist-prospector-portrait-outdoors.jpg",
    },
  ]

  return (
    <section id="founders" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase">The Experts</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">Meet the Founders</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A team united by passion, expertise, and an unwavering commitment to unlocking the earth's hidden treasures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <CardContent className="p-6 relative -mt-12">
                <div className="bg-card rounded-lg p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{founder.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{founder.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
