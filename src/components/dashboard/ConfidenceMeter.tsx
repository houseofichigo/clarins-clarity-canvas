import { cn } from "@/lib/utils";

interface ConfidenceMeterProps {
  value: number; // 0-100
  label?: string;
  className?: string;
}

export const ConfidenceMeter = ({ value, label = "Confidence", className }: ConfidenceMeterProps) => {
  const circles = 5;
  const filledCircles = Math.round((value / 100) * circles);

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-sm font-medium text-muted-foreground">{label}:</span>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: circles }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              i < filledCircles
                ? "bg-primary scale-110"
                : "bg-muted border border-border"
            )}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-foreground">{value}%</span>
    </div>
  );
};
