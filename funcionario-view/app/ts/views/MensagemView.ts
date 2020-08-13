import { View } from './index';

export class MensagemView extends View<string> {

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }

    mostra(mensagem: string) {
        this.getElemento().fadeIn();
        this.update(mensagem);
        this.getElemento().fadeOut(3000);
    }
}