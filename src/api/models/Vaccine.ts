import { Pet } from "./Pet";

export type VaccineEntity = {
    id: string;
    vaccine: string;
    pet: Pet; 
    ativo: boolean;
}

export class Vaccine {

    readonly id?: string;
    readonly vaccine: string;
    readonly pet: Pet; 
    readonly ativo: boolean;

    constructor(data: VaccineEntity) {
        this.id = data.id || 'ID not provided';
        this.vaccine = data.vaccine;
        this.pet = data.pet;
        this.ativo = data.ativo;
    }

}