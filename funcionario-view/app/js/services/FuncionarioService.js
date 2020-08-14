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
                async gravaFuncionario(handler, funcionario) {
                    try {
                        const rs = await fetch(this._urlBase.concat('grava'), {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(funcionario)
                        })
                            .then(rs => handler(rs))
                            .then(() => true);
                        return rs;
                    }
                    catch (err) {
                        throw new Error(`Erro ao obter serviço: ${err.message}`);
                    }
                }
                async buscaFuncionarios(handler, id) {
                    try {
                        const funcionario = await fetch(this._urlBase.concat(`get/${id}`))
                            .then(res => handler(res))
                            .then(res => res.json());
                        return funcionario;
                    }
                    catch (err) {
                        throw new Error(`Erro ao obter serviço: ${err.message}`);
                    }
                }
                async listaFuncionarios(handler) {
                    try {
                        const funcionarios = await fetch(this._urlBase.concat('lista'))
                            .then(res => handler(res))
                            .then(res => res.json());
                        return funcionarios;
                    }
                    catch (err) {
                        throw new Error(`Erro ao obter serviço: ${err.message}`);
                    }
                }
                async removeFuncionario(handler, id) {
                    try {
                        const rs = await fetch(this._urlBase.concat(`remove/${id}`), { method: 'DELETE' })
                            .then(rs => handler(rs))
                            .then(() => true);
                        return rs;
                    }
                    catch (err) {
                        throw new Error(`Erro ao obter serviço: ${err.message}`);
                    }
                }
            };
            exports_1("FuncionarioService", FuncionarioService);
        }
    };
});
