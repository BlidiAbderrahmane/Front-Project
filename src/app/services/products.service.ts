import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { famille } from '../model/famille.model';
import { laboratoire } from '../model/laboratoire.model';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts():Observable<Array<product>>{
    return this.http.get<Array<product>> 
    (environment.backendHost+"/produits/liste")
    }
  
  public addProduct(product : product):Observable<product>{
    return this.http.post<product>(environment.backendHost+"/produits/ajouter",product)
  }
  public deleteProduct(id: number) {
    return this.http.delete(environment.backendHost+"/produits/supprimer/"+id)
  }

  public getLabo():Observable<Array<laboratoire>>{
    return this.http.get<Array<laboratoire>> 
    (environment.backendHost+"/laboratoires/liste")
  }

  public getFam():Observable<Array<famille>>{
    return this.http.get<Array<famille>> 
    (environment.backendHost+"/familles/liste")
  }
}
