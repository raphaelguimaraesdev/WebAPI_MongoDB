import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../Shared/pessoa.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  pessoa = new Pessoa('', '', '', '');

  constructor() { }

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
  }

}
