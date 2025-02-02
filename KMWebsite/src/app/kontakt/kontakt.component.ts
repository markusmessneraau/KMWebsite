import { Component } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  imports: [],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.css'
})
export class KontaktComponent {

  isMenuOpen = false; // Menü ist standardmäßig geschlossen

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Zustand wechseln
  }

}
