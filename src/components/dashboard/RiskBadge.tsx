import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  level: "high" | "medium" | "low";
  className?: string;
}

export const RiskBadge = ({ level, className }: RiskBadgeProps) => {
  const config = {
    high: {
      label: "High Risk",
      variant: "destructive" as const,
      color: "bg-destructive text-destructive-foreground",
    },
    medium: {
      label: "Medium Risk",
      variant: "secondary" as const,
      color: "bg-warning text-warning-foreground",
    },
    low: {
      label: "Low Risk",
      variant: "secondary" as const,
      color: "bg-success text-white",
    },
  };

  const { label, color } = config[level];

  return (
    <Badge className={cn(color, "font-semibold", className)}>
      {label}
    </Badge>
  );
};
