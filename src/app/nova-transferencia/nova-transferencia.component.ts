import { Transferencia } from './../../models/transferencia';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService,private router:Router) {

  }

  tranferir() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino, id:this.valor.toString(), data: new Date() };
    this.service.adicionar(valorEmitir)
      .subscribe(resultado => {
        console.log(resultado);
        this.limmparValor();
        this.router.navigateByUrl('extrato');
      }, (error) => {
        console.error(error);
      }
      );
  }

  limmparValor() {
    this.valor = 0;
    this.destino = 0;
  }
}
