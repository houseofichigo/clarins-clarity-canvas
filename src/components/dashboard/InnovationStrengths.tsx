import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target } from "lucide-react";

const innovationAssets = [
  { asset: "CLARA AI Bot", sustainability: 6, digital: 9, aiExperience: 10, productRD: 7, customerExp: 9 },
  { asset: "TRASCE Program", sustainability: 10, digital: 5, aiExperience: 4, productRD: 8, customerExp: 6 },
  { asset: "Dassault Partnership", sustainability: 7, digital: 10, aiExperience: 7, productRD: 9, customerExp: 5 },
  { asset: "Regenerative Farming", sustainability: 10, digital: 4, aiExperience: 3, productRD: 9, customerExp: 7 },
];

const venueMapping = [
  { innovation: "CLARA AI bot", bestVenue: "PR / Owned Event / Selective tech press", score: 9 },
  { innovation: "TRASCE", bestVenue: "PCD / Sustainability forums", score: 10 },
  { innovation: "Regenerative Agriculture", bestVenue: "Beauty press / Owned Summit", score: 9 },
  { innovation: "Manufacturing 4.0", bestVenue: "PCD / Industry events", score: 8 },
  { innovation: "Prestige heritage", bestVenue: "Cosmoprof", score: 10 },
];


export const InnovationStrengths = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          <h2 className="text-h1 font-bold text-foreground">Clarins Innovation Narrative Strengths</h2>
        </div>
        <p className="text-muted-foreground">Positioning Clarins' unique assets and identifying optimal showcase venues</p>
      </div>

      {/* Innovation Asset Heatmap */}
      <Card className="p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Innovation Asset Strength Heatmap
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Scoring Clarins' key innovation pillars across 5 strategic dimensions (0-10 scale)
        </p>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-sm">Innovation Asset</th>
                <th className="text-center py-3 px-4 font-semibold text-sm">Sustainability</th>
                <th className="text-center py-3 px-4 font-semibold text-sm">Digital Mfg.</th>
                <th className="text-center py-3 px-4 font-semibold text-sm">AI Experience</th>
                <th className="text-center py-3 px-4 font-semibold text-sm">Product R&D</th>
                <th className="text-center py-3 px-4 font-semibold text-sm">Customer Exp.</th>
              </tr>
            </thead>
            <tbody>
              {innovationAssets.map((asset, idx) => (
                <tr key={idx} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-3 px-4 font-medium">{asset.asset}</td>
                  <td className="text-center py-3 px-4">
                    <Badge variant={asset.sustainability >= 8 ? "default" : "secondary"} className="min-w-[2.5rem]">
                      {asset.sustainability}
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant={asset.digital >= 8 ? "default" : "secondary"} className="min-w-[2.5rem]">
                      {asset.digital}
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant={asset.aiExperience >= 8 ? "default" : "secondary"} className="min-w-[2.5rem]">
                      {asset.aiExperience}
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant={asset.productRD >= 8 ? "default" : "secondary"} className="min-w-[2.5rem]">
                      {asset.productRD}
                    </Badge>
                  </td>
                  <td className="text-center py-3 px-4">
                    <Badge variant={asset.customerExp >= 8 ? "default" : "secondary"} className="min-w-[2.5rem]">
                      {asset.customerExp}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Best Venue Mapping */}
      <Card className="p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Best Venue for Each Innovation Pillar</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Strategic alignment matrix: Innovation assets matched with optimal showcase platforms
        </p>
        <div className="space-y-3">
          {venueMapping.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-muted/30 to-transparent border border-border hover:border-primary/30 transition-all">
              <div className="flex-1">
                <p className="font-semibold text-foreground">{item.innovation}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.bestVenue}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Fit Score:</span>
                <Badge variant="default" className="min-w-[3rem] justify-center">
                  {item.score}/10
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-info/10 border border-info/20 rounded-lg">
          <p className="text-sm font-semibold text-info">
            Strategic Insight: VivaTech scores 4-6/10 for most Clarins innovations, while targeted alternatives score 8-10/10
          </p>
        </div>
      </Card>

    </div>
  );
};
