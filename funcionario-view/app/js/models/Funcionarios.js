System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Funcionarios;
    return {
        setters: [],
        execute: function () {
            Funcionarios = class Funcionarios {
                constructor() {
                    this.funcionarios = [];
                }
                adiciona(funcionario) {
                    this.funcionarios.push(funcionario);
                }
                paraArray() {
                    return [].concat(this.funcionarios);
                }
            };
            exports_1("Funcionarios", Funcionarios);
        }
    };
});
