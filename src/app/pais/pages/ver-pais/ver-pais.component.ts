import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})

export class VerPaisComponent implements OnInit {
  pais!: Country;

  // activatedRoute contiene lo necesario para suscribirse a los cambios del url
  constructor(private activatedRoute: ActivatedRoute, private PaisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params.pipe( switchMap(({ id }) => this.PaisService.getPaisPorAlpha(id)), tap(console.log) ).subscribe(pais => {this.pais = pais[0]});
    
    /* Esto es algo mas que no se para que es  */
    // this.activatedRoute.params.subscribe(({ id }) => { console.log(id); this.PaisService.getPaisPorAlpha(id).subscribe(pais => { console.log(pais) }) })
  }

}
