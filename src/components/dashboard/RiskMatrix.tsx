import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Risk {
  name: string;
  likelihood: number; // 1-5
  impact: number; // 1-5
  description: string;
}

export const RiskMatrix = () => {
  const risks: Risk[] = [
    {
      name: "Low ROI",
      likelihood: 5,
      impact: 5,
      description: "0.1–2.5x return vs 3–5x target",
    },
    {
      name: "Audience Mismatch",
      likelihood: 5,
      impact: 4,
      description: "150–250x fewer qualified buyers",
    },
    {
      name: "Cost Inefficiency",
      likelihood: 5,
      impact: 4,
      description: "180–300x higher cost per attendee",
    },
    {
      name: "Mindshare Deficit",
      likelihood: 4,
      impact: 3,
      description: "Dominated by L'Oréal & LVMH presence",
    },
    {
      name: "Limited Visibility",
      likelihood: 4,
      impact: 3,
      description: "1–2 months vs 6–12 month alternative",
    },
  ];

  const getRiskColor = (likelihood: number, impact: number) => {
    const score = likelihood * impact;
    if (score >= 15) return "bg-destructive";
    if (score >= 9) return "bg-warning";
    return "bg-success";
  };

  const getRiskLevel = (likelihood: number, impact: number) => {
    const score = likelihood * impact;
    if (score >= 15) return "Critical";
    if (score >= 9) return "High";
    return "Medium";
  };

  return (
    <Card className="p-8">
      <h3 className="text-h2 font-bold mb-6">Risk Assessment Matrix</h3>
      <p className="text-muted-foreground mb-8">
        VivaTech presents multiple high-likelihood, high-impact risks across strategic dimensions.
      </p>

      {/* Matrix Grid */}
      <div className="mb-8">
        <div className="grid grid-cols-6 gap-2 mb-2">
          <div className="col-span-1" />
          <div className="col-span-5 text-center text-xs font-semibold text-muted-foreground">
            Impact →
          </div>
        </div>
        
        <div className="grid grid-cols-6 gap-2">
          {/* Y-axis label */}
          <div className="flex items-center justify-center">
            <div className="text-xs font-semibold text-muted-foreground -rotate-90 whitespace-nowrap">
              Likelihood ↑
            </div>
          </div>
          
          {/* Matrix cells */}
          <div className="col-span-5 grid grid-rows-5 gap-2">
            {[5, 4, 3, 2, 1].map((likelihood) => (
              <div key={likelihood} className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((impact) => {
                  const risk = risks.find((r) => r.likelihood === likelihood && r.impact === impact);
                  const cellColor = getRiskColor(likelihood, impact);
                  
                  return (
                    <div
                      key={`${likelihood}-${impact}`}
                      className={`aspect-square rounded-lg border-2 flex items-center justify-center text-xs font-medium text-white ${cellColor} ${
                        risk ? "border-white" : "border-border opacity-20"
                      } relative group cursor-pointer transition-all hover:scale-105`}
                    >
                      {risk && (
                        <>
                          <span className="text-center px-1 leading-tight">{risk.name}</span>
                          <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-3 bg-card border border-border rounded-lg shadow-xl z-10">
                            <p className="text-xs font-semibold text-foreground mb-1">{risk.name}</p>
                            <p className="text-xs text-muted-foreground">{risk.description}</p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk List */}
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground mb-4">Identified Risks</h4>
        {risks.map((risk, idx) => (
          <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border">
            <Badge className={getRiskColor(risk.likelihood, risk.impact) + " text-white"}>
              {getRiskLevel(risk.likelihood, risk.impact)}
            </Badge>
            <div className="flex-1">
              <h5 className="font-semibold text-foreground mb-1">{risk.name}</h5>
              <p className="text-sm text-muted-foreground">{risk.description}</p>
              <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                <span>Likelihood: {risk.likelihood}/5</span>
                <span>Impact: {risk.impact}/5</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
