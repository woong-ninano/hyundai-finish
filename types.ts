
export interface ContentItem {
  title: string;
  description: string;
  subDescription?: string;
  image: string;
}

export interface SectionData {
  id: string;
  items: ContentItem[];
}

export interface MetricData {
  name: string;
  value: number;
}
