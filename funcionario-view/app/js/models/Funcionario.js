System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Funcionario;
    return {
        setters: [],
        execute: function () {
            Funcionario = class Funcionario {
                constructor(codigo, nome, sexo, idade, cidade, estado, salario) {
                    this.codigo = codigo;
                    this.nome = nome;
                    this.sexo = sexo;
                    this.idade = idade;
                    this.cidade = cidade;
                    this.estado = estado;
                    this.salario = salario;
                }
            };
            exports_1("Funcionario", Funcionario);
        }
    };
});
