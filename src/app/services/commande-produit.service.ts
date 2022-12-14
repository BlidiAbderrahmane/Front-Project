import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { commandeProduit } from '../model/commandeProduit.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeProduitService {

  constructor(private http: HttpClient) { }
  public addCommande(commandeProduit : commandeProduit):Observable<commandeProduit>{
    return this.http.post<commandeProduit>(environment.backendHost+"/commandes/ajouter",commandeProduit)
  }
}
