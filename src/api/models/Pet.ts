import { Client } from "./Client";
import { Consult } from "./Consult";
import { Vaccine } from "./Vaccine";

export type PetEntity = {
    id: string;
    nome: string;
    descricaoPet: string;
    animal: string; 
    raca: string;
    nascimento: string;
    welfare_animal: string;
    client: Client 
    vaccine: Vaccine; 
    consult: Consult; 
    ativo: boolean;
}

export class Pet {

    readonly id?: string;
    readonly nome: string;
    readonly descricaoPet: string;
    readonly animal: string; 
    readonly raca: string;
    readonly nascimento: string;
    readonly welfare_animal: string;
    readonly client: Client; 
    readonly vaccine: Vaccine; 
    readonly consult: Consult; 
    readonly ativo: boolean;

    constructor(data: PetEntity) {
        this.id = data.id || 'ID not provided';
        this.nome = data.nome;
        this.descricaoPet = data.descricaoPet;
        this.animal = data.animal;
        this.raca = data.raca;
        this.nascimento = data.nascimento;
        this.welfare_animal = data.welfare_animal;
        this.client = data.client;
        this.vaccine = data.vaccine;
        this.consult = data.consult;
        this.ativo = data.ativo;
    }

}