import { Funcionario } from '../models/Funcionario';

export class FuncionarioService {

    private _urlBase = 'http://localhost:8080/funcionario-service/';

    async gravaFuncionario (handler: HandlerFunction, funcionario: Funcionario):Promise<boolean>  {
        try {
            const rs = await fetch(
                this._urlBase.concat('grava'),
                {
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
    
    async buscaFuncionarios(handler: HandlerFunction, id:number): Promise<Funcionario> {

        try {
            const funcionario =  await fetch(this._urlBase.concat(`get/${id}`))
                .then(res => handler(res))
                .then(res => res.json());

            return funcionario;
        }
        catch(err) {
            throw new Error(`Erro ao obter serviço: ${err.message}`)
        }
    }

    async listaFuncionarios(handler: HandlerFunction): Promise<Funcionario[]> {

        try {
            const funcionarios =  await fetch(this._urlBase.concat('lista'))
                .then(res => handler(res))
                .then(res => res.json());
            
            return funcionarios;
        }
        catch (err) {
            throw new Error(`Erro ao obter serviço: ${err.message}`)
        }
    }

    async removeFuncionario (handler: HandlerFunction, id:number):Promise<boolean>  {
        
        try {
            const rs = await fetch(this._urlBase.concat(`remove/${id}`))
                .then(rs => handler(rs))
                .then(() => true);

            return rs;
        } catch (err) {
            throw new Error(`Erro ao obter serviço: ${err.message}`)
        }
    }


}

export interface HandlerFunction {

    (res: Response): Response;

}