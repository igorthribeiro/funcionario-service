System.register(["./controllers/FuncionarioController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FuncionarioController_1, controller;
    return {
        setters: [
            function (FuncionarioController_1_1) {
                FuncionarioController_1 = FuncionarioController_1_1;
            }
        ],
        execute: function () {
            controller = new FuncionarioController_1.FuncionarioController();
            $('.form').submit(controller.grava.bind(controller));
            $('tr').click(function () {
                alert(this.value());
            });
        }
    };
});
