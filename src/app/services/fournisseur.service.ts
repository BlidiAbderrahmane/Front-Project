import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { fournisseur } from '../model/fournisseur.model';
import { utilisateur } from '../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }

  public getFournisseurs():Observable<Array<fournisseur>>{
    return this.http.get<Array<fournisseur>> 
    (environment.backendHost+"/fournisseurs/liste")
  }

  public addFournisseurs(fournisseur : fournisseur):Observable<fournisseur>{
    return this.http.post<fournisseur>(environment.backendHost+"/fournisseurs/ajouter",fournisseur)
  }

  public deleteFournisseur(id: number) {
    return this.http.delete(environment.backendHost+"/fournisseurs/supprimer/"+id)
  }

  public getUser():Observable<Array<utilisateur>>{
    return this.http.get<Array<utilisateur>> 
    (environment.backendHost+"/utilisateurs/liste")
  }

}
