import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  featuredProducts = [
    { name: 'Pollo Entero', price: 15.99, image: 'assets/pollo-entero.jpg' },
    { name: 'Alitas de Pollo', price: 9.99, image: 'assets/alitas.jpg' },
    { name: 'Pechuga de Pollo', price: 12.99, image: 'assets/pechuga.jpg' },
  ];
}
