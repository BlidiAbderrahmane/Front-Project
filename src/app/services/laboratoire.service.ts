import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { laboratoire } from '../model/laboratoire.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratoireService {

  constructor(private http: HttpClient) { }

  public getLaboratoires():Observable<Array<laboratoire>>{
    return this.http.get<Array<laboratoire>> 
    (environment.backendHost+"/laboratoires/liste")
  }

  public addLaboratoires(laboratoire : laboratoire):Observable<laboratoire>{
    return this.http.post<laboratoire>(environment.backendHost+"/laboratoires/ajouter",laboratoire)
  }

  public deleteLaboratoire(id: number) {
    return this.http.delete(environment.backendHost+"/laboratoires/supprimer/"+id)
  }
}
