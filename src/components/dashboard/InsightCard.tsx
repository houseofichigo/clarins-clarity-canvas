import { Card } from "@/components/ui/card";
import { LightbulbIcon, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  type: "insight" | "impact" | "action";
  title: string;
  content: string;
  className?: string;
}

export const InsightCard = ({ type, title, content, className }: InsightCardProps) => {
  const config = {
    insight: {
      icon: LightbulbIcon,
      bgColor: "bg-info/5",
      borderColor: "border-info/20",
      iconColor: "text-info",
      iconBg: "bg-info/10",
    },
    impact: {
      icon: AlertCircle,
      bgColor: "bg-warning/5",
      borderColor: "border-warning/20",
      iconColor: "text-warning",
      iconBg: "bg-warning/10",
    },
    action: {
      icon: ArrowRight,
      bgColor: "bg-success/5",
      borderColor: "border-success/20",
      iconColor: "text-success",
      iconBg: "bg-success/10",
    },
  };

  const { icon: Icon, bgColor, borderColor, iconColor, iconBg } = config[type];

  return (
    <Card className={cn("p-5 border-l-4", bgColor, borderColor, className)}>
      <div className="flex items-start gap-4">
        <div className={cn("flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center", iconBg)}>
          <Icon className={cn("h-5 w-5", iconColor)} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
        </div>
      </div>
    </Card>
  );
};
