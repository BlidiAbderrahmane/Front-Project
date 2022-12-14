import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { fournisseur } from 'src/app/model/fournisseur.model';
import { utilisateur } from 'src/app/model/utilisateur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-crud-fournisseur',
  templateUrl: './crud-fournisseur.component.html',
  styleUrls: ['./crud-fournisseur.component.css']
})
export class CrudFournisseurComponent implements OnInit {
  fournisseurs!: Observable<Array<fournisseur>>;
  errorMessage!: string;
  newFournisseurFormGroup !:FormGroup;
  utilisateurs!: Observable<Array<utilisateur>>;


  constructor(private fournisseurService: FournisseurService, private formBuilder: FormBuilder ) { }
  ngOnInit(): void {
    //LIST ALL FOURNISSEURS 
    this.fournisseurs = this.fournisseurService.getFournisseurs().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    this.utilisateurs = this.fournisseurService.getUser().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );


    //ADD FOURNISSEUR
    this.newFournisseurFormGroup= this.formBuilder.group({
      id_fournisseur : ['',Validators.required],
      adresse_fournisseur : ['',Validators.required],
      email_fournisseur : ['',Validators.required],
      nom_fournisseur : ['',Validators.required],
      tel_fournisseur : ['',Validators.required],
      utilisateur : ['',Validators.required]
    })

  }
  handleSaveFournisseur(){
    let fournisseur: fournisseur = this.newFournisseurFormGroup.value;
    this.fournisseurService.addFournisseurs(fournisseur).subscribe({
      next: data => {
        alert("Le fournisseur est ajouté avec succée");
        this.newFournisseurFormGroup.reset();
        this.ngOnInit();
        // this.dialogRef.close("");
      },
      error:()=>{
        alert("il y a eu une erreur lors de l'ajout de ce fournisseur");
      }
    })
  }
  // DELETE FOURNISSEUR
  handleDeleteFournisseur(id: number){
    if (confirm('Voulez vous vraiment supprimer ce fournisseur?\nCette action ne peut pas être annulée !!')) {
    this.fournisseurService.deleteFournisseur(id).subscribe((data) => {
        this.ngOnInit();  
      }
      );
    }
  } 
}
