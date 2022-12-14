import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { commandeProduit } from 'src/app/model/commandeProduit.model';
import { fournisseur } from 'src/app/model/fournisseur.model';
import { product } from 'src/app/model/product.model';
import { CommandeProduitService } from 'src/app/services/commande-produit.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-commande-produit',
  templateUrl: './commande-produit.component.html',
  styleUrls: ['./commande-produit.component.css']
})
export class CommandeProduitComponent implements OnInit {
  commandes!: Observable<Array<commandeProduit>>;
  errorMessage!: string;
  newCommandeFormGroup !:FormGroup;

  products!: Observable<Array<product>>;
  fournisseurs!: Observable<Array<fournisseur>>;
  constructor(private productservice: ProductsService, private commandeProduitService : CommandeProduitService, private fournisseurService : FournisseurService ,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
     
     this.products = this.productservice.getProducts().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    this.fournisseurs = this.fournisseurService.getFournisseurs().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
    this.newCommandeFormGroup= this.formBuilder.group({
      dateFourni : ['',Validators.required],  
      quantiteFourni : ['',Validators.required],
      fournisseur : ['',Validators.required],
      produit : ['',Validators.required],
        
    })
  }
  handleSaveCommande() {
    let commandeProduit: commandeProduit = this.newCommandeFormGroup.value;
    this.commandeProduitService.addCommande(commandeProduit).subscribe({
      next: data => {
        alert("La commande est ajouté avec succée");
        this.newCommandeFormGroup.reset();
        this.ngOnInit();
        
      },
      error:()=>{
        alert("il y a eu une erreur lors de l'ajout de cette commande");
      }
    })

  }
}

