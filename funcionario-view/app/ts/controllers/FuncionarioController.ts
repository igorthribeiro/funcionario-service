import { Funcionario } from '../models/index'
import { FuncionarioService, HandlerFunction } from '../services/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { DialogoConfirmacaoView, MensagemView, FuncionariosView } from '../views/index';
import { Funcionarios } from '../models/index';

export class FuncionarioController {

    @domInject('.form')
    private _form: JQuery
    
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

    private _funcionarios = new Funcionarios();
    private _funcionariosView = new FuncionariosView('#funcionariosView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _dialogConfirmacaoView = new DialogoConfirmacaoView('#dialogoView');
    private _service = new FuncionarioService();

    private _isOK: HandlerFunction = (res:Response) => {
        if (res.ok) {
            return res;
        } else {
            throw new Error(res.statusText);
        }            
    }

    constructor() {
        this.lista();
    }

    limpaForm() {
        this._form.each((i:number, e:any) => e.reset());
        this.goTop();
    }

    goTop() {
        scrollTo(0,0);
        this._inputNome.focus();
    }

    @throttle()
    busca(value: string) {
        this._service
            .buscaFuncionarios(this._isOK, parseInt(value))
            .then(funcionario => {
                this.populate(this._form, JSON.stringify(funcionario))

                this.goTop();

            });
    }

    populate(frm: JQuery, data: string) {
        $.each(JSON.parse(data), (k, v) => {
            //localiza o elemento no frm e altera o valor
            $(`[name=${k}]`, frm).val(v); 
        });
    };
    
    @throttle()
    grava() {       
        const funcionario = new Funcionario(
            parseInt(this._inputCodigo.val()),
            this._inputNome.val(),
            this._inputSexo.val(),
            parseInt(this._inputIdade.val()),
            this._inputCidade.val(), 
            this._inputEstado.val(), 
            parseFloat(this._inputSalario.val())
        );

        this._service.gravaFuncionario(this._isOK,funcionario)
            .then(r => {
                if (r == true) {
                    this.lista();
                    this._mensagemView.mostra('Funcionário gravado!');

                    this.limpaForm();
                }
            });
    }

    @throttle()
    remove(valor: string) { 
        let acaoConfirma = () => {
            this._service.removeFuncionario(this._isOK, parseInt(valor))
                .then(r => {
                    if (r == true) {
                        this.lista();
                        this._mensagemView.mostra('Funcionário excluído!');
                        
                        this.goTop();
                    }
                });
            this._dialogConfirmacaoView.fecha();
        };
        
        this._dialogConfirmacaoView.mostra(`Confirma a exclusão do funcionário #${valor}?`, acaoConfirma);

    } 

    @throttle()
    lista() {
        this._service
            .listaFuncionarios(this._isOK)
            .then(funcionarios => {
                this._funcionarios = new Funcionarios();
                funcionarios
                    .forEach(funcionario => this._funcionarios.adiciona(funcionario));
                
                this._funcionariosView.update(this._funcionarios);

                $('.edita').click((e:Event) => {
                    const elemento: Element = <HTMLElement> e.target;
                    this.busca(elemento.getAttribute('value'));
                });
                
                $('.deleta').click((e:Event) => {
                    const elemento: Element = <HTMLElement> e.target;
                    this.remove(elemento.getAttribute('value'));
                });
            });
    }
}