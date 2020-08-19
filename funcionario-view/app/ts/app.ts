import { FuncionarioController } from './controllers/FuncionarioController'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal.js'


const controller = new FuncionarioController();
$('.form').submit(controller.grava.bind(controller));
$('#botao-limpa').click(controller.limpaForm.bind(controller));