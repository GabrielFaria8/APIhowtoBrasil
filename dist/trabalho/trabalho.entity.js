"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabalhoEntity = void 0;
class TrabalhoEntity {
    constructor(id, trabalho, nome, endereco, Numero, Horario) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.Numero = Numero;
        this.Horario = Horario;
        this.trabalho = trabalho;
    }
    validarUsuario() {
        var retorno = [];
        if (this.nome == "") {
            retorno.push("endereco inválido ou vazio");
        }
        if (this.endereco == "") {
            retorno.push("endereco inválido ou vazio");
        }
        if (this.Numero == "") {
            retorno.push("Numero inválida ou vazia");
        }
        if (this.Horario == "") {
            retorno.push("Horario inválido ou vazio");
        }
        if (this.trabalho == "") {
            retorno.push("trabalho inválido ou vazio");
        }
        return retorno;
    }
}
exports.TrabalhoEntity = TrabalhoEntity;
//# sourceMappingURL=trabalho.entity.js.map