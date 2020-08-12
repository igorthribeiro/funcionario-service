import { Funcionario } from '../models/index'
import { FuncionarioService, HandlerFunction } from '../services/index';
import { domInject, throttle } from '../helpers/decorators/index';

export class FuncionarioController {

    @domInject('#codigo')
    private _inputCodigo: JQuery;

    @domInject('#nome')
    private _inputNome: JQuery;

    @domInject('#sexo')
    private _inputSexo: JQuery;

    @domInject('#idade')
    private _inputIdade: JQuery;

    @domInject('#cidade')
    private _inputCidade: JQuery;

    @domInject('#estado')
    private _inputEstado: JQuery;

    @domInject('#salario')
    private _inputSalario: JQuery;

    /*
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    */
    private _service = new FuncionarioService();

    constructor() {
        //this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    grava() {        

        const isOK: HandlerFunction = (res:Response) => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }            
        }

        const funcionario = new Funcionario(
            parseInt(this._inputCodigo.val()),
            this._inputNome.val(),
            this._inputSexo.val(),
            parseInt(this._inputIdade.val()),
            this._inputCidade.val(), 
            this._inputEstado.val(), 
            parseFloat(this._inputSalario.val())
        );

        this._service.gravaFuncionario(isOK,funcionario)
            .then(r => {
                if (r == true) {
                    alert('Gravado!')
                }
            });

       
        //this._negociacoesView.update(this._negociacoes);
        //this._mensagemView.update('Negociação adicionada!');       
    } 


    /*
    @throttle()
    importaDados() {
        const isOK: HandlerFunction = (res:Response) => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }            
        }
        this._service
            .opterNegociacoes(isOK)
            .then(negociacoesParaImportar => {
                const negociacoesJaImportadas = this._negociacoes.paraArray();
                negociacoesParaImportar
                    .filter(negociacao => 
                        !negociacoesJaImportadas.some(jaImportada =>
                             negociacao.ehIgual(jaImportada)))
                    .forEach(negociacao => 
                        this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            });
    }
    */

}