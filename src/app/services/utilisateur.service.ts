import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { utilisateur } from '../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  public addUtilisateur(utilisateur : utilisateur):Observable<utilisateur>{
    return this.http.post<utilisateur>(environment.backendHost+"/utilisateurs/ajouter",utilisateur)
  }

  public getUtilisateurs():Observable<Array<utilisateur>>{
    return this.http.get<Array<utilisateur>> 
    (environment.backendHost+"/utilisateurs/liste")
    }
  public deleteUtilisateur(id: number) {
    return this.http.delete(environment.backendHost+"/utilisateurs/supprimer/"+id)
  }
}
