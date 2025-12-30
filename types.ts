
export interface SectionData {
  id: string;
  title: string;
  description: string;
  subDescription?: string;
  images: string[];
}

// Data structure for metrics and charts used in the project report
export interface MetricData {
  name: string;
  value: number;
}
