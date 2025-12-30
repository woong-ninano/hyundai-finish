
// Interface for project sections in the UI
export interface SectionData {
  id: string;
  title: string;
  description: string;
  subDescription?: string;
  images: string[];
}

// Added missing MetricData interface for components/MetricChart.tsx
export interface MetricData {
  name: string;
  value: number;
}
