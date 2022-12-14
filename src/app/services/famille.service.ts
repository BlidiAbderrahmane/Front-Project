import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { famille } from '../model/famille.model';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  constructor(private http: HttpClient) { }

  public getFamilles():Observable<Array<famille>>{
    return this.http.get<Array<famille>> 
    (environment.backendHost+"/familles/liste")
    }
  
    public addLaboratoires(famille : famille):Observable<famille>{
      return this.http.post<famille>(environment.backendHost+"/familles/ajouter",famille)
    }

  public deleteFamille(id: number) {
    return this.http.delete(environment.backendHost+"/familles/supprimer/"+id)
  }
}
