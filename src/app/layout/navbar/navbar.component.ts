import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  /**
   * Estado del tema actual.
   * `false` → Tema claro (por defecto).
   * `true` → Tema oscuro.
   */
  isDarkMode = false;

  /**
   * Alterna el tema de la aplicación entre claro y oscuro.
   * Cambia el estado de 'isDarkMode' y agrega o quita la clase `dark-theme` en el `<body>`,
   * lo que activa los estilos de modo oscuro.
   */
  toggleTheme(): void {
    // Cambia el estado del tema
    this.isDarkMode = !this.isDarkMode; 

    // Aplica la clase `dark-theme` al body según el estado de isDarkMode
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}