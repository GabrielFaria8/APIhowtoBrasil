"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
const bcrypt = require("bcrypt");
class UsuarioEntity {
    constructor(id, nome, idade, cidade, email, telefone, senha) {
        const saltOrRounds = 10;
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }
    login(senha) {
        return bcrypt.compareSync(senha, this.senha);
    }
    trocaSenha(senha) {
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }
}
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map