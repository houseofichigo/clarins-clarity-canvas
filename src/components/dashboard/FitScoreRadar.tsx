import { Card } from "@/components/ui/card";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from "recharts";

const fitData = [
  { dimension: "Investor Connectivity", importance: 8, capability: 3 },
  { dimension: "Tech Partnerships", importance: 7, capability: 4 },
  { dimension: "Competitive Visibility", importance: 6, capability: 2 },
  { dimension: "Market Expansion", importance: 5, capability: 3 },
  { dimension: "Employer Branding", importance: 4, capability: 5 },
  { dimension: "Consumer Engagement", importance: 9, capability: 2 },
];

export const FitScoreRadar = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">VivaTech Strategic Fit Score</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Importance to Clarins vs Current VivaTech Capability (0-10 scale)
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={fitData}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis 
            dataKey="dimension" 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            className="text-xs"
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 10]}
            stroke="hsl(var(--muted-foreground))"
          />
          <Radar
            name="Importance to Clarins"
            dataKey="importance"
            stroke="hsl(var(--chart-3))"
            fill="hsl(var(--chart-3))"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Radar
            name="VivaTech Capability"
            dataKey="capability"
            stroke="hsl(var(--chart-1))"
            fill="hsl(var(--chart-1))"
            fillOpacity={0.3}
            strokeWidth={2}
          />
          <Legend 
            wrapperStyle={{ paddingTop: "20px" }}
            iconType="circle"
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-lg">
        <p className="text-sm font-semibold text-warning">
          Gap Analysis: Average capability gap of 4.5 points across critical dimensions
        </p>
      </div>
    </Card>
  );
};
