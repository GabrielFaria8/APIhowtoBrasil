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
exports.LoginUsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const strongpass_validator_1 = require("../validator/strongpass.validator");
class LoginUsuarioDTO {
}
exports.LoginUsuarioDTO = LoginUsuarioDTO;
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: "email é inválido" }),
    (0, swagger_1.ApiProperty)({
        example: 'teste@teste.com',
        description: `Email utilizado no cadastro.`,
    }),
    __metadata("design:type", String)
], LoginUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: "Senha precisa de pelo menos 6 digitos" }),
    (0, strongpass_validator_1.SenhaForte)({ message: "Senha muito fraca" }),
    (0, swagger_1.ApiProperty)({
        example: 'Asd@444555666',
        description: `Senha utilizada no cadastro.`,
    }),
    __metadata("design:type", String)
], LoginUsuarioDTO.prototype, "senha", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'moradia',
        description: `O nome é utilizado para identificar o tipo em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], LoginUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Ultimo nome Não pode ser vazi' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: "Visto de Trabalho",
        description: `O último nome é utilizado para identificar o usuário em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], LoginUsuarioDTO.prototype, "ultimoNome", void 0);
//# sourceMappingURL=login.usuario.dto.js.map