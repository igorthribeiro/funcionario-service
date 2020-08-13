import { FuncionarioController } from './controllers/FuncionarioController'
const controller = new FuncionarioController();
$('.form').submit(controller.grava.bind(controller));
$('#botao-limpa').click(controller.limpaForm.bind(controller));