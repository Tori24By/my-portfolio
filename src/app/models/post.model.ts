export interface Post {
  id?: number;
  title: string;
  summary: string;
  platform: 'DIO' | 'dev.to' | 'Medium' | 'LinkedIn' | 'other';
  url: string;
  publishedAt: string;
  tags: string[];
  coverImageUrl?: string;
}
