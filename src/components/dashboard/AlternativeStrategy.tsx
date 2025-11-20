import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";

const impactData = [
  { metric: "Press Mentions", vivatech: 7, alternative: 95 },
  { metric: "Impressions (M)", vivatech: 11, alternative: 176 },
  { metric: "Qualified Leads", vivatech: 10, alternative: 115 },
  { metric: "Revenue (€K)", vivatech: 125, alternative: 2000 },
];

const budgetData = [
  { name: "Cosmoprof", value: 175, color: "hsl(var(--chart-1))" },
  { name: "PCD Paris", value: 100, color: "hsl(var(--chart-2))" },
  { name: "CLARA AI Tour", value: 100, color: "hsl(var(--chart-3))" },
  { name: "Thought Leadership", value: 50, color: "hsl(var(--chart-4))" },
  { name: "Influencer Campaign", value: 100, color: "hsl(var(--chart-5))" },
  { name: "Contingency", value: 40, color: "hsl(var(--chart-6))" },
];

const timeline = [
  { quarter: "Q1 2026", event: "PCD Paris", focus: "Packaging Innovation", investment: "€80–120K" },
  { quarter: "Q1 2026", event: "Cosmoprof", focus: "Global B2B Leads", investment: "€150–200K" },
  { quarter: "Q2 2026", event: "CLARA AI Tour", focus: "Tech Media Showcase", investment: "€80–120K" },
  { quarter: "Q2–Q4", event: "Sustainability Leadership", focus: "Thought Leadership", investment: "€40–60K" },
  { quarter: "Q3–Q4", event: "Influencer Campaign", focus: "Digital Amplification", investment: "€80–120K" },
];

export const AlternativeStrategy = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-h1 font-bold text-foreground mb-2">Alternative Strategy: 2026 Recommended Portfolio</h2>
        <p className="text-muted-foreground">Optimized budget allocation delivering 5–15x performance improvement across all metrics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Impact Comparison</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Alternative portfolio delivers 5–15x performance across all metrics
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={impactData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Legend />
              <Bar dataKey="vivatech" fill="hsl(var(--chart-1))" name="VivaTech" radius={[8, 8, 0, 0]} />
              <Bar dataKey="alternative" fill="hsl(var(--chart-3))" name="Alternative" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Budget Allocation</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Balanced spend optimizes ROI and sustained visibility (Total: €565K)
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">2026 Strategic Roadmap</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Sequenced, multi-channel approach sustains visibility and B2B acquisition all year
        </p>

        <div className="space-y-3">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 pb-6 last:pb-0">
              {/* Timeline Line */}
              {idx < timeline.length - 1 && (
                <div className="absolute left-3 top-8 w-0.5 h-full bg-gradient-to-b from-primary to-primary/20" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              
              <div className="flex items-start gap-4 p-5 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                <div className="flex-shrink-0">
                  <Badge variant="outline" className="font-mono text-xs group-hover:border-primary transition-colors">
                    {item.quarter}
                  </Badge>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.event}</h4>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground">{item.focus}</span>
                  </div>
                  <p className="text-sm font-medium text-gradient-primary">{item.investment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
          <p className="text-sm font-semibold text-success">
            Strategic Outcome: 12+ months sustained visibility vs VivaTech's 1–2 month spike
          </p>
        </div>
      </Card>
    </div>
  );
};
