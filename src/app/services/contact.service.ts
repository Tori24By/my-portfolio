import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ContactMessage } from '../models/contact.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly apiUrl = `${environment.apiBaseUrl}/contacts`;
  private readonly powerAutomateUrl = environment.powerAutomateWebhookUrl;

  constructor(private readonly http: HttpClient) {}

  /**
   * Send a contact message.
   * When a database API is connected, this will POST to the API.
   * When Power Automate webhook URL is configured, it will also trigger the flow.
   */
  sendMessage(message: ContactMessage): Observable<ContactMessage> {
    if (this.powerAutomateUrl) {
      return this.http.post<ContactMessage>(this.powerAutomateUrl, message);
    }

    if (!environment.production) {
      console.log('[ContactService] Message queued (no backend configured):', message);
      return of({ ...message, status: 'sent' as const, sentAt: new Date() });
    }

    return this.http.post<ContactMessage>(this.apiUrl, message);
  }

  /**
   * Retrieve all contact messages (requires database connection).
   */
  getMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(this.apiUrl);
  }
}
