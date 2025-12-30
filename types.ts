
export interface ContentItem {
  title: string;
  description: string;
  subDescription?: string;
  images: string[];
}

export interface SectionData {
  id: string;
  items: ContentItem[];
}

export interface MetricData {
  name: string;
  value: number;
}
