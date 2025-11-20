import { Card } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Risk {
  name: string;
  description: string;
}

export const RiskMatrix = () => {
  const topRisks: Risk[] = [
    {
      name: "Low ROI",
      description: "0.1–2.5x return vs 3–5x target",
    },
    {
      name: "Audience Mismatch",
      description: "150–250x fewer qualified buyers",
    },
    {
      name: "Cost Inefficiency",
      description: "180–300x higher cost per attendee",
    },
  ];

  return (
    <Card className="p-6 border-l-4 bg-destructive/5 border-destructive/20">
      <div className="flex items-start gap-4">
        <div className={cn("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-destructive/10")}>
          <AlertTriangle className="h-5 w-5 text-destructive" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">Critical Risk Factors</h3>
          <p className="text-sm text-muted-foreground mb-4">
            VivaTech presents high-likelihood, high-impact risks across strategic dimensions.
          </p>
          <div className="space-y-3">
            {topRisks.map((risk, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-destructive mt-1.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{risk.name}</p>
                  <p className="text-xs text-muted-foreground">{risk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
