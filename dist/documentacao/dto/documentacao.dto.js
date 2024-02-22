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
exports.criaDocumentacaoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class criaDocumentacaoDTO {
}
exports.criaDocumentacaoDTO = criaDocumentacaoDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Documentação não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Passaporte',
        description: `A informação sobre documentação é primariamente um auxílio para identificar quais documentos são pedidos em território nacional
    e onde cada uma deve ser entregue para a autoridade competente.`,
    }),
    __metadata("design:type", String)
], criaDocumentacaoDTO.prototype, "documentacao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tipos não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 4,
        description: `A informação sobre documentação é primariamente um auxílio para identificar quais documentos são pedidos em território nacional
    e onde cada uma deve ser entregue para a autoridade competente.`,
    }),
    __metadata("design:type", Number)
], criaDocumentacaoDTO.prototype, "tipos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Fórum da comarca',
        description: `O nome é utilizado para identificar o órgão competente e suas funções na mediação para com as regularizações.`,
    }),
    __metadata("design:type", String)
], criaDocumentacaoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link do site Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Gov.br',
        description: `O link do site é usado identificar o site do Orgão Governamental.`,
    }),
    __metadata("design:type", String)
], criaDocumentacaoDTO.prototype, "linkGoverno", void 0);
//# sourceMappingURL=documentacao.dto.js.map