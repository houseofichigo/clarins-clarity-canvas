import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScenarioToggleProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const ScenarioToggle = ({ value, onValueChange }: ScenarioToggleProps) => {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-muted-foreground">Scenario:</span>
      <Tabs value={value} onValueChange={onValueChange}>
        <TabsList>
          <TabsTrigger value="conservative">Conservative</TabsTrigger>
          <TabsTrigger value="mid-range">Mid-Range</TabsTrigger>
          <TabsTrigger value="optimistic">Optimistic</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};
