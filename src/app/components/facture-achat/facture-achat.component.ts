import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { facture } from 'src/app/model/facture.model';
import { fournisseur } from 'src/app/model/fournisseur.model';
import { product } from 'src/app/model/product.model';
import { FactureAchatService } from 'src/app/services/facture-achat.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-facture-achat',
  templateUrl: './facture-achat.component.html',
  styleUrls: ['./facture-achat.component.css']
})
export class FactureAchatComponent implements OnInit {
  factures!: Observable<Array<facture>>;
  errorMessage!: string;
  newFactureFormGroup !:FormGroup;

  products!: Observable<Array<product>>;
  fournisseurs!: Observable<Array<fournisseur>>;

  constructor(private factureAchatService : FactureAchatService, private fournisseurService : FournisseurService ,private formBuilder: FormBuilder ) { }
  ngOnInit(): void {
   
    this.fournisseurs = this.fournisseurService.getFournisseurs().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
    this.newFactureFormGroup= this.formBuilder.group({
      dateFdateourni : ['',Validators.required],  
      total_ht : ['',Validators.required],
      total_ttc : ['',Validators.required],
      total_tva : ['',Validators.required],
      fournisseur : ['',Validators.required],   
    })
  }

  handleSaveCommande() {
    let facture: facture = this.newFactureFormGroup.value;
    facture.total_ttc= Number(facture.total_ht)+Number(facture.total_tva);
    this.factureAchatService.addFacture(facture).subscribe({
      next: data => {
        alert("La facture est ajouté avec succée");
        this.newFactureFormGroup.reset();
        this.ngOnInit();
        
      },
      error:()=>{
        alert("il y a eu une erreur lors de l'ajout de cette facture");
      }
    })

  }

}
