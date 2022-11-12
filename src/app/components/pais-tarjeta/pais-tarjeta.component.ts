import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pais-tarjeta',
  templateUrl: './pais-tarjeta.component.html',
  styleUrls: ['./pais-tarjeta.component.css']
})
export class PaisTarjetaComponent implements OnInit {

  constructor() { }

  @Input() pais:any;

  ngOnInit(): void {
  }

}
