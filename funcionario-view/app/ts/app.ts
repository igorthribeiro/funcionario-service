import { FuncionarioController } from './controllers/FuncionarioController'
const controller = new FuncionarioController();
$('.form').submit(controller.grava.bind(controller));
//$('#botao-importa').click(controller.importaDados.bind(controller));