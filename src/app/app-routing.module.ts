import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeProduitComponent } from './components/commande-produit/commande-produit.component';
import { CrudFamilleComponent } from './components/crud-famille/crud-famille.component';
import { CrudFournisseurComponent } from './components/crud-fournisseur/crud-fournisseur.component';
import { CrudLaboratoireComponent } from './components/crud-laboratoire/crud-laboratoire.component';
import { CrudProductComponent } from './components/crud-product/crud-product.component';
import { CrudUtilisateurComponent } from './components/crud-utilisateur/crud-utilisateur.component';
import { FactureAchatComponent } from './components/facture-achat/facture-achat.component';
import { FicheProduitComponent } from './components/fiche-produit/fiche-produit.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  {path : "product", component : CrudProductComponent},
  {path : "laboratoire", component : CrudLaboratoireComponent},
  {path : "famille", component : CrudFamilleComponent},
  {path : "fournisseur", component : CrudFournisseurComponent},
  {path : "utilisateur", component : CrudUtilisateurComponent},
  {path : "commande", component : CommandeProduitComponent},
  {path : "factureAchat", component : FactureAchatComponent},

  {path : "ficheProduit/:id", component : FicheProduitComponent},
  {path : "login", component : LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
