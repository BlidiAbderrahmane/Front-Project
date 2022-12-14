import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, map, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { utilisateur } from 'src/app/model/utilisateur.model';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-crud-utilisateur',
  templateUrl: './crud-utilisateur.component.html',
  styleUrls: ['./crud-utilisateur.component.css']
})
export class CrudUtilisateurComponent implements OnInit {
  utilisateurs!: Observable<Array<utilisateur>>;
  errorMessage!: string;
  newUtilisateurFormGroup !:FormGroup;


  constructor(private utilisateurService: UtilisateurService, private formBuilder: FormBuilder ) { }
  ngOnInit(): void {
    //LIST ALL USERS 
    this.utilisateurs = this.utilisateurService.getUtilisateurs().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    //ADD USER
    this.newUtilisateurFormGroup= this.formBuilder.group({
      id_util : ['',Validators.required],
      nom_util : ['',Validators.required],
      prenom_util : ['',Validators.required],
      adresse_util : ['',Validators.required],
      email_util : ['',Validators.required],
      codePostal_util : ['',Validators.required],
      dateNaissance_util : ['',Validators.required],
      mdp_util : ['',Validators.required]
      
    })

  }
  handleSaveUtilisateur(){
    let utilisateur: utilisateur = this.newUtilisateurFormGroup.value;
    this.utilisateurService.addUtilisateur(utilisateur).subscribe({
      next: data => {
        alert("L'utilisateur' est ajouté avec succée");
        this.newUtilisateurFormGroup.reset();
        this.ngOnInit();
        // this.dialogRef.close("");
      },
      error:()=>{
        alert("il y a eu une erreur lors de l'ajout de cet utilisateur");
      }
    })
  }

  // DELETE USER
  handleDeleteUtilisateur(id: number){
    if (confirm('Voulez vous vraiment supprimer cet utilisateur?\nCette action ne peut pas être annulée !!')) {
    this.utilisateurService.deleteUtilisateur(id).subscribe((data) => {
        this.ngOnInit();  
      }
      );
  }
}
}
