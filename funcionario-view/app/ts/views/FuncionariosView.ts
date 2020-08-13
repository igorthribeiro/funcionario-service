import { View } from './View';
import { Funcionarios } from '../models/Funcionarios';

export class FuncionariosView extends View<Funcionarios> {

    template(model: Funcionarios): string {
        return `
        <table class="table table-hover">
            <thead>
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
                            <td>${f.nome}</td>
                            <td>${f.cidade}</td>
                            <td>${f.estado}</td>
                            <td>${new Intl.NumberFormat('pt-BR',
                                    { style: 'currency', currency: 'BRL' }).format(f.salario)}</td>
                            <td class="text-center">
                                <img class="edita" value="${f.codigo}" src="res/img/update.png" alt="Alterar" width="20" height="20"/>
                            </td>
                            <td class="text-center">
                                <img class="deleta" value="${f.codigo}" src="res/img/delete.png" alt="Alterar" width="20" height="20"/>
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