import { famille } from "./famille.model";
import { laboratoire } from "./laboratoire.model";

export interface product{
    id_prd: number;
    dateAjout_prd : Date;
    description_prd : string;
    lib_prd : string;
    prix_livr : number;
    prix_prd  : number;
    laboratoire : laboratoire ;
    famille : famille;
}