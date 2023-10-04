import { NgModule } from '@angular/core';
import { PillComponent } from './pill.component';// Asegúrate de proporcionar la ruta correcta al componente

@NgModule({
  declarations: [PillComponent], // Agrega PillComponent a las declaraciones
  exports: [PillComponent], // Opcionalmente, puedes exportarlo si planeas usarlo en otros módulos
})
export class PillModule {}
