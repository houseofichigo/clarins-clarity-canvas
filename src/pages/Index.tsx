import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICards } from "@/components/dashboard/KPICards";
import { ComparisonCharts } from "@/components/dashboard/ComparisonCharts";
import { GOConditionsMatrix } from "@/components/dashboard/GOConditionsMatrix";
import { CompetitiveAnalysis } from "@/components/dashboard/CompetitiveAnalysis";
import { AlternativeStrategy } from "@/components/dashboard/AlternativeStrategy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <KPICards />
      <ComparisonCharts />
      <GOConditionsMatrix />
      <CompetitiveAnalysis />
      <AlternativeStrategy />
      
      <footer className="border-t border-border mt-12 py-6">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            Clarins VivaTech 2025 Strategic Decision Intelligence Dashboard · 
            Confidence Level: 80% · Data-Backed Decision Framework
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
