import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { facture } from '../model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureAchatService {

  constructor(private http: HttpClient) { }
  public addFacture(facture : facture):Observable<facture>{
    return this.http.post<facture>(environment.backendHost+"/factures/ajouter",facture)
  }
}
