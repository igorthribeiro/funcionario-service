System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Funcionario;
    return {
        setters: [],
        execute: function () {
            Funcionario = class Funcionario {
                constructor(_codigo, _nome, _sexo, _idade, _cidade, _estado, _salario) {
                    this._codigo = _codigo;
                    this._nome = _nome;
                    this._sexo = _sexo;
                    this._idade = _idade;
                    this._cidade = _cidade;
                    this._estado = _estado;
                    this._salario = _salario;
                }
                get codigo() {
                    return this._codigo;
                }
                get nome() {
                    return this._nome;
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
                toObject() {
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
            };
            exports_1("Funcionario", Funcionario);
        }
    };
});
