import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { useState } from "react";
import { ScenarioToggle } from "./ScenarioToggle";

const costPerAttendeeData = [
  { name: "VivaTech", cost: 160, label: "€140–180" },
  { name: "Cosmoprof", cost: 0.69, label: "€0.59–0.78" },
];

const audienceSizeData = [
  { name: "VivaTech", size: 2500, label: "2,000–3,000" },
  { name: "Cosmoprof", size: 255500, label: "255,500" },
];

const roiData = {
  conservative: [
    { name: "VivaTech", roi: 0.1 },
    { name: "Cosmoprof", roi: 3.0 },
  ],
  "mid-range": [
    { name: "VivaTech", roi: 0.8 },
    { name: "Cosmoprof", roi: 4.0 },
  ],
  optimistic: [
    { name: "VivaTech", roi: 2.0 },
    { name: "Cosmoprof", roi: 5.0 },
  ],
};

const roiSensitivityData = {
  conservative: [
    { leads: 8, vivatech: 0.1, cosmoprof: 3.0 },
    { leads: 12, vivatech: 0.3, cosmoprof: 3.5 },
    { leads: 25, vivatech: 0.6, cosmoprof: 4.0 },
    { leads: 50, vivatech: 0.9, cosmoprof: 4.5 },
    { leads: 80, vivatech: 1.2, cosmoprof: 5.0 },
  ],
  "mid-range": [
    { leads: 8, vivatech: 0.3, cosmoprof: 3.2 },
    { leads: 12, vivatech: 0.8, cosmoprof: 3.7 },
    { leads: 25, vivatech: 1.2, cosmoprof: 4.2 },
    { leads: 50, vivatech: 1.5, cosmoprof: 4.7 },
    { leads: 80, vivatech: 1.8, cosmoprof: 5.2 },
  ],
  optimistic: [
    { leads: 8, vivatech: 0.5, cosmoprof: 3.5 },
    { leads: 12, vivatech: 1.0, cosmoprof: 4.0 },
    { leads: 25, vivatech: 1.5, cosmoprof: 4.5 },
    { leads: 50, vivatech: 2.0, cosmoprof: 5.0 },
    { leads: 80, vivatech: 2.5, cosmoprof: 5.5 },
  ],
};

export const ComparisonCharts = () => {
  const [scenario, setScenario] = useState<"conservative" | "mid-range" | "optimistic">("mid-range");

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">ROI & Audience Analysis</h2>
        <ScenarioToggle value={scenario} onValueChange={(v) => setScenario(v as any)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Cost per Qualified Attendee</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Beauty events deliver 180–300x greater cost efficiency
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costPerAttendeeData}>
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
              <Bar dataKey="cost" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Qualified Audience Size</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Cosmoprof reaches 150–250x more qualified buyers
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={audienceSizeData}>
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
              <Bar dataKey="size" fill="hsl(var(--chart-2))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">ROI Range Comparison</h3>
          <p className="text-sm text-muted-foreground mb-4">
            VivaTech underperforms even in optimistic scenarios
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={roiData[scenario]}>
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
              <Bar dataKey="roi" fill="hsl(var(--chart-3))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">ROI Sensitivity Model</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Qualified leads to ROI conversion trajectory
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={roiSensitivityData[scenario]}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="leads" stroke="hsl(var(--muted-foreground))" label={{ value: 'Qualified Leads', position: 'insideBottom', offset: -5 }} />
              <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: 'ROI Multiple', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)"
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="vivatech" stroke="hsl(var(--chart-1))" strokeWidth={2} name="VivaTech" />
              <Line type="monotone" dataKey="cosmoprof" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Cosmoprof" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};
