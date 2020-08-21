import { View } from './index';
import 'bootstrap/js/dist/modal.js';

export class DialogoConfirmacaoView extends View<string> {

    template(model: string): string {
        return `<!-- Modal -->
                <div class="modal fade" id="confirmacaoModal" tabindex="-1" role="dialog" aria-labelledby="confirmacaoModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmacaoModalLabel">Confirma&ccedil;&atilde;o</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
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
