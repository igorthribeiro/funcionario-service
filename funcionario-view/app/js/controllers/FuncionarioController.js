System.register(["../models/index", "../services/index", "../helpers/decorators/index", "../views/index", "../models/Funcionarios"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, Funcionarios_1, FuncionarioController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (Funcionarios_1_1) {
                Funcionarios_1 = Funcionarios_1_1;
            }
        ],
        execute: function () {
            FuncionarioController = class FuncionarioController {
                constructor() {
                    this._funcionarios = new Funcionarios_1.Funcionarios();
                    this._funcionariosView = new index_4.FuncionariosView('#funcionariosView');
                    this._mensagemView = new index_4.MensagemView('#mensagemView');
                    this._service = new index_2.FuncionarioService();
                    this._isOK = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this.lista();
                }
                limpaForm() {
                    this._form.each((i, e) => e.reset());
                    this.goTop();
                }
                goTop() {
                    scrollTo(0, 0);
                    this._inputNome.focus();
                }
                busca(id) {
                    this._service
                        .buscaFuncionarios(this._isOK, id)
                        .then(funcionario => {
                        this._inputCodigo.val(funcionario.codigo);
                        this._inputNome.val(funcionario.nome);
                        this._inputSexo.val(funcionario.sexo);
                        this._inputIdade.val(funcionario.idade);
                        this._inputCidade.val(funcionario.cidade);
                        this._inputEstado.val(funcionario.estado);
                        this._inputSalario.val(funcionario.salario);
                        this.goTop();
                    });
                }
                grava() {
                    const funcionario = new index_1.Funcionario(parseInt(this._inputCodigo.val()), this._inputNome.val(), this._inputSexo.val(), parseInt(this._inputIdade.val()), this._inputCidade.val(), this._inputEstado.val(), parseFloat(this._inputSalario.val()));
                    this._service.gravaFuncionario(this._isOK, funcionario)
                        .then(r => {
                        if (r == true) {
                            this.lista();
                            this._mensagemView.mostra('Funcionario gravado!');
                            this.limpaForm();
                        }
                    });
                }
                remove(id) {
                    let result = confirm("Deseja realmente excluir esse funcinário?");
                    if (result) {
                        this._service.removeFuncionario(this._isOK, id)
                            .then(r => {
                            if (r == true) {
                                this.lista();
                                this._mensagemView.mostra('Funcionario excluido!');
                                this.goTop();
                            }
                        });
                    }
                }
                lista() {
                    this._service
                        .listaFuncionarios(this._isOK)
                        .then(funcionarios => {
                        this._funcionarios = new Funcionarios_1.Funcionarios();
                        funcionarios
                            .forEach(funcionario => this._funcionarios.adiciona(funcionario));
                        this._funcionariosView.update(this._funcionarios);
                        $('.edita').click((e) => {
                            const img = e.target;
                            this.busca(parseInt(img.getAttribute('value')));
                        });
                        $('.deleta').click((e) => {
                            const img = e.target;
                            this.remove(parseInt(img.getAttribute('value')));
                        });
                    });
                }
            };
            __decorate([
                index_3.domInject('.form')
            ], FuncionarioController.prototype, "_form", void 0);
            __decorate([
                index_3.domInject('#codigo')
            ], FuncionarioController.prototype, "_inputCodigo", void 0);
            __decorate([
                index_3.domInject('#nome')
            ], FuncionarioController.prototype, "_inputNome", void 0);
            __decorate([
                index_3.domInject('#sexo')
            ], FuncionarioController.prototype, "_inputSexo", void 0);
            __decorate([
                index_3.domInject('#idade')
            ], FuncionarioController.prototype, "_inputIdade", void 0);
            __decorate([
                index_3.domInject('#cidade')
            ], FuncionarioController.prototype, "_inputCidade", void 0);
            __decorate([
                index_3.domInject('#estado')
            ], FuncionarioController.prototype, "_inputEstado", void 0);
            __decorate([
                index_3.domInject('#salario')
            ], FuncionarioController.prototype, "_inputSalario", void 0);
            __decorate([
                index_3.throttle()
            ], FuncionarioController.prototype, "busca", null);
            __decorate([
                index_3.throttle()
            ], FuncionarioController.prototype, "grava", null);
            __decorate([
                index_3.throttle()
            ], FuncionarioController.prototype, "remove", null);
            __decorate([
                index_3.throttle()
            ], FuncionarioController.prototype, "lista", null);
            exports_1("FuncionarioController", FuncionarioController);
        }
    };
});
