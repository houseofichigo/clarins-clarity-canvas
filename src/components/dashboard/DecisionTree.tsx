import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { XCircle, ArrowDown, AlertTriangle } from "lucide-react";

export const DecisionTree = () => {
  const conditions = [
    "Multi-year €500K+/year investment",
    "Major strategic announcement",
    "CEO main-stage keynote",
    "Capital raise priority",
    "Tech recruitment urgency (100+ hires)",
  ];

  return (
    <Card className="p-8">
      <h3 className="text-h2 font-bold mb-6">Decision Tree: GO/NO-GO Framework</h3>
      <p className="text-muted-foreground mb-8">
        All five strategic conditions must be met for a GO decision. Current status: 0 of 5 conditions satisfied.
      </p>

      <div className="space-y-6">
        {/* Decision Flow */}
        <div className="flex flex-col items-center gap-4">
          {conditions.map((condition, idx) => (
            <div key={idx} className="w-full">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-destructive/5 border-2 border-destructive/20">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
                  <XCircle className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{condition}</p>
                  <p className="text-sm text-destructive mt-1">NOT MET</p>
                </div>
                <Badge variant="destructive">Condition {idx + 1}</Badge>
              </div>
              {idx < conditions.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Verdict */}
        <div className="mt-8 p-6 rounded-lg bg-destructive/10 border-2 border-destructive/30">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive flex items-center justify-center">
              <AlertTriangle className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold text-destructive mb-2">FINAL VERDICT: NO-GO</h4>
              <p className="text-foreground">
                Zero strategic conditions met. VivaTech requires fundamental restructuring or long-term commitment to become viable.
              </p>
            </div>
          </div>
        </div>

        {/* What Would Change This */}
        <div className="mt-6 p-5 rounded-lg bg-muted/30 border border-border">
          <h4 className="font-semibold text-foreground mb-3">What Would Need to Change for GO Decision?</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Multi-year commitment at €500K+ annually with confirmed strategic announcements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Guaranteed CEO keynote slot + major product launch or innovation showcase</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Beauty audience composition &gt;20% AND cost-per-lead &lt;€15K threshold</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Proven ROI &gt;3x with 100+ qualified tech talent hires annually</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};
