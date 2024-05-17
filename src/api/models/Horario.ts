import { Veterinarian } from "./Veterinarian";

export type HorarioEntity = {
    id: string;
    dataDisponivel: string;
    veterinarian: Veterinarian; 
    active: boolean;
}

export class Horario {

    readonly id?: string;
    readonly dataDisponivel: string;
    readonly veterinarian: Veterinarian; 
    readonly active: boolean;

    constructor(data: HorarioEntity) {
        this.id = data.id || 'ID not provided';
        this.dataDisponivel = data.dataDisponivel;
        this.veterinarian = data.veterinarian;
        this.active = data.active;
    }

}