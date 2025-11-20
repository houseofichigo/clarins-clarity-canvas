import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, CheckCircle2, XCircle } from "lucide-react";

export const ExecutiveSummary = () => {
  return (
    <div className="w-full bg-gradient-to-br from-primary/5 via-background to-info/5 border-b border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 text-base px-4 py-2 border-gold text-gold font-semibold">
            Executive Summary
          </Badge>
          <h1 className="text-display font-bold text-foreground mb-3">
            VivaTech 2025 Strategic Decision
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven analysis reveals a clear strategic path forward
          </p>
        </div>

        {/* Three Decision Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* LEFT: NO-GO Recommendation */}
          <Card className="p-8 bg-card hover-scale shadow-xl border-2 border-destructive/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="h-8 w-8 text-destructive" />
                </div>
                <Badge variant="destructive" className="text-lg px-4 py-1.5">
                  NO-GO
                </Badge>
              </div>
              <h2 className="text-h1 font-bold text-foreground mb-3">
                Strategic Recommendation
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                VivaTech fails to meet all five strategic GO conditions and underperforms across critical metrics
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="text-foreground">0 of 5 GO conditions met</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="text-foreground">All thresholds below required</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span className="text-foreground">High-risk, low-return profile</span>
                </div>
              </div>
            </div>
          </Card>

          {/* CENTER: VivaTech Cost Estimate */}
          <Card className="p-8 bg-card hover-scale shadow-xl border-2 border-warning/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-warning/5 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-warning/10 flex items-center justify-center">
                  <TrendingDown className="h-8 w-8 text-warning" />
                </div>
                <Badge className="text-lg px-4 py-1.5 bg-warning text-white">
                  VivaTech Cost
                </Badge>
              </div>
              <h2 className="text-h1 font-bold text-foreground mb-3">
                VivaTech Investment
              </h2>
              <div className="mb-4">
                <div className="text-5xl font-bold text-warning mb-2">
                  €350–450K
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Estimated total investment for VivaTech 2025 participation
                </p>
              </div>
              <div className="space-y-2 mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-warning" />
                  <span className="text-foreground">€140–180 per qualified attendee</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-warning" />
                  <span className="text-foreground">Reaches 2,000–3,000 beauty professionals</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-warning" />
                  <span className="text-foreground">Expected ROI: 0.1–2.5x</span>
                </div>
              </div>
            </div>
          </Card>

          {/* RIGHT: Alternative ROI */}
          <Card className="p-8 bg-card hover-scale shadow-xl border-2 border-success/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
                <Badge className="text-lg px-4 py-1.5 bg-success text-white">
                  Recommended
                </Badge>
              </div>
              <h2 className="text-h1 font-bold text-foreground mb-3">
                Alternative Strategy
              </h2>
              <div className="mb-4">
                <div className="text-5xl font-bold text-success mb-2">
                  3–5x
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  ROI from beauty event portfolio vs 0.1–2.5x at VivaTech
                </p>
              </div>
              <div className="space-y-2 mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-foreground">5–15x better performance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-foreground">12+ months visibility</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-foreground">255K qualified buyers</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Insight Box */}
        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">!</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Executive Insight
              </h3>
              <p className="text-foreground leading-relaxed">
                VivaTech delivers <span className="font-bold text-primary">150–250x fewer qualified buyers</span> at{" "}
                <span className="font-bold text-primary">180–300x higher cost</span> per attendee. While the alternative portfolio requires 
                <span className="font-bold text-primary"> €10–220K additional budget</span>, it delivers dramatically better returns with 
                <span className="font-bold text-primary"> 3–5x ROI</span> and significantly lower cost per qualified lead (€0.59–0.78 vs €140–180). 
                <span className="font-bold text-primary"> Confidence Level: 80%</span> based on data-backed analysis.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
