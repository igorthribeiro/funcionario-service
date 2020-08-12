import { FuncionarioController } from './controllers/FuncionarioController'
const controller = new FuncionarioController();
$('.form').submit(controller.grava.bind(controller));