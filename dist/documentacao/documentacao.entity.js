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
exports.DocumentacaoEntity = void 0;
const common_1 = require("@nestjs/common");
const interesses_entity_1 = require("../interesses/interesses.entity");
let DocumentacaoEntity = class DocumentacaoEntity extends interesses_entity_1.InteressesEntity {
    constructor(id, tipos, nome, Numero, Horario, LinkMaps, documentacao, linkGoverno) {
        super(id, tipos, nome, Numero, Horario, LinkMaps);
        this.documentacao = documentacao;
        this.linkGoverno = linkGoverno;
    }
};
exports.DocumentacaoEntity = DocumentacaoEntity;
exports.DocumentacaoEntity = DocumentacaoEntity = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String, Number, String, String, String, String, String, String])
], DocumentacaoEntity);
//# sourceMappingURL=documentacao.entity.js.map