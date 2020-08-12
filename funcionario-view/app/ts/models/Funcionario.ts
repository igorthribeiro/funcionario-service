
export class Funcionario {

    constructor(private _codigo: number,
                private _nome: string,
                private _sexo: string,
                private _idade: number,
                private _cidade:string,
                private _estado: string,
                private _salario: number) {
    }

    get codigo() {
        return this._codigo
    }

    get nome() {
        return this._nome
    }

    get sexo() {
        return this._sexo;
    }

    get idade() {
        return this._idade;
    }

    get cidade() {
        return this._cidade;
    }

    get estado() {
        return this._estado;
    }

    get salario() {
        return this._salario;
    }

    toObject():Object {
        return {
            codigo: this._codigo,
            nome: this._nome,
            sexo: this._sexo,
            idade: this._idade,
            cidade: this._cidade,
            estado: this._estado,
            salario: this._salario
        };        
    }

}