    import { fournisseur } from "./fournisseur.model";
import { product } from "./product.model";

export interface commandeProduit{
    id : number;
    dateFourni : Date;
    quantiteFourni : number;
    fournisseur : fournisseur;
    produit : product;
}