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
exports.AlteraTrabalhoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AlteraTrabalhoDTO {
}
exports.AlteraTrabalhoDTO = AlteraTrabalhoDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'trabalho Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Tecnologia',
        description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
    }),
    __metadata("design:type", String)
], AlteraTrabalhoDTO.prototype, "trabalho", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'tipo Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 3,
        description: ``,
    }),
    __metadata("design:type", Number)
], AlteraTrabalhoDTO.prototype, "tipos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Paschoalotto ',
        description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], AlteraTrabalhoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'cidade Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '1500,00',
        description: `Define a remuneração da vaga`,
    }),
    __metadata("design:type", String)
], AlteraTrabalhoDTO.prototype, "salario", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Foto não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
        description: `Define a foto de faixada da empresa`,
    }),
    __metadata("design:type", String)
], AlteraTrabalhoDTO.prototype, "foto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Pré requisitos Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Ingles- avançado ',
        description: `Os pré requisitos são usados para identificar o que é necessário para entrar em uma vaga de emprego.`,
    }),
    __metadata("design:type", String)
], AlteraTrabalhoDTO.prototype, "preRequisitos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Site da empresa Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Paschoalotto.com',
        description: `O link do site é usado identificar o site da empresa.`,
    }),
    __metadata("design:type", String)
], AlteraTrabalhoDTO.prototype, "siteEmpresa", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'vaga para atendente',
        description: `Descrição versa sobre a designação da vaga`,
    }),
    __metadata("design:type", String)
], AlteraTrabalhoDTO.prototype, "descricao", void 0);
//# sourceMappingURL=atualiza.trabalho.dto.js.map