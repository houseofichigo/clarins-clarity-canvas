import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Calculator } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CalculationStep {
  label: string;
  formula?: string;
  value: string;
  explanation?: string;
}

interface CalculationPanelProps {
  title: string;
  steps: CalculationStep[];
  assumptions?: string[];
}

export const CalculationPanel = ({
  title,
  steps,
  assumptions,
}: CalculationPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mt-4 overflow-hidden border-primary/20">
      <Button
        variant="ghost"
        className="w-full p-4 flex items-center justify-between hover:bg-primary/5"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            View Calculation: {title}
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </Button>

      {isExpanded && (
        <div className="p-4 pt-0 space-y-4">
          <div className="space-y-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-3 bg-muted/30 rounded-md border border-border"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <div className="text-xs font-medium text-muted-foreground mb-1">
                      Step {idx + 1}: {step.label}
                    </div>
                    {step.formula && (
                      <div className="font-mono text-xs bg-card p-2 rounded border border-border mb-2">
                        {step.formula}
                      </div>
                    )}
                    <div className="text-sm font-semibold text-foreground">
                      = {step.value}
                    </div>
                  </div>
                </div>
                {step.explanation && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {step.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>

          {assumptions && assumptions.length > 0 && (
            <div className="p-3 bg-info/5 border border-info/20 rounded-md">
              <div className="text-xs font-semibold text-info mb-2">
                Key Assumptions:
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                {assumptions.map((assumption, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-info">•</span>
                    <span>{assumption}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
