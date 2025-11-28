import { MessageSquare, FileText, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'langflow-chat': any;
    }
  }
}

export function InvestorPortal() {
  const features = [
    {
      icon: FileText,
      title: "Geological Reports",
      description: "Access comprehensive geological surveys and analysis",
    },
    {
      icon: BarChart3,
      title: "Assay Data",
      description: "Review verified mineral content and extraction estimates",
    },
    {
      icon: MessageSquare,
      title: "Direct Support",
      description: "Get answers to your investment questions instantly",
    },
  ]

  return (
    <section id="portal" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm tracking-widest uppercase">Due Diligence</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Investor Due Diligence
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our AI-powered investor portal provides instant access to all the documentation and data you need to make
              informed investment decisions.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Access Investor Portal</Button>
          </div>

          <Card className="bg-secondary border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">AI Investment Assistant</h4>
                  <p className="text-muted-foreground text-sm">Online • Ready to assist</p>
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 mb-4">
                {/* @ts-ignore */}
                <langflow-chat
                  window_title="Meet Pete Currington"
                  flow_id="b704bedd-86cd-4e93-9e10-ebab5790af8e"
                  host_url="https://rag.geomineralscience.com">
                </langflow-chat>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
