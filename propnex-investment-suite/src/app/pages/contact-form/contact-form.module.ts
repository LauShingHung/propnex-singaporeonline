import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Import if you're using template-driven forms
    ReactiveFormsModule // Import if you're using reactive forms
  ],
  exports: [
    ContactFormComponent // Export the component to be used in other modules
  ]
})
export class ContactFormModule { }
