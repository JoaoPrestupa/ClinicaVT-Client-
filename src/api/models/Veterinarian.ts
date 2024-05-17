import { Consult } from "./Consult";
import { Horario } from "./Horario";

export type AdressesEmbeddable = {
    
}

export enum VeterinarianDetailsEnum {
    
}

export type VeterinarianEntity = {
    id: string;
    name: string;
    adress: AdressesEmbeddable;
    email: string;
    crmv: string;
    data: string;
    salary: number;
    ativo: boolean;
    consult: Consult; 
    horario: Horario; 
    veterinarianDetails: VeterinarianDetailsEnum;
}

export class Veterinarian {

    readonly id?: string;
    readonly name: string;
    readonly adress: AdressesEmbeddable;
    readonly email: string;
    readonly crmv: string;
    readonly data: string;
    readonly salary: number;
    readonly ativo: boolean;
    readonly consult: Consult; 
    readonly horario: Horario; 
    readonly veterinarianDetails: VeterinarianDetailsEnum;

    constructor(data: VeterinarianEntity) {
        this.id = data.id || 'ID not provided';
        this.name = data.name;
        this.adress = data.adress;
        this.email = data.email;
        this.crmv = data.crmv;
        this.data = data.data;
        this.salary = data.salary;
        this.ativo = data.ativo;
        this.consult = data.consult;
        this.horario = data.horario;
        this.veterinarianDetails = data.veterinarianDetails;
    }

}