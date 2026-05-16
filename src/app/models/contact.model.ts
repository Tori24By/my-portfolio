export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  sentAt?: Date;
  status?: 'pending' | 'sent' | 'failed';
}
