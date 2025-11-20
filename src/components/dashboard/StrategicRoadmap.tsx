import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Target, AlertTriangle, TrendingUp, Calendar, CheckCircle } from "lucide-react";

const roadmap = [
  { 
    quarter: "Q1 2026", 
    month: "January-April",
    events: [
      { name: "PCD Paris Activation", focus: "Sustainability & Packaging Innovation", investment: "€80-120K" },
      { name: "Pre-Cosmoprof Media Build-up", focus: "B2B Thought Leadership", investment: "€20-30K" }
    ]
  },
  { 
    quarter: "Q1 2026", 
    month: "March",
    events: [
      { name: "Cosmoprof 2026 (Flagship)", focus: "Global B2B Lead Generation", investment: "€150-200K" }
    ]
  },
  { 
    quarter: "Q2 2026", 
    month: "April-July",
    events: [
      { name: "Global PR Amplification", focus: "Multi-channel Content Distribution", investment: "€50-70K" },
      { name: "CLARA AI Media Tour", focus: "Tech Press & Digital Innovation", investment: "€80-120K" }
    ]
  },
  { 
    quarter: "Q3-Q4 2026", 
    month: "July-December",
    events: [
      { name: "Owned Innovation Summit", focus: "Customer & Partner Engagement", investment: "€60-90K" },
      { name: "Digital Transformation Storytelling", focus: "Long-term Brand Positioning", investment: "€40-60K" }
    ]
  }
];

const kpis = [
  { metric: "Beauty Press Coverage", target: "95+ articles", color: "text-chart-3" },
  { metric: "B2B Qualified Leads", target: "115+ leads", color: "text-chart-2" },
  { metric: "Event-Derived Partnerships", target: "8-12 partnerships", color: "text-chart-4" },
  { metric: "Brand Sentiment", target: "+25% positive shift", color: "text-success" },
  { metric: "Recruitment Pipeline Quality", target: "40+ candidates", color: "text-chart-5" },
  { metric: "Cost per Lead", target: "€3,500-5,000", color: "text-chart-1" },
];

const risks = [
  { risk: "Budget Overrun", likelihood: "Medium", impact: "High", mitigation: "Contingency fund (€40K) + phased activation" },
  { risk: "Differentiation Challenge", likelihood: "Low", impact: "Medium", mitigation: "Unique beauty-tech narrative + owned events" },
  { risk: "Competitor Overshadowing", likelihood: "Low", impact: "Medium", mitigation: "Targeted niche positioning vs mass-market approach" },
  { risk: "Internal Capability Gaps", likelihood: "Medium", impact: "Medium", mitigation: "Agency partnerships + training programs" },
  { risk: "Message Clarity", likelihood: "Low", impact: "High", mitigation: "Unified narrative framework + stakeholder alignment" },
];

const getRiskColor = (level: string) => {
  switch (level) {
    case "High": return "bg-destructive/20 border-destructive text-destructive";
    case "Medium": return "bg-warning/20 border-warning text-warning";
    case "Low": return "bg-success/20 border-success text-success";
    default: return "bg-muted border-border text-muted-foreground";
  }
};

export const StrategicRoadmap = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="text-h1 font-bold text-foreground">Strategic Roadmap & Next Steps</h2>
        </div>
        <p className="text-muted-foreground">12-month implementation plan with KPI tracking and risk mitigation framework</p>
      </div>

      {/* 12-Month Timeline */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">2026 Multi-Event Activation Timeline</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Sequenced activation plan delivering sustained visibility and measurable business outcomes
        </p>
        <div className="space-y-4">
          {roadmap.map((phase, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Badge variant="outline" className="font-mono text-xs min-w-[5rem] justify-center">
                    {phase.quarter}
                  </Badge>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-3">{phase.month}</p>
                  <div className="space-y-3">
                    {phase.events.map((event, eventIdx) => (
                      <div 
                        key={eventIdx} 
                        className="p-4 rounded-lg bg-gradient-to-r from-muted/40 to-muted/10 border border-border hover:border-primary/30 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <CheckCircle className="h-4 w-4 text-primary" />
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {event.name}
                              </h4>
                            </div>
                            <p className="text-sm text-muted-foreground">{event.focus}</p>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary" className="font-semibold">
                              {event.investment}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {idx < roadmap.length - 1 && (
                <div className="ml-[5.5rem] mt-2 mb-2 h-8 w-0.5 bg-gradient-to-b from-primary to-primary/20" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
          <p className="text-sm font-semibold text-success">
            Timeline Outcome: 12+ months sustained visibility vs VivaTech's 1-2 month spike | Total Investment: €430-565K
          </p>
        </div>
      </Card>

      {/* KPI Dashboard */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">KPI Tracking Dashboard</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Key performance indicators for measuring strategic success post-decision
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {kpis.map((kpi, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-lg border border-border bg-gradient-to-br from-card to-muted/20 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-2">{kpi.metric}</p>
                  <p className={`text-lg font-bold ${kpi.color}`}>{kpi.target}</p>
                </div>
                <TrendingUp className={`h-5 w-5 ${kpi.color}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Measurement Framework:</span> Quarterly reviews with stakeholder reporting | Real-time dashboard tracking | ROI validation at 6 & 12 months
          </p>
        </div>
      </Card>

      {/* Risk Heatmap */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">Risk Assessment & Mitigation</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Comprehensive risk analysis with proactive mitigation strategies
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-sm">Risk Factor</th>
                <th className="text-center py-3 px-4 font-semibold text-sm">Likelihood</th>
                <th className="text-center py-3 px-4 font-semibold text-sm">Impact</th>
                <th className="text-left py-3 px-4 font-semibold text-sm">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((risk, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-muted/20">
                  <td className="py-3 px-4 font-medium">{risk.risk}</td>
                  <td className="text-center py-3 px-4">
                    <Badge variant="outline" className={`${getRiskColor(risk.likelihood)} min-w-[4rem]`}>
                      {risk.likelihood}
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant="outline" className={`${getRiskColor(risk.impact)} min-w-[4rem]`}>
                      {risk.impact}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{risk.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-info/10 border border-info/20 rounded-lg">
          <p className="text-sm font-semibold text-info">
            Overall Risk Profile: Low-Medium | Most risks mitigated through strategic planning and phased execution
          </p>
        </div>
      </Card>
    </div>
  );
};
