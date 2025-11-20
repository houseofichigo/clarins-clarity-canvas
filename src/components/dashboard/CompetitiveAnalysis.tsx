import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const mindshareData = [
  { name: "L'Oréal", mentions: 40, presence: 9 },
  { name: "LVMH", mentions: 70, presence: 12 },
  { name: "Clarins", mentions: 0, presence: 0 },
];

const investmentData = [
  { name: "L'Oréal", investment: 625, size: 1000 },
  { name: "LVMH", investment: 750, size: 3000 },
  { name: "Clarins", investment: 400, size: 40 },
];

const innovationFitData = [
  {
    pillar: "T.R.U.S.T.",
    vivatech: 8,
    beauty: 10,
  },
  {
    pillar: "Regenerative Agriculture",
    vivatech: 5,
    beauty: 10,
  },
  {
    pillar: "CLARA AI",
    vivatech: 7,
    beauty: 9,
  },
  {
    pillar: "Dassault Partnership",
    vivatech: 7,
    beauty: 9,
  },
  {
    pillar: "Sustainability",
    vivatech: 4,
    beauty: 9,
  },
];

export const CompetitiveAnalysis = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Competitive Landscape & Innovation Fit</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Competitor Mindshare</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Press mentions & years of presence at VivaTech
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mindshareData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Legend />
              <Bar dataKey="mentions" fill="hsl(var(--chart-1))" name="Press Mentions" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Clarins faces structural mindshare deficit without major commitments
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Investment Benchmark</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Booth investment (€K) comparison
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Bar dataKey="investment" fill="hsl(var(--chart-4))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              5–10x scale disadvantage limits differentiation potential
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Innovation Pillar Fit</h3>
          <p className="text-sm text-muted-foreground mb-4">
            VivaTech vs Beauty Events audience alignment
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={innovationFitData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="pillar" stroke="hsl(var(--muted-foreground))" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 10]} stroke="hsl(var(--muted-foreground))" />
              <Radar name="VivaTech" dataKey="vivatech" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.3} />
              <Radar name="Beauty Events" dataKey="beauty" stroke="hsl(var(--chart-3))" fill="hsl(var(--chart-3))" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Authentic differentiation aligns better with beauty audiences
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
