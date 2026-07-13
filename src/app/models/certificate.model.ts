export interface Certificate {
  pk_certificate?: number;
  category: string;
  title: string;
  issuer: string;
  start_date: string;
  end_date: string;
  credentialUrl?: string;
  imageUrl?: string;
  hours?: number;
}
