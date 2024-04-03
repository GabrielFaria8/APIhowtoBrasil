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
exports.USUARIO = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
let USUARIO = class USUARIO {
    login(senha) {
        return bcrypt.compareSync(senha, this.senha);
    }
    trocasenha(senha) {
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }
};
exports.USUARIO = USUARIO;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], USUARIO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], USUARIO.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], USUARIO.prototype, "ultimoNome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], USUARIO.prototype, "statusMigratorio", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], USUARIO.prototype, "interesses", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], USUARIO.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], USUARIO.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], USUARIO.prototype, "foto", void 0);
exports.USUARIO = USUARIO = __decorate([
    (0, typeorm_1.Entity)()
], USUARIO);
//# sourceMappingURL=usuario.entity.js.map