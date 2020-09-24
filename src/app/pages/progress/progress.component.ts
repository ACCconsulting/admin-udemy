import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent implements OnInit {
  porsentaje: number = 20;
  porsentaje2: number = 30;

  constructor() {}

  ngOnInit(): void {}

  actualizar(event: number) {
    this.porsentaje = event;
  }
}
