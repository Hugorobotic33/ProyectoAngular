import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {

  pais:any;

  constructor(private activatedRoute:ActivatedRoute,private _paisesService:PaisesService) {
    
    this.activatedRoute.params.subscribe(params=>{
      const id=params["id"];
      this._paisesService.getPais(id).subscribe(response=>this.pais=response);
    })
   }

  ngOnInit(): void {
  }



}
