import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgres') txtProgress: ElementRef;
  //Variables de papa a hijo
  @Input() leyenda: string = 'Leyenda';
  @Input() porsentaje: number = 50;

  //Para variables de hijo a papa
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onChanges(newValue: number) {
    // let elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log(this.txtProgress);
    if (newValue >= 100) {
      this.porsentaje = 100;
    } else if (newValue <= 0) {
      this.porsentaje = 0;
    } else this.porsentaje = newValue;

    // elemHTML.value = this.porsentaje;
    this.txtProgress.nativeElement.value = this.porsentaje;
    this.cambioValor.emit(this.porsentaje);
  }

  cambiarValor(valor: number) {
    if (this.porsentaje >= 100 && valor > 0) {
      this.porsentaje = 100;
      return;
    }
    if (this.porsentaje <= 0 && valor < 0) {
      this.porsentaje = 0;
      return;
    }
    this.porsentaje = this.porsentaje + valor;
    this.cambioValor.emit(this.porsentaje);
  }
}
