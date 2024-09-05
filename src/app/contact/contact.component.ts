import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted', this.contactForm);
    // Aquí iría la lógica para enviar el formulario a un servidor
    this.contactForm = { name: '', email: '', message: '' };
    alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
  }
}