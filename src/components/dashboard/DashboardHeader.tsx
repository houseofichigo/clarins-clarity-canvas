import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clarinsLogo from "@/assets/clarins-logo.svg";

export const DashboardHeader = () => {
  return (
    <div className="w-full bg-card border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <img src={clarinsLogo} alt="Clarins" className="h-12" />
          <Badge variant="destructive" className="text-base px-4 py-2">
            Strategic Decision Intelligence · 2025
          </Badge>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            VivaTech 2025 Strategic Analysis Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Executive Decision Framework: Comprehensive ROI Modeling, Competitive Analysis & Strategic Alternatives
          </p>
        </div>
        
        <Card className="mt-6 bg-primary/5 border-primary/20 p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">!</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Strategic Recommendation: NO-GO
              </h3>
              <p className="text-foreground/90">
                Analysis reveals VivaTech delivers <span className="font-semibold">0.1–2.5x ROI</span> versus beauty events' proven <span className="font-semibold">3–5x ROI</span>. 
                Cost-per-qualified-attendee is <span className="font-semibold">180–300x higher</span>, reaching <span className="font-semibold">150–250x fewer</span> qualified buyers. 
                None of the five strategic GO conditions are met. Recommended alternative strategy delivers <span className="font-semibold">5–15x better performance</span> across all metrics.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
