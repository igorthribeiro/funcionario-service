System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FuncionarioService;
    return {
        setters: [],
        execute: function () {
            FuncionarioService = class FuncionarioService {
                constructor() {
                    this._urlBase = 'http://localhost:8080/funcionario-service/';
                }
                gravaFuncionario(handler, funcionario) {
                    return fetch(this._urlBase.concat('grava'), {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(funcionario.toObject())
                    })
                        .then(rs => handler(rs))
                        .then(() => true)
                        .catch((err) => {
                        throw new Error(`Erro ao obter serviço: ${err.message}`);
                    });
                }
            };
            exports_1("FuncionarioService", FuncionarioService);
        }
    };
});
