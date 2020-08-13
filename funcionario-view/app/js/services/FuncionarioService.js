System.register([], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
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
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const rs = yield fetch(this._urlBase.concat('grava'), {
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
                    });
                }
                buscaFuncionarios(handler, id) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const funcionario = yield fetch(this._urlBase.concat(`get/${id}`))
                                .then(res => handler(res))
                                .then(res => res.json());
                            return funcionario;
                        }
                        catch (err) {
                            throw new Error(`Erro ao obter serviço: ${err.message}`);
                        }
                    });
                }
                listaFuncionarios(handler) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const funcionarios = yield fetch(this._urlBase.concat('lista'))
                                .then(res => handler(res))
                                .then(res => res.json());
                            return funcionarios;
                        }
                        catch (err) {
                            throw new Error(`Erro ao obter serviço: ${err.message}`);
                        }
                    });
                }
                removeFuncionario(handler, id) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const rs = yield fetch(this._urlBase.concat(`remove/${id}`))
                                .then(rs => handler(rs))
                                .then(() => true);
                            return rs;
                        }
                        catch (err) {
                            throw new Error(`Erro ao obter serviço: ${err.message}`);
                        }
                    });
                }
            };
            exports_1("FuncionarioService", FuncionarioService);
        }
    };
});
