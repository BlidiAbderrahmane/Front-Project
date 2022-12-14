import { fournisseur } from "./fournisseur.model";

export interface facture{
    id_fact_achat : number;
    date : Date;
    total_ht : number;
    total_ttc : number;
    total_tva : number;
    fournisseur : fournisseur;
}