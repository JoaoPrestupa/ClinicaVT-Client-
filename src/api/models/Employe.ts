export type EmployeEntity = {
    id: string;
    nome: string;
    funcao: string;
    salario: number;
    dataEntrada: string;
    ativo: boolean;
}

export class Employe {

    readonly id?: string;
    readonly nome: string;
    readonly funcao: string;
    readonly salario: number;
    readonly dataEntrada: string;
    readonly ativo: boolean;

    constructor(data: EmployeEntity) {
        this.id = data.id || 'ID not provided';
        this.nome = data.nome;
        this.funcao = data.funcao;
        this.salario = data.salario;
        this.dataEntrada = data.dataEntrada;
        this.ativo = data.ativo;
    }

}