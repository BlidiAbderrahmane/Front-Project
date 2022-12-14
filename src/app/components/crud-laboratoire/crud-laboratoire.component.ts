import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { laboratoire } from 'src/app/model/laboratoire.model';
import { LaboratoireService } from 'src/app/services/laboratoire.service';

@Component({
  selector: 'app-crud-laboratoire',
  templateUrl: './crud-laboratoire.component.html',
  styleUrls: ['./crud-laboratoire.component.css']
})
export class CrudLaboratoireComponent implements OnInit {
  laboratoires!: Observable<Array<laboratoire>>;
  errorMessage!: string;
  newLaboratoireFormGroup !:FormGroup;


  constructor(private laboratoireService: LaboratoireService,private formBuilder: FormBuilder ) { }
  ngOnInit(): void {
    //LIST ALL LABOS 
    this.laboratoires = this.laboratoireService.getLaboratoires().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    //ADD LABO
    this.newLaboratoireFormGroup= this.formBuilder.group({
      id_labo : ['',Validators.required],
      lib_labo : ['',Validators.required]
    })

  }
  handleSaveLaboratoire(){
    let laboratoire: laboratoire = this.newLaboratoireFormGroup.value;
    this.laboratoireService.addLaboratoires(laboratoire).subscribe({
      next: data => {
        alert("Le laboratoire est ajouté avec succée");
        this.newLaboratoireFormGroup.reset();
        this.ngOnInit();
        // this.dialogRef.close("");
      },
      error:()=>{
        alert("il y a eu une erreur lors de l'ajout de ce laboratoire");
      }
    })

  }

  
  
  // DELETE LABO
  handleDeleteLaboratoire(id: number){
    if (confirm('Voulez vous vraiment supprimer ce laboratoire?\nCette action ne peut pas être annulée !!')) {
    this.laboratoireService.deleteLaboratoire(id).subscribe((data) => {
        this.ngOnInit();  
      }
      );
    }
  } 
}
