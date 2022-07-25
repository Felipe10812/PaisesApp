import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  deboucer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.deboucer.pipe(debounceTime(300)).subscribe(valor => {
      this.onDebounce.emit( valor )
    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.deboucer.next(this.termino);

  }

}
