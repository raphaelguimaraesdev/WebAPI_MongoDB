import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Pessoa} from "./Shared/pessoa.model"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PessoaService {


  private _url = 'http://localhost:55202/api/values/post'


  constructor(private _http: HttpClient) {
  }

  post(pessoa: Pessoa) {
    const body = JSON.stringify(pessoa);
    return this._http.post(this._url, body, httpOptions).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}

}

