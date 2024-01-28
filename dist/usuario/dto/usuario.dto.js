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
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
const strongpass_validator_1 = require("../validacao/strongpass.validator");
class criaUsuarioDTO {
}
exports.criaUsuarioDTO = criaUsuarioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Carlos',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Visto de Trabalho',
        description: `O último nome é utilizado para identificar o usuário em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "ultimoNome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Edurado',
        description: `O status migratório é utilizado para compreender o motivo da imigração do usuário para o Brasil.`,
    }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "statusMigrat\u00F3rio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Trabalho',
        description: `Os interesses são utilizados para compreender as necessidades do usuário no Brasil.`,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "interesses", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: 'email é inválido' }),
    (0, email_unico_validator_1.EmailUnico)({ message: 'O email informado já existe' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: "Senha precisa de pelo menos 6 digitos" }),
    (0, strongpass_validator_1.SenhaForte)({ message: "Senha muito fraca" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    }),
    __metadata("design:type", String)
], criaUsuarioDTO.prototype, "senha", void 0);
//# sourceMappingURL=usuario.dto.js.map