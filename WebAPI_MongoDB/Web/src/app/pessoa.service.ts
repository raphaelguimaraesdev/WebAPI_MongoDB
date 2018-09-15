import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pessoa} from "./Shared/pessoa.model";
import {Provider} from "./data.provider";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private _headers: HttpHeaders;




  constructor(private _http: HttpClient) {
    this._headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  post(pessoa: Pessoa) {
    const body = JSON.stringify(pessoa);
    return this._http.post(Provider.GetUrlPostCliente(), body, this._headers).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}


