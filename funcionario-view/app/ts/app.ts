import { FuncionarioController } from './controllers/FuncionarioController'
const controller = new FuncionarioController();
$('.form').submit(controller.grava.bind(controller));
$('tr').click(function() {
    alert(this.value());
})
//$('#botao-importa').click(controller.importaDados.bind(controller));