import 'bootstrap/js/dist/modal.js';
import { View } from './View';

export class DialogoConfirmacaoView extends View<string> {

    template(model: string): string {
        return `<div class="modal" id="confirmacaoModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmacaoModalLabel">Confirma&ccedil;&atilde;o</h5>
                    </div>
                    <div class="modal-body">
                        ${model}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" id="btnConfirmar" class="btn btn-primary">Confirmar</button>
                    </div>
                    </div>
                </div>
                </div>`;
    }
    
    mostra(mensagem: string, acaoConfirma: AcaoConfirma) {
        this.update(mensagem);
        $('#btnConfirmar').click(acaoConfirma);
        $('#confirmacaoModal').modal({
            backdrop: true,
            show: true
        });
    }
    
    fecha() {
        $('#confirmacaoModal').modal('hide');
    }
    
}

export interface AcaoConfirma {
    (acao: void): void;
}
