import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp, TrendingDown, TrendingUp } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { RiskBadge } from "./RiskBadge";
import { MethodologyTooltip } from "./MethodologyTooltip";

interface KPICardProps {
  title: string;
  value: string;
  comparison?: string;
  trend: "up" | "down" | "neutral";
  context?: string;
  delta?: string;
  sparklineData?: number[];
  riskLevel?: "high" | "medium" | "low";
}

const KPICard = ({ title, value, comparison, trend, context, delta, sparklineData, riskLevel }: KPICardProps) => {
  const trendColor = trend === "down" ? "text-success" : trend === "up" ? "text-destructive" : "text-muted-foreground";
  const TrendIcon = trend === "down" ? TrendingDown : trend === "up" ? TrendingUp : ArrowDown;
  
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover-scale border-l-4 border-l-primary/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative space-y-3">
        <div className="flex items-start justify-between">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{title}</p>
          {riskLevel && <RiskBadge level={riskLevel} />}
        </div>
        
        <div className="flex items-baseline gap-3">
          <p className="text-4xl font-bold text-foreground">{value}</p>
          {delta && (
            <div className={`flex items-center gap-1 text-lg font-semibold ${trendColor}`}>
              <TrendIcon className="h-5 w-5" />
              <span>{delta}</span>
            </div>
          )}
        </div>
        
        {comparison && (
          <div className={`flex items-center gap-2 text-sm ${trendColor}`}>
            <TrendIcon className="h-4 w-4" />
            <span className="font-medium">{comparison}</span>
          </div>
        )}
        
        {sparklineData && sparklineData.length > 0 && (
          <div className="h-12 -mx-2 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData.map((value, index) => ({ index, value }))}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={trend === "up" ? "hsl(var(--destructive))" : "hsl(var(--success))"} 
                  strokeWidth={2} 
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
        
        {context && (
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{context}</p>
        )}
        
        <div className="mt-3 pt-3 border-t border-border">
          <MethodologyTooltip 
            title={title}
            methodology={`Calculated based on comparative analysis of VivaTech vs beauty event portfolio metrics. ${context || ''}`}
            sources={["Clarins VivaTech Strategic Report 2024", "Industry benchmarking data"]}
          />
        </div>
      </div>
    </Card>
  );
};

export const KPICards = () => {
  return (
    <div id="kpi-overview" className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-h1 font-bold text-foreground mb-2">Strategic KPIs Overview</h2>
        <p className="text-muted-foreground">
          Key performance indicators reveal significant gaps across all critical dimensions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Beauty Audience Gap"
          value="2,000–3,000"
          delta="150–250x"
          comparison="vs 255,500 at Cosmoprof"
          trend="up"
          context="150–250x fewer qualified buyers"
          sparklineData={[2500, 2400, 2600, 2300, 2500]}
          riskLevel="high"
        />
        
        <KPICard
          title="Cost per Qualified Lead"
          value="€29–56K"
          delta="52x"
          comparison="vs €2.5–4K at beauty events"
          trend="up"
          context="52x cost premium at VivaTech"
          sparklineData={[42, 45, 47, 50, 52]}
          riskLevel="high"
        />
        
        <KPICard
          title="ROI Corridor"
          value="0.1–2.5x"
          delta="-60%"
          comparison="vs 3–5x at beauty events"
          trend="up"
          context="Below industry benchmark"
          sparklineData={[0.5, 0.8, 1.2, 1.5, 2.0]}
          riskLevel="high"
        />
        
        <KPICard
          title="Mindshare Gap"
          value="5–10"
          delta="10x"
          comparison="vs 75–115 mentions"
          trend="up"
          context="Press mentions projected"
          sparklineData={[5, 6, 7, 8, 9]}
          riskLevel="high"
        />
        
        <KPICard
          title="Impression Gap"
          value="8–15M"
          delta="8–15x"
          comparison="vs 117–235M alternative"
          trend="up"
          context="8–15x lower reach"
          sparklineData={[10, 11, 12, 13, 14]}
          riskLevel="high"
        />
        
        <KPICard
          title="Budget Efficiency"
          value="180–300x"
          delta="250x"
          comparison="Cost premium per attendee"
          trend="up"
          context="Versus beauty event portfolio"
          sparklineData={[180, 200, 220, 250, 280]}
          riskLevel="high"
        />
        
        <KPICard
          title="Innovation Fit Score"
          value="6.2/10"
          delta="+3.2"
          comparison="vs 9.4/10 at beauty events"
          trend="down"
          context="Better alignment with beauty audiences"
          sparklineData={[6.0, 6.1, 6.2, 6.3, 6.4]}
          riskLevel="medium"
        />
        
        <KPICard
          title="Confidence Level"
          value="80%"
          comparison="With uncertainty thresholds"
          trend="neutral"
          context="Data-backed decision framework"
          sparklineData={[78, 79, 80, 80, 80]}
          riskLevel="low"
        />
      </div>
    </div>
  );
};
