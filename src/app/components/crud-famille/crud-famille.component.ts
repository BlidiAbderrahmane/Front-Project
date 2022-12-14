import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { famille } from 'src/app/model/famille.model';
import { FamilleService } from 'src/app/services/famille.service';

@Component({
  selector: 'app-crud-famille',
  templateUrl: './crud-famille.component.html',
  styleUrls: ['./crud-famille.component.css']
})
export class CrudFamilleComponent implements OnInit {
  familles!: Observable<Array<famille>>;
  errorMessage!: string;
  newFamilleFormGroup !:FormGroup;


  constructor(private familleService: FamilleService, private formBuilder: FormBuilder ) { }
  ngOnInit(): void {
    //LIST ALL FAMILLES 
    this.familles = this.familleService.getFamilles().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    //ADD FAMILLE
    this.newFamilleFormGroup= this.formBuilder.group({
      id_famille : ['',Validators.required],
      lib_famille : ['',Validators.required],
    })


  }
  handleSaveFamille(){
    let famille: famille = this.newFamilleFormGroup.value;
    this.familleService.addLaboratoires(famille).subscribe({
      next: data => {
        alert("La famille est ajouté avec succée");
        this.newFamilleFormGroup.reset();
        this.ngOnInit();
        // this.dialogRef.close("");
      },
      error:()=>{
        alert("il y a eu une erreur lors de l'ajout de cette famille");
      }
    })
  }


  // DELETE FAMILLE
  handleDeleteFamille(id: number){
    if (confirm('Voulez vous vraiment supprimer cette famille?\nCette action ne peut pas être annulée !!')) {
    this.familleService.deleteFamille(id).subscribe((data) => {
        this.ngOnInit();  
      }
      );
    }
  } 
  
}
