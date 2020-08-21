import { View } from './index';
import { Funcionarios } from '../models/index';

export class FuncionariosView extends View<Funcionarios> {

    template(model: Funcionarios): string {
        return `
        <table class="table table-sm table-hover small">
            <thead class="thead-light">
                <tr>
                    <th class="text-center">#</th>
                    <th>NOME</th>
                    <th>CIDADE</th>
                    <th>UF</th>
                    <th>SALÁRIO</th>
                    <th class="text-center">EDITAR</th>
                    <th class="text-center">EXCLUIR</th>
                </tr>
            </thead>
            <tbody>
                ${model.paraArray().map(f => 
                    `
                        <tr>
                            <th class="text-center">${(f.codigo).toString().padStart(4,"0")}</th>
                            <td class="text-capitalize">${f.nome}</td>
                            <td class="text-uppercase">${f.cidade}</td>
                            <td class="text-uppercase">${f.estado}</td>
                            <td>${new Intl.NumberFormat('pt-BR',
                                    { style: 'currency', currency: 'BRL' }).format(f.salario)}</td>
                            <td class="text-center">                                
                                <i class="edita far fa-edit fa-lg" value="${f.codigo}"></i>
                            </td>
                            <td class="text-center">                                
                                <i class="deleta far fa-trash-alt fa-lg" value="${f.codigo}"></i>
                            </td>
                        </tr>
                    `
                ).join('')}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
    `;
    }

}