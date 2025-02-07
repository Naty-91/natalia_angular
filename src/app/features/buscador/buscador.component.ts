// buscador.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  searchText: string = '';
  selectedCategory: string = '';

  // Función que maneja la búsqueda
  search() {
    console.log('Buscando:', this.searchText, 'en categoría:', this.selectedCategory);
    
    // Aquí puedes hacer la búsqueda real, tal vez llamando a un servicio
  }
}
