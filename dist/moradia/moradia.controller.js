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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoradiaController = void 0;
const common_1 = require("@nestjs/common");
const moradia_dm_1 = require("./moradia.dm");
const lista_moradia_dto_1 = require("./dto/lista.moradia.dto");
const moradia_entity_1 = require("./moradia.entity");
const uuid_1 = require("uuid");
const moradia_dto_1 = require("./dto/moradia.dto");
const swagger_1 = require("@nestjs/swagger");
const atualiza_moradia_dto_1 = require("./dto/atualiza.moradia.dto");
let MoradiaController = class MoradiaController {
    constructor(clsmoradiaArmazenados) {
        this.clsmoradiaArmazenados = clsmoradiaArmazenados;
    }
    async Retornomoradia() {
        const moradiaListados = await this.clsmoradiaArmazenados.Moradia;
        const listaRetorno = moradiaListados.map((moradia) => new lista_moradia_dto_1.ListaMoradiaDTO(moradia.id, moradia.nome, moradia.endereco, moradia.linkCorrelatos, moradia.area, moradia.quartos, moradia.valor, moradia.banheiro, moradia.vagas, moradia.foto, moradia.interacao, moradia.subInteracao));
        return listaRetorno;
    }
    async removemoradia(id) {
        const moradiaRemovido = await this.clsmoradiaArmazenados.removeMoradia(id);
        return {
            usuario: moradiaRemovido,
            message: 'Moradia removido',
        };
    }
    async atualizamoradia(id, novosDadados) {
        const moradiaAtualizado = await this.clsmoradiaArmazenados.atualizaMoradia(id, novosDadados);
        return {
            moradia: moradiaAtualizado,
            message: 'Moradia atualizado',
        };
    }
    async criamoradia(dadosmoradia) {
        var moradia = new moradia_entity_1.MoradiaEntity((0, uuid_1.v4)(), dadosmoradia.tipos, dadosmoradia.nome, dadosmoradia.interacao, dadosmoradia.subInteracao, dadosmoradia.endereco, dadosmoradia.linkCorrelatos, dadosmoradia.area, dadosmoradia.quartos, dadosmoradia.valor, dadosmoradia.banheiro, dadosmoradia.vagas, dadosmoradia.foto);
        this.clsmoradiaArmazenados.AdicionarMoradia(moradia);
        var retorno = {
            id: moradia.id,
            message: 'Moradia Criado',
        };
        return retorno;
    }
};
exports.MoradiaController = MoradiaController;
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Retorna a lista de cadastros de moradia existentes.',
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoradiaController.prototype, "Retornomoradia", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Retorna que houve sucesso ao excluir o cadastro de educação.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno durante a exclusão.',
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoradiaController.prototype, "removemoradia", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Retorna que houve sucesso ao alterar o cadastro de educação.',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno.',
    }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_moradia_dto_1.AlteraMoradiaDTO]),
    __metadata("design:returntype", Promise)
], MoradiaController.prototype, "atualizamoradia", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Retorna que houve sucesso ao cadastrar informações de educação e inclui o ID criado.',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [moradia_dto_1.criaMoradiaDTO]),
    __metadata("design:returntype", Promise)
], MoradiaController.prototype, "criamoradia", null);
exports.MoradiaController = MoradiaController = __decorate([
    (0, common_1.Controller)('/moradia'),
    (0, swagger_1.ApiTags)('moradia'),
    __metadata("design:paramtypes", [moradia_dm_1.MoradiaArmazenados])
], MoradiaController);
//# sourceMappingURL=moradia.controller.js.map