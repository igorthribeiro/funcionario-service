import { View } from './index';

export class MensagemView extends View<string> {

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }

    mostrar() {
        this.getElemento().fadeIn();
    }
    
    apagar() {
        this.getElemento().fadeOut(3000);
    }

}