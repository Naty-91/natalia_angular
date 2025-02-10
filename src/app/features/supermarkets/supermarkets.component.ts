import { Component } from '@angular/core';

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.scss']
})
export class SupermarketsComponent {
  filtroSeleccionado: string = ''; // Almacena la opción seleccionada
  productos = [
    { nombre: 'Crema de Lentejas', categoria: 'más vendidos', precio: 1.70, imagen: 'lentejas.png' },
    { nombre: 'Tarta de Avellanas', categoria: 'más vendidos', precio: 6.60, imagen: 'Tarta-de-avellanas.jpg' },
    { nombre: 'Aceite de Oliva', categoria: 'otros', precio: 25.00, imagen: 'aove.jpg' },
    { nombre: 'Papel Higiénico', categoria: 'otros', precio: 3.50, imagen: 'pape_higienico.jpg' },
    { nombre: 'Cereal Integral', categoria: 'más vendidos', precio: 2.99, imagen: 'cereales.png' },
    { nombre: 'Leche Desnatada', categoria: 'otros', precio: 1.15, imagen: 'leche_desnatada.jpg' }
  ];

  get productosFiltrados() {
    if (!this.filtroSeleccionado) {
      return this.productos; // Si no hay filtro, mostrar todos
    }
    return this.productos.filter(producto => producto.categoria === this.filtroSeleccionado);
  }
}
