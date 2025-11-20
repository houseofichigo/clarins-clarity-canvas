import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const conversionData = [
  { name: "VivaTech", rate: 15, min: 10, max: 20 },
  { name: "Cosmoprof", rate: 42.5, min: 35, max: 50 },
];

const costPerLeadData = [
  { name: "VivaTech", cost: 16, min: 12, max: 20, label: "€12–20K" },
  { name: "Cosmoprof", cost: 4.25, min: 3.5, max: 5, label: "€3.5–5K" },
];

const mediaDurationData = [
  { name: "VivaTech", months: 1.5, min: 1, max: 2 },
  { name: "Beauty Events", months: 9, min: 6, max: 12 },
];

export const LeadQualityMetrics = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Lead Quality & Media Impact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Conversion Rate Comparison</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Cosmoprof delivers 2–3x higher conversion probability
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: '%', position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
                formatter={(value, name, props) => {
                  if (name === "Conversion Rate (%)") {
                    return `${props.payload.min}–${props.payload.max}%`;
                  }
                  return value;
                }}
              />
              <Legend />
              <Bar dataKey="rate" fill="hsl(var(--chart-2))" name="Conversion Rate (%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Cost per Qualified Lead</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Beauty events deliver 3–4x lower cost per lead
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costPerLeadData}>
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
                  return props.payload.label;
                }}
              />
              <Bar dataKey="cost" fill="hsl(var(--chart-5))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Media Visibility Duration</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Beauty portfolio sustains 6–12 months vs 1–2 months
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mediaDurationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'Months', position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
                formatter={(value, name, props) => {
                  return `${props.payload.min}–${props.payload.max} months`;
                }}
              />
              <Legend />
              <Bar dataKey="months" fill="hsl(var(--chart-1))" name="Duration (Months)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};
