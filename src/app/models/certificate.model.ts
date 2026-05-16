export interface Certificate {
  id?: number;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  imageUrl?: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'automation' | 'other';
  hours?: number;
}
