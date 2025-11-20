import { StickyNav } from "@/components/dashboard/StickyNav";
import { ExecutiveSummary } from "@/components/dashboard/ExecutiveSummary";
import { KPICards } from "@/components/dashboard/KPICards";
import { ComparisonCharts } from "@/components/dashboard/ComparisonCharts";
import { LeadQualityMetrics } from "@/components/dashboard/LeadQualityMetrics";
import { GOConditionsMatrix } from "@/components/dashboard/GOConditionsMatrix";
import { DecisionTree } from "@/components/dashboard/DecisionTree";
import { RiskMatrix } from "@/components/dashboard/RiskMatrix";
import { CompetitiveAnalysis } from "@/components/dashboard/CompetitiveAnalysis";
import { AlternativeStrategy } from "@/components/dashboard/AlternativeStrategy";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { ConfidenceMeter } from "@/components/dashboard/ConfidenceMeter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      
      {/* Section 1: Executive Summary */}
      <section id="executive-summary" className="print-page-break">
        <ExecutiveSummary />
      </section>
      
      {/* Section 2: Strategic KPIs */}
      <section id="kpi-overview" className="py-4">
        <KPICards />
        <div className="container mx-auto px-6 mt-8">
          <InsightCard 
            type="insight"
            title="What This Means"
            content="VivaTech exhibits structural inefficiencies across all critical metrics. The 150–250x audience gap and 180–300x cost premium create an insurmountable ROI challenge that cannot be overcome through execution improvements alone."
          />
        </div>
      </section>
      
      <div className="section-divider my-8" />
      
      {/* Section 3: ROI & Audience Analysis */}
      <section id="roi-analysis" className="py-4">
        <ComparisonCharts />
        <div className="container mx-auto px-6 mt-8">
          <InsightCard 
            type="impact"
            title="Why It Matters"
            content="ROI drives budget allocation decisions. VivaTech's 0.1–2.5x return (even in optimistic scenarios) falls significantly below the 3–5x benchmark, making it a poor investment compared to alternatives that consistently deliver superior returns."
          />
        </div>
      </section>
      
      <div className="container mx-auto px-6 py-8">
        <LeadQualityMetrics />
      </div>
      
      <div className="section-divider my-8" />
      
      {/* Section 4: Decision Framework */}
      <section id="decision-framework" className="container mx-auto px-6 py-8 print-page-break">
        <div className="mb-8">
          <h2 className="text-h1 font-bold text-foreground mb-2">Decision Framework & Risk Analysis</h2>
          <div className="space-y-3 text-muted-foreground max-w-4xl">
            <p>
              This section applies a structured decision-making framework to evaluate whether VivaTech 2025 meets the strategic and financial thresholds required for a GO decision. The analysis combines quantitative benchmarks (ROI, cost-per-attendee, audience reach) with qualitative factors (brand fit, competitive positioning, strategic alternatives) to provide a comprehensive assessment.
            </p>
            <p>
              The framework consists of three interconnected components: <span className="font-semibold text-foreground">GO Conditions Matrix</span> establishes the minimum criteria that must be met for participation; <span className="font-semibold text-foreground">Decision Tree</span> provides a logical evaluation pathway showing where VivaTech fails to meet threshold requirements; and <span className="font-semibold text-foreground">Risk Matrix</span> quantifies the likelihood and impact of strategic risks should Clarins proceed despite unfavorable conditions.
            </p>
            <p>
              This integrated analysis synthesizes insights from ROI performance (Section 3), competitive dynamics (Section 5), and alternative strategies (Section 6) to support a data-backed recommendation on this €350–450K investment decision.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <GOConditionsMatrix />
          <DecisionTree />
          <RiskMatrix />
        </div>
        
        <div className="mt-8">
          <InsightCard 
            type="action"
            title="Recommended Action"
            content="Proceed with NO-GO decision for VivaTech 2025. Redirect the €350–450K budget to the alternative beauty event portfolio, which delivers 3–5x ROI, 12+ months visibility, and access to 255K qualified buyers at 180–300x lower cost per attendee."
          />
        </div>
        
        <div className="mt-8 p-6 bg-card rounded-lg border border-border">
          <ConfidenceMeter value={80} label="Decision Confidence" />
          <p className="text-sm text-muted-foreground mt-3">
            Based on comprehensive data analysis, competitive benchmarking, and validated assumptions from industry sources.
          </p>
        </div>
      </section>
      
      <div className="section-divider my-8" />
      
      {/* Section 5: Competitive Analysis */}
      <section id="competitive" className="py-4">
        <CompetitiveAnalysis />
        <div className="container mx-auto px-6 mt-8">
          <InsightCard 
            type="insight"
            title="Competitive Context"
            content="L'Oréal and LVMH's decade-long presence with 5–10x larger investments creates an insurmountable mindshare barrier. Clarins cannot differentiate effectively with a 30–50m² booth competing against 800–3,000m² established footprints."
          />
        </div>
      </section>
      
      <div className="section-divider my-8" />
      
      {/* Section 6: Alternative Strategy */}
      <section id="alternative" className="py-4 print-page-break">
        <AlternativeStrategy />
        <div className="container mx-auto px-6 mt-8">
          <InsightCard 
            type="action"
            title="Strategic Outcome"
            content="The alternative portfolio delivers 5–15x performance improvement, sustained 12-month visibility, and €565K budget efficiency. This approach aligns with Clarins' authentic beauty innovation narrative while maximizing qualified buyer engagement and media reach."
          />
        </div>
      </section>
      
      <footer className="border-t border-border mt-12 py-8 no-print">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold text-foreground">
              Clarins VivaTech 2025 Strategic Decision Intelligence Dashboard
            </p>
            <p className="text-xs text-muted-foreground">
              Confidence Level: 80% · Data-Backed Decision Framework · Updated November 2024
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <span>Methodology: Comparative ROI Analysis</span>
              <span>·</span>
              <span>Sources: Industry Benchmarking Data</span>
              <span>·</span>
              <span>Validation: Multi-scenario Modeling</span>
            </div>
            <div className="mt-6">
              <a
                href="/references"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                View All References & Citations (228 Sources)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
