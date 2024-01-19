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
exports.criaUsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class criaUsuarioDTO {
}
exports.criaUsuarioDTO = criaUsuarioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "nome Não pode ser vazio" }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Object)
], criaUsuarioDTO.prototype, "idade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: "email é inválido" }),
    (0, email_unico_validator_1.EmailUnico)({ message: "O email informado já existe" }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: "Senha precisa de pelo menos 6 digitos" }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "senha", void 0);
//# sourceMappingURL=usuario.dto.js.map