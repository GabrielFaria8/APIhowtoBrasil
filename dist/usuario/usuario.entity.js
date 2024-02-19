"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntity = void 0;
const bcrypt = require("bcrypt");
class UsuarioEntity {
    constructor(id, nome, ultimoNome, statusMigratorio, interesses, email, senha, foto) {
        const saltOrRounds = 10;
        this.id = id;
        this.nome = nome;
        this.ultimoNome = ultimoNome;
        this.statusMigratorio = statusMigratorio;
        this.interesses = interesses;
        this.email = email;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
        this.foto = foto;
    }
    login(senha) {
        return bcrypt.compareSync(senha, this.senha);
    }
    trocasenha(senha) {
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }
}
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map