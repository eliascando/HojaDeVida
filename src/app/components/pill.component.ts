import { Component, Input } from '@angular/core';

@Component({
  selector: 'pill-component',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})

export class PillComponent {
    @Input() texto: string;

    constructor() {
        this.texto = '';
    }
}