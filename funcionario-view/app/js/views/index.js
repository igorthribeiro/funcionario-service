System.register(["./View", "./MensagemView", "./FuncionariosView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (View_1_1) {
                exportStar_1(View_1_1);
            },
            function (MensagemView_1_1) {
                exportStar_1(MensagemView_1_1);
            },
            function (FuncionariosView_1_1) {
                exportStar_1(FuncionariosView_1_1);
            }
        ],
        execute: function () {
        }
    };
});
