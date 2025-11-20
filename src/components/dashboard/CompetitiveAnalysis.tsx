import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const mindshareData = [
  { name: "L'Oréal", pressMentions: 40, speakerSlots: 0, years: 9 },
  { name: "LVMH", pressMentions: 0, speakerSlots: 70, years: 10 },
  { name: "Clarins", pressMentions: 0, speakerSlots: 0, years: 0 },
];

const investmentData = [
  { name: "L'Oréal", investmentMin: 500, investmentMax: 750, boothSizeMin: 800, boothSizeMax: 1200 },
  { name: "LVMH", investmentMin: 500, investmentMax: 1000, boothSizeMin: 3000, boothSizeMax: 3000 },
  { name: "Clarins", investmentMin: 350, investmentMax: 450, boothSizeMin: 30, boothSizeMax: 50 },
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
            L'Oréal: 40+ press mentions, 9 years | LVMH: 70+ speaker slots, 10 years (founding partner)
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
              <Bar dataKey="pressMentions" fill="hsl(var(--chart-1))" name="Press Mentions" radius={[8, 8, 0, 0]} />
              <Bar dataKey="speakerSlots" fill="hsl(var(--chart-2))" name="Speaker Slots" radius={[8, 8, 0, 0]} />
              <Bar dataKey="years" fill="hsl(var(--chart-3))" name="Years Present" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Clarins faces structural mindshare deficit without major commitments
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Investment & Booth Size Benchmark</h3>
          <p className="text-sm text-muted-foreground mb-4">
            L'Oréal: €500–750K, 800–1,200m² | LVMH: €500K–1M+, 3,000m² | Clarins: €350–450K, 30–50m²
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
                formatter={(value, name, props) => {
                  if (name === "Investment Range (€K)") {
                    return `€${props.payload.investmentMin}–${props.payload.investmentMax}K`;
                  }
                  if (name === "Booth Size Range (m²)") {
                    return `${props.payload.boothSizeMin}–${props.payload.boothSizeMax}m²`;
                  }
                  return value;
                }}
              />
              <Legend />
              <Bar dataKey="investmentMax" fill="hsl(var(--chart-4))" name="Investment Range (€K)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="boothSizeMax" fill="hsl(var(--chart-5))" name="Booth Size Range (m²)" radius={[8, 8, 0, 0]} />
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
