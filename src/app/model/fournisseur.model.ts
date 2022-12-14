import { utilisateur } from "./utilisateur.model";

export interface fournisseur{
    id_fournisseur : number;
    nom_fournisseur : string;
    adresse_fournisseur	: string;
    email_fournisseur : string;
    tel_fournisseur : number;
    utilisateur : utilisateur;
}