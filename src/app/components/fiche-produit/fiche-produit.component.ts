import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, Subscription, throwError } from 'rxjs';
import { product } from 'src/app/model/product.model';
import { FicheProduitService } from 'src/app/services/fiche-produit.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  product!: Observable<product>;

  errorMessage: any;
  routeSub: Subscription | undefined;
  idpar : any;
  constructor(private route: ActivatedRoute, private ficheProduitService: FicheProduitService,) { }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id']);
      this.idpar=params['id'];
    });

    this.product = this.ficheProduitService.getProduct(this.idpar).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );

  }
  
}
