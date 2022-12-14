import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { famille } from 'src/app/model/famille.model';
import { laboratoire } from 'src/app/model/laboratoire.model';
import { product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css']
})
export class CrudProductComponent implements OnInit {
  
  products!: Observable<Array<product>>;
  errorMessage!: string;
  newProductFormGroup !:FormGroup;

  laboratoires!: Observable<Array<laboratoire>>;
  familles!: Observable<Array<famille>>;


  constructor(private productservice: ProductsService, private formBuilder: FormBuilder, private router : Router ) { }
  ngOnInit(): void {
    //LIST ALL PRODUCTS 
    this.products = this.productservice.getProducts().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    this.familles = this.productservice.getFam().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    this.laboratoires = this.productservice.getLabo().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

    //ADD PRODUCT
    this.newProductFormGroup= this.formBuilder.group({
      id_prd : ['',Validators.required],
      lib_prd : ['',Validators.required],
      description_prd : ['',Validators.required],
      prix_prd : ['',Validators.required],
      prix_livr : ['',Validators.required],
      dateAjout_prd : ['',Validators.required],
      famille : ['',Validators.required],
      laboratoire : ['',Validators.required]
      
    })

  }
  handleSaveProduct() {
    let product: product = this.newProductFormGroup.value;
    this.productservice.addProduct(product).subscribe({
      next: data => {
        alert("Le produit est ajouté avec succée");
        this.newProductFormGroup.reset();
        this.ngOnInit();
        // this.dialogRef.close("");
      },
      error:()=>{
        alert("il y a eu une erreur lors de l'ajout de ce produit");
      }
    })

  }
  // DELETE PRODUCT
  handleDeleteProduct(id: number){
    if (confirm('Voulez vous vraiment supprimer ce produit?\nCette action ne peut pas être annulée !!')) {
    this.productservice.deleteProduct(id).subscribe((data) => {
        this.ngOnInit();  
      }
      );
    }
  } 
}
