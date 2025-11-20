import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingDown, TrendingUp } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  comparison?: string;
  trend: "up" | "down" | "neutral";
  context?: string;
}

const KPICard = ({ title, value, comparison, trend, context }: KPICardProps) => {
  const trendColor = trend === "down" ? "text-success" : trend === "up" ? "text-destructive" : "text-muted-foreground";
  const TrendIcon = trend === "down" ? TrendingDown : trend === "up" ? TrendingUp : ArrowDown;
  
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
        {comparison && (
          <div className={`flex items-center gap-2 text-sm ${trendColor}`}>
            <TrendIcon className="h-4 w-4" />
            <span className="font-medium">{comparison}</span>
          </div>
        )}
        {context && (
          <p className="text-xs text-muted-foreground mt-2">{context}</p>
        )}
      </div>
    </Card>
  );
};

export const KPICards = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Strategic KPIs Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Beauty Audience Gap"
          value="2,000–3,000"
          comparison="vs 255,500 at Cosmoprof"
          trend="up"
          context="150–250x fewer qualified buyers"
        />
        
        <KPICard
          title="Cost per Qualified Lead"
          value="€29–56K"
          comparison="vs €2.5–4K at beauty events"
          trend="up"
          context="52x cost premium at VivaTech"
        />
        
        <KPICard
          title="ROI Corridor"
          value="0.1–2.5x"
          comparison="vs 3–5x at beauty events"
          trend="up"
          context="Below industry benchmark"
        />
        
        <KPICard
          title="Mindshare Gap"
          value="5–10"
          comparison="vs 75–115 mentions"
          trend="up"
          context="Press mentions projected"
        />
        
        <KPICard
          title="Impression Gap"
          value="8–15M"
          comparison="vs 117–235M alternative"
          trend="up"
          context="8–15x lower reach"
        />
        
        <KPICard
          title="Budget Efficiency"
          value="180–300x"
          comparison="Cost premium per attendee"
          trend="up"
          context="Versus beauty event portfolio"
        />
        
        <KPICard
          title="Innovation Fit Score"
          value="6.2/10"
          comparison="vs 9.4/10 at beauty events"
          trend="down"
          context="Better alignment with beauty audiences"
        />
        
        <KPICard
          title="Confidence Level"
          value="80%"
          comparison="With uncertainty thresholds"
          trend="neutral"
          context="Data-backed decision framework"
        />
      </div>
    </div>
  );
};
