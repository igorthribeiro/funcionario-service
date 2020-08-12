import { Funcionario } from './index';

export class Funcionarios {

    private funcionarios:Funcionario[] = []

    adiciona(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
    }

    
    paraArray():Funcionario[] { //boa prática
        return ([] as Funcionario[]).concat(this.funcionarios);
    }
}