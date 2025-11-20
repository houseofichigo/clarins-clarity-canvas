import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface DataQualityBadgeProps {
  type: "confirmed" | "estimated" | "modeled";
  className?: string;
}

export const DataQualityBadge = ({ type, className }: DataQualityBadgeProps) => {
  const config = {
    confirmed: {
      icon: CheckCircle2,
      label: "Confirmed",
      className: "bg-success/10 text-success border-success/30",
    },
    estimated: {
      icon: AlertTriangle,
      label: "Estimated",
      className: "bg-warning/10 text-warning border-warning/30",
    },
    modeled: {
      icon: Info,
      label: "Modeled",
      className: "bg-info/10 text-info border-info/30",
    },
  };

  const { icon: Icon, label, className: badgeClassName } = config[type];

  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-medium gap-1", badgeClassName, className)}
    >
      <Icon className="h-3 w-3" />
      {label}
    </Badge>
  );
};
