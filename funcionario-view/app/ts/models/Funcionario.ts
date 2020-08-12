export class Funcionario {
 
    constructor(
        readonly codigo: number,
        readonly nome: string,
        readonly sexo: string,
        readonly idade: number,
        readonly cidade:string,
        readonly estado: string,
        readonly salario: number) {
    }

}