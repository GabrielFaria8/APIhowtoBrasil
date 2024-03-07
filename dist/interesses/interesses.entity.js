"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteressesEntity = void 0;
class InteressesEntity {
    constructor(id, tipos, nome, Numero, Horario, LinkMaps, interacao, subInteracao) {
        this.id = id;
        this.nome = nome;
        this.Numero = Numero;
        this.Horario = Horario;
        this.LinkMaps = LinkMaps;
        this.tipos = tipos;
        this.interacao = interacao;
        this.subInteracao = subInteracao;
    }
    transicaoTipos(tipos) {
        if (this.tipos == 1) {
            return (tipos) + 'é igual a saúde';
        }
        if (this.tipos == 2) {
            return (tipos) + 'é igual a educação';
        }
        if (this.tipos == 3) {
            return (tipos) + 'é igual a apoio comunitario';
        }
        else {
            return 'tipo não habilitado';
        }
    }
}
exports.InteressesEntity = InteressesEntity;
//# sourceMappingURL=interesses.entity.js.map