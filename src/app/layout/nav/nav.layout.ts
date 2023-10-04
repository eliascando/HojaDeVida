import { Component } from '@angular/core';

@Component({
  selector: 'nav', // El selector que usarás en la plantilla HTML
  templateUrl: './nav.layout.html', // Ruta a la plantilla HTML
  styleUrls: ['./nav.layout.css'] // Estilos CSS
})
export class NavLayout {
  location: string = ''; // Declarar la propiedad 'location' como una cadena vacía

  setLocation(newLocation: string) {
    this.location = newLocation;
    const element = document.getElementById(newLocation);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  isLocationActive(targetLocation: string): boolean {
    return this.location === targetLocation;
  }
}

