import { Funcionario } from '../models/Funcionario';
import { post } from 'jquery';

export class FuncionarioService {

    private _urlBase = 'http://localhost:8080/funcionario-service/';

    gravaFuncionario (handler: HandlerFunction, funcionario: Funcionario):Promise<boolean>  {
        return fetch(
            this._urlBase.concat('grava'),
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(funcionario.toObject())
            })
            .then(rs => handler(rs))
            .then(() => true)
            .catch((err: Error) => {
                throw new Error(`Erro ao obter serviço: ${err.message}`)
            });
    }


}

export interface HandlerFunction {

    (res: Response): Response;

}

