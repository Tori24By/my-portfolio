import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactMessage } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData: ContactMessage = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private readonly contactService: ContactService) {}

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.contactService.sendMessage(this.formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.formData = { name: '', email: '', subject: '', message: '' };
      },
      error: () => {
        this.isSubmitting = false;
        this.submitError = true;
      },
    });
  }
}
