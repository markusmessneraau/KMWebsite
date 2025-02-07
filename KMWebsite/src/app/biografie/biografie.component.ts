import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-biografie',
  templateUrl: './biografie.component.html',
  styleUrls: ['./biografie.component.css']
})
export class BiografieComponent  {
  isMenuOpen = false; // Menü ist standardmäßig geschlossen

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Zustand wechseln
  }

}
