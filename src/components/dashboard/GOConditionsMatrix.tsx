import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

const goConditions = [
  {
    condition: "Multi-year €500K+/year investment",
    status: false,
    rationale: "Current proposal is one-time €350–450K with no multi-year commitment",
  },
  {
    condition: "Major strategic announcement",
    status: false,
    rationale: "No product launch, capital raise, or market-moving news planned",
  },
  {
    condition: "CEO main-stage keynote",
    status: false,
    rationale: "No confirmed speaking slot; keynotes dominated by tech giants",
  },
  {
    condition: "Capital raise priority",
    status: false,
    rationale: "Clarins is not seeking venture capital or Series funding",
  },
  {
    condition: "Tech recruitment urgency (100+ hires)",
    status: false,
    rationale: "No aggressive tech talent acquisition campaign underway",
  },
];

const thresholds = [
  {
    metric: "Beauty Audience Threshold",
    required: "20–25%",
    actual: "~5%",
    gap: "4–5x below threshold",
  },
  {
    metric: "Cost-per-Lead Threshold",
    required: "< €15K",
    actual: "€29–56K",
    gap: "2–4x above threshold",
  },
  {
    metric: "Conversion Threshold",
    required: "> 25%",
    actual: "10–20%",
    gap: "5–15% below threshold",
  },
];

export const GOConditionsMatrix = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">GO-Decision Framework</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Strategic GO Conditions</h3>
          <p className="text-sm text-muted-foreground mb-6">
            None of the five strategic GO conditions are satisfied
          </p>

          <div className="space-y-4">
            {goConditions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border">
                <div className="flex-shrink-0 mt-1">
                  {item.status ? (
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center">
                      <X className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground mb-1">{item.condition}</p>
                  <p className="text-sm text-muted-foreground">{item.rationale}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-sm font-semibold text-destructive">
              Strategic Verdict: All GO conditions unmet — validates NO-GO recommendation
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Decision Thresholds</h3>
          <p className="text-sm text-muted-foreground mb-6">
            VivaTech must exceed 3 thresholds for viability; current metrics fall far below
          </p>

          <div className="space-y-4">
            {thresholds.map((item, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-muted/30 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium text-foreground">{item.metric}</p>
                  <Badge variant="destructive">Below Threshold</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Required</p>
                    <p className="font-semibold text-success">{item.required}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Actual</p>
                    <p className="font-semibold text-destructive">{item.actual}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Gap</p>
                    <p className="font-semibold text-foreground">{item.gap}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-sm font-semibold text-warning">
              Threshold Analysis: VivaTech requires 3–5x improvement across all metrics to become viable
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
