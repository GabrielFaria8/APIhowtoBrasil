"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabalhoEntity = void 0;
const common_1 = require("@nestjs/common");
const interesses_entity_1 = require("../interesses/interesses.entity");
let TrabalhoEntity = class TrabalhoEntity extends interesses_entity_1.InteressesEntity {
    constructor(id, trabalho, PreRequisitos, SiteEmpresa) {
        id = id;
        trabalho = trabalho;
        PreRequisitos = PreRequisitos;
        SiteEmpresa = SiteEmpresa;
        super("", "trabalhos", "", "", "", "trabalho");
    }
    validarUsuario() {
        var retorno = [];
        if (this.nome == "") {
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
        if (this.LinkMaps == "") {
            retorno.push("Link de endereço inválido ou vazio");
        }
        if (this.PreRequisitos == "") {
            retorno.push("Pré requisitos inválido ou vazio");
        }
        if (this.SiteEmpresa == "") {
            retorno.push("Site da empresa inválido ou vazio");
        }
        return retorno;
    }
};
exports.TrabalhoEntity = TrabalhoEntity;
exports.TrabalhoEntity = TrabalhoEntity = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String, String, String, String])
], TrabalhoEntity);
//# sourceMappingURL=trabalho.entity.js.map