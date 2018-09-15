import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../Shared/pessoa.model';
import { PessoaService } from '../pessoa.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:  [ PessoaService ]
})
export class FormularioComponent implements OnInit {

  pessoa = new Pessoa(0, '', '', '', '');
  private _servico: PessoaService
  constructor(private servico: PessoaService) { }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.pessoa);
    this.servico.post(this.pessoa);
  }

  ngOnInit() {
  }

}
