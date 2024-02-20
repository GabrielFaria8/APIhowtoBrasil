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
exports.AlteraMoradiaDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AlteraMoradiaDTO {
}
exports.AlteraMoradiaDTO = AlteraMoradiaDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Moradia Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Casa',
        description: `A informação sobre moradia é utilizada para identificar a localização do terreno.`,
    }),
    __metadata("design:type", String)
], AlteraMoradiaDTO.prototype, "moradia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Paschoalotto ',
        description: `O nome é utilizado para identificar o estabelecimento em tela, cadastro e outros contextos.`,
    }),
    __metadata("design:type", String)
], AlteraMoradiaDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Numero Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: "(00)00000-0000",
        description: `O número de telefone é usado para contato com o estabelecimento.`,
    }),
    __metadata("design:type", String)
], AlteraMoradiaDTO.prototype, "Numero", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Horario Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Dás 14:00 até 22:0',
        description: `O horário é usado para especificar o horário de funcionamento do estabelecimento.`,
    }),
    __metadata("design:type", String)
], AlteraMoradiaDTO.prototype, "Horario", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link do endereço Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Bauru Empregos',
        description: `O link do endereço é usado identificar o endereço do estabelecimento no maps.`,
    }),
    __metadata("design:type", String)
], AlteraMoradiaDTO.prototype, "LinkMaps", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Horario Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Dás 14:00 até 22:0',
        description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
    }),
    __metadata("design:type", String)
], AlteraMoradiaDTO.prototype, "linkGoverno", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Horario Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Dás 14:00 até 22:0',
        description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
    }),
    __metadata("design:type", String)
], AlteraMoradiaDTO.prototype, "linkCorrelatos", void 0);
//# sourceMappingURL=atualiza.moradia.dto.js.map