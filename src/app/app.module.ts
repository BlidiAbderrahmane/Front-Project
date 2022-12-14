import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CrudLaboratoireComponent } from './components/crud-laboratoire/crud-laboratoire.component';
import { CrudFamilleComponent } from './components/crud-famille/crud-famille.component';
import { CrudFournisseurComponent } from './components/crud-fournisseur/crud-fournisseur.component';
import { CrudUtilisateurComponent } from './components/crud-utilisateur/crud-utilisateur.component';
import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';
import { FactureAchatComponent } from './components/facture-achat/facture-achat.component';
import { CommandeProduitComponent } from './components/commande-produit/commande-produit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CrudProductComponent,
    CrudLaboratoireComponent,
    CrudFamilleComponent,
    CrudFournisseurComponent,
    CrudUtilisateurComponent,
    FicheProduitComponent,
    FactureAchatComponent,
    CommandeProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
