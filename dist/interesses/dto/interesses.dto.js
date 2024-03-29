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
exports.criaInteressesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class criaInteressesDTO {
}
exports.criaInteressesDTO = criaInteressesDTO;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tipo não pode ser vazio' }),
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: `A informação sobre interesses é utilizada para identificar a área específica  à qual o tipo pertence.`,
    }),
    __metadata("design:type", Number)
], criaInteressesDTO.prototype, "TIPOS", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome Não pode ser vazio' }),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Trabalho',
        description: `O nome é utilizado para identificar o tipo em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "NOME", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Numero Não pode ser vazio' }),
    (0, swagger_1.ApiPropertyOptional)({
        example: '(00)00000-0000',
        description: `O número de telefone é usado para contato com o estabelecimento.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "NUMERO", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Horario Não pode ser vazio' }),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Dás 14:00 até 22:00',
        description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "HORARIO", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link Não pode ser vazio' }),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Rua xxx, bairro xxx',
        description: `O Link é usado para especificar o endereço do estabelecimento.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "LINKMAPS", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'trabalho Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Telemarketing',
        description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "TRABALHO", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Salario Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '1500,00',
        description: `Salario refere-se ao valor da remuneração da vaga.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "SALARIO", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Pré requisitos Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Ingles',
        description: `Os pré requisitos são usados para identificar o que é necessário para entrar em uma vaga de emprego.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "PREREQUISITOS", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Site da empresa Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Paschoalotto.com',
        description: `O link do site é usado identificar o site da empresa.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "SITEEMPRESA", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Foto não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "FOTO", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'vaga para atendente',
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "DESCRICAO", void 0);
//# sourceMappingURL=interesses.dto.js.map