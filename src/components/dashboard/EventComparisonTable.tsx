import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

const events = [
  {
    event: "VivaTech",
    attendance: "150K",
    beautyAudience: "1.5K (1%)",
    boothCost: "€350-450K",
    costPerBeautyAttendee: "€233-300",
    leadQuality: "Low",
    mediaDurability: "1-2 months",
    roiPotential: "0.1-2.5x",
    trend: "down"
  },
  {
    event: "Cosmoprof",
    attendance: "265K",
    beautyAudience: "255K (96%)",
    boothCost: "€150-200K",
    costPerBeautyAttendee: "€0.59-0.78",
    leadQuality: "High",
    mediaDurability: "3-6 months",
    roiPotential: "3-5x",
    trend: "up"
  },
  {
    event: "PCD Paris",
    attendance: "15K",
    beautyAudience: "12K (80%)",
    boothCost: "€80-120K",
    costPerBeautyAttendee: "€6.67-10",
    leadQuality: "High",
    mediaDurability: "2-3 months",
    roiPotential: "2-4x",
    trend: "up"
  },
  {
    event: "Beautyworld ME",
    attendance: "65K",
    beautyAudience: "55K (85%)",
    boothCost: "€60-90K",
    costPerBeautyAttendee: "€1.09-1.64",
    leadQuality: "Medium",
    mediaDurability: "2-4 months",
    roiPotential: "2-3x",
    trend: "stable"
  },
  {
    event: "CES",
    attendance: "135K",
    beautyAudience: "2K (1.5%)",
    boothCost: "€400-600K",
    costPerBeautyAttendee: "€200-300",
    leadQuality: "Low",
    mediaDurability: "1-2 months",
    roiPotential: "0.5-1.5x",
    trend: "stable"
  }
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <ArrowUp className="h-4 w-4 text-success" />;
    case "down":
      return <ArrowDown className="h-4 w-4 text-destructive" />;
    default:
      return <Minus className="h-4 w-4 text-muted-foreground" />;
  }
};

const getQualityBadge = (quality: string) => {
  const variants: Record<string, "default" | "secondary" | "destructive"> = {
    High: "default",
    Medium: "secondary",
    Low: "destructive"
  };
  return <Badge variant={variants[quality] || "secondary"}>{quality}</Badge>;
};

export const EventComparisonTable = () => {
  return (
    <Card className="p-6 overflow-hidden">
      <h3 className="text-lg font-semibold mb-2">Event Comparison Matrix</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Comprehensive side-by-side analysis of 5 major events across key decision metrics
      </p>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Event</TableHead>
              <TableHead className="font-semibold">Total Attendance</TableHead>
              <TableHead className="font-semibold">Beauty Audience</TableHead>
              <TableHead className="font-semibold">Booth Cost</TableHead>
              <TableHead className="font-semibold">Cost/Beauty Attendee</TableHead>
              <TableHead className="font-semibold">Lead Quality</TableHead>
              <TableHead className="font-semibold">Media Durability</TableHead>
              <TableHead className="font-semibold">ROI Potential</TableHead>
              <TableHead className="font-semibold">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, idx) => (
              <TableRow key={idx} className={event.event === "VivaTech" ? "bg-destructive/5" : event.event === "Cosmoprof" ? "bg-success/5" : ""}>
                <TableCell className="font-semibold">{event.event}</TableCell>
                <TableCell>{event.attendance}</TableCell>
                <TableCell>{event.beautyAudience}</TableCell>
                <TableCell>{event.boothCost}</TableCell>
                <TableCell className={event.event === "VivaTech" || event.event === "CES" ? "text-destructive font-semibold" : "text-success font-semibold"}>
                  {event.costPerBeautyAttendee}
                </TableCell>
                <TableCell>{getQualityBadge(event.leadQuality)}</TableCell>
                <TableCell>{event.mediaDurability}</TableCell>
                <TableCell className={event.roiPotential.includes("3-5x") ? "text-success font-semibold" : event.roiPotential.includes("0.1") ? "text-destructive font-semibold" : ""}>
                  {event.roiPotential}
                </TableCell>
                <TableCell>{getTrendIcon(event.trend)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Key Insight:</span> Cosmoprof delivers 300-400x better cost efficiency than VivaTech while reaching 170x more beauty professionals
        </p>
      </div>
    </Card>
  );
};
