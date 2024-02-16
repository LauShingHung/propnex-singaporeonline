import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {
  @Input() message: string; // Message to display in the form

  contactForm: FormGroup;

  @Output() contactSubmitted: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contactNumber: [''],
      // Add other form controls as needed
    });
  }

  submitContactForm() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      // You can do further processing/validation here if needed
      this.contactSubmitted.emit(formData);
    }
  }

  cancel() {
    console.log('Cancel button clicked!');
    this.cancelled.emit();
  }
}
