export type AdressesEmbeddableEntity = {
    cep: string;
    bairro: string;
    rua: string;
    cidade: string;
    uf: string;
    complemento: string;
    numero: string;
}

export class AdressesEmbeddable {

    readonly cep: string;
    readonly bairro: string;
    readonly rua: string;
    readonly cidade: string;
    readonly uf: string;
    readonly complemento: string;
    readonly numero: string;

    constructor(data: AdressesEmbeddableEntity) {
        this.cep = data.cep;
        this.bairro = data.bairro;
        this.rua = data.rua;
        this.cidade = data.cidade;
        this.uf = data.uf;
        this.complemento = data.complemento;
        this.numero = data.numero;
    }

}