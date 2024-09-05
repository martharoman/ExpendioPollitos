import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Pollo Entero',
      description: 'Pollo fresco entero, ideal para asar.',
      price: 15.99,
      image: 'assets/pollo-entero.jpg'
    },
    {
      id: 2,
      name: 'Pechugas de Pollo',
      description: 'Pechugas de pollo sin hueso, perfectas para la parrilla.',
      price: 12.99,
      image: 'assets/pechugas-pollo.jpg'
    },
    {
      id: 3,
      name: 'Alitas de Pollo',
      description: 'Deliciosas alitas de pollo, ideales para compartir.',
      price: 9.99,
      image: 'assets/alitas-pollo.jpg'
    },
    {
      id: 4,
      name: 'Muslos de Pollo',
      description: 'Jugosos muslos de pollo, perfectos para hornear.',
      price: 8.99,
      image: 'assets/muslos-pollo.jpg'
    }
  ];
}