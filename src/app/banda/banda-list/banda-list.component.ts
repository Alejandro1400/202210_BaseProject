import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaDetail } from '../banda-detail';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<BandaDetail> = [];
  promedioMiembros: number = 0;
  selected: Boolean = false;
  selectedBanda!: BandaDetail;

  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      this.calcularPromedio(this.bandas);
    });
  }


  onSelected(banda: BandaDetail):void{
    this.selected = true;
    this.selectedBanda = banda;
  }


  ngOnInit() {
    this.getBandas();
  }

  calcularPromedio(bandas: Array<Banda>){
    let sumaMiembros: number = 0;
    bandas.forEach(banda =>
      {
      sumaMiembros += banda.numberOfMembers;
      }
    )
    this.promedioMiembros = Math.round(sumaMiembros/bandas.length);

  }

}
