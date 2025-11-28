"use client"

import { MessageSquare, FileText, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function InvestorPortal() {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, {role: 'user', content: userMessage}])
    setLoading(true)
    try {
      const response = await fetch('https://rag.geomineralscience.com/api/v1/run/b704bedd-86cd-4e93-9e10-ebab5790af8e', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: userMessage})
      })
      const data = await response.json()
      const aiMessage = data.outputs?.[0]?.outputs?.[0]?.results?.message?.data?.text || data.message || 'Sorry, I could not process that.'
      setMessages(prev => [...prev, {role: 'assistant', content: aiMessage}])
    } catch (error) {
      setMessages(prev => [...prev, {role: 'assistant', content: 'Error connecting to AI assistant.'}])
    }
    setLoading(false)
  }

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

              <div className="bg-background rounded-lg p-6 mb-4 max-h-64 overflow-y-auto">
                {messages.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    Chat with our AI Agent to review geological reports, assay data, and project files instantly.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <div className="flex justify-start">
                        <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg">
                          Thinking...
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about our investment opportunity..."
                  className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={loading}
                />
                <Button onClick={sendMessage} disabled={loading} className="bg-primary text-primary-foreground hover:bg-primary/90 px-4">
                  <MessageSquare className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
