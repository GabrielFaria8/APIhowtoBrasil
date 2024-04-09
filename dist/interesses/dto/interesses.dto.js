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
], criaInteressesDTO.prototype, "tipos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Trabalho',
        description: `O nome é utilizado para identificar o tipo em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Numero Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '(00)00000-0000',
        description: `O número de telefone é usado para contato com o estabelecimento.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Horario Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Dás 14:00 até 22:00',
        description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "horario", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Rua xxx, bairro xxx',
        description: `O Link é usado para especificar o endereço do estabelecimento.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "linkMaps", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'trabalho Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Telemarketing',
        description: `A informação sobre trabalho é utilizada para identificar a área específica de trabalho à qual o estabelecimento pertence.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "trabalho", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Salario Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '1500,00',
        description: `Salario refere-se ao valor da remuneração da vaga.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "salario", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Pré requisitos Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Ingles',
        description: `Os pré requisitos são usados para identificar o que é necessário para entrar em uma vaga de emprego.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "preRequisitos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Site da empresa Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Paschoalotto.com',
        description: `O link do site é usado identificar o site da empresa.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "siteEmpresa", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "foto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'vaga para atendente',
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "descricao", void 0);
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
], criaInteressesDTO.prototype, "documento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link do site Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Gov.br',
        description: `O link do site é usado identificar o site do Orgão Governamental.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "linkGoverno", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link correlato não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://www.moradiabrasil.com.br/',
        description: `O link correlato possui função de localizar hospedagens de sites online onde é possível localizar habitações.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "linkCorrelato", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Área  não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '47m²',
        description: `A área é utilizada para se dar uma base do tamanho da residência.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "area", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quartos não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 2,
        description: `Específica quantidade de quartos na residência.`,
    }),
    __metadata("design:type", Number)
], criaInteressesDTO.prototype, "quartos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Valor não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'R$ 600,00',
        description: `Específica o valor da residência.`,
    }),
    __metadata("design:type", String)
], criaInteressesDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Banheiro não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: `Específica a quantidade de banheiros na residência.`,
    }),
    __metadata("design:type", Number)
], criaInteressesDTO.prototype, "banheiro", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Vagas não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", Number)
], criaInteressesDTO.prototype, "vagas", void 0);
//# sourceMappingURL=interesses.dto.js.map