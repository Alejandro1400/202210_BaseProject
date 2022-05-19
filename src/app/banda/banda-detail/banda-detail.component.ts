import { Component, Input, OnInit } from '@angular/core';
import { BandaDetail } from '../banda-detail';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {

  @Input() bandaDetail !: BandaDetail;

  constructor() { }

  ngOnInit() {
  }

}
