import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SensitivityScenario {
  label: string;
  value: string;
  impact: string;
}

interface SensitivityPanelProps {
  title: string;
  baseCase: string;
  scenarios: SensitivityScenario[];
  decisionThreshold?: string;
}

export const SensitivityPanel = ({
  title,
  baseCase,
  scenarios,
  decisionThreshold,
}: SensitivityPanelProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mt-4 overflow-hidden border-info/30">
      <Button
        variant="ghost"
        className="w-full p-4 flex items-center justify-between hover:bg-info/5"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground">
            Sensitivity Analysis: {title}
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </Button>

      {isExpanded && (
        <div className="p-4 pt-0 space-y-3">
          <div className="p-3 bg-muted/50 rounded-md">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-muted-foreground">
                Base Case
              </span>
            </div>
            <div className="text-sm font-semibold text-foreground">
              {baseCase}
            </div>
          </div>

          <div className="space-y-2">
            {scenarios.map((scenario, idx) => (
              <div
                key={idx}
                className="p-3 bg-card border border-border rounded-md"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-foreground">
                    {scenario.label}
                  </span>
                  <span className="text-xs font-semibold text-info">
                    {scenario.value}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{scenario.impact}</p>
              </div>
            ))}
          </div>

          {decisionThreshold && (
            <div className="p-3 bg-warning/10 border border-warning/30 rounded-md">
              <div className="text-xs font-medium text-warning mb-1">
                Decision Threshold
              </div>
              <p className="text-xs text-foreground">{decisionThreshold}</p>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
