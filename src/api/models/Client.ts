import { Consult } from "./Consult";
import { Pet } from "./Pet";
import { AdressesEmbeddable } from "./Veterinarian";

export type ClientEntity = {
    id: string;
    nome: string;
    dataCadastro: string;
    endereco: AdressesEmbeddable; 
    email: string;
    telefone: string;
    nascimento: string;
    cpf: string;
    pet: Pet; 
    consult: Consult; 
    ativo: boolean;
}

export class Client {

    readonly id?: string;
    readonly nome: string;
    readonly dataCadastro: string;
    readonly endereco: AdressesEmbeddable; 
    readonly email: string;
    readonly telefone: string;
    readonly nascimento: string;
    readonly cpf: string;
    readonly pet: Pet; 
    readonly consult: Consult; 
    readonly ativo: boolean;

    constructor(data: ClientEntity) {
        this.id = data.id || 'ID not provided';
        this.nome = data.nome;
        this.dataCadastro = data.dataCadastro;
        this.endereco = data.endereco;
        this.email = data.email;
        this.telefone = data.telefone;
        this.nascimento = data.nascimento;
        this.cpf = data.cpf;
        this.pet = data.pet;
        this.consult = data.consult;
        this.ativo = data.ativo;
    }

}