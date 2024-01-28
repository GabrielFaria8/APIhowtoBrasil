"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaudeEntity = void 0;
class SaudeEntity {
    constructor(id, saude, nome, endereco, Numero, Horario) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.Numero = Numero;
        this.Horario = Horario;
        this.saude = saude;
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
        if (this.saude == "") {
            retorno.push("saude inválido ou vazio");
        }
        return retorno;
    }
}
exports.SaudeEntity = SaudeEntity;
//# sourceMappingURL=saude.entity.js.map