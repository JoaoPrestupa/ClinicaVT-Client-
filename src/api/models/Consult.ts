import { Client } from "./Client";
import { Pet } from "./Pet";
import { Veterinarian } from "./Veterinarian";

export type ConsultEntity = {
    id: string;
    date: string;
    description: string;
    value: number;
    cancel: boolean;
    ativo: boolean;
    client: Client; 
    pet: Pet; 
    veterinarian: Veterinarian; 
}

export class Consult {

    readonly id?: string;
    readonly date: string;
    readonly description: string;
    readonly value: number;
    readonly cancel: boolean;
    readonly ativo: boolean;
    readonly client: Client; 
    readonly pet: Pet; 
    readonly veterinarian: Veterinarian; 

    constructor(data: ConsultEntity) {
        this.id = data.id || 'ID not provided';
        this.date = data.date;
        this.description = data.description;
        this.value = data.value;
        this.cancel = data.cancel;
        this.ativo = data.ativo;
        this.client = data.client;
        this.pet = data.pet;
        this.veterinarian = data.veterinarian;
    }

}