import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button {margin-right: 5px;}`
  ]
})

export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva: string = '';
  paises: Country[] = [];
  termino: string = '';
  hayError: boolean = false;

  constructor(private PaisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    // TODO hacer el llamado al servicio
    this.PaisService.buscarRegion(region).subscribe(paises => this.paises = paises
      , (err) => { this.hayError = true; this.paises = [] });
  }

}
