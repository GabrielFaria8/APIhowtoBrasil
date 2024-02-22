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
exports.criaTrabalhoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class criaTrabalhoDTO {
}
exports.criaTrabalhoDTO = criaTrabalhoDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'trabalho Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Telemarketing',
        description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
    }),
    __metadata("design:type", String)
], criaTrabalhoDTO.prototype, "trabalho", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'tipo Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 3,
        description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
    }),
    __metadata("design:type", Number)
], criaTrabalhoDTO.prototype, "tipos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Paschoalotto ',
        description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], criaTrabalhoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'cidade Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'bauru-SP',
        description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
    }),
    __metadata("design:type", String)
], criaTrabalhoDTO.prototype, "cidadeEstado", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Pré requisitos Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Ingles',
        description: `Os pré requisitos são usados para identificar o que é necessário para entrar em uma vaga de emprego.`,
    }),
    __metadata("design:type", String)
], criaTrabalhoDTO.prototype, "preRequisitos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Site da empresa Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Paschoalotto',
        description: `O link do site é usado identificar o site da empresa.`,
    }),
    __metadata("design:type", String)
], criaTrabalhoDTO.prototype, "siteEmpresa", void 0);
//# sourceMappingURL=trabalho.dto.js.map