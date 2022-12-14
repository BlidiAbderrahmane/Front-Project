import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class FicheProduitService {

  constructor(private http: HttpClient) { }
  public getProduct(id : number):Observable<product>{
    return this.http.get<product>
    (environment.backendHost+"/produits/consulter"+id)
    }
}
