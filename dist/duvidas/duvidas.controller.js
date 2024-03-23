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
exports.DuvidasController = void 0;
const common_1 = require("@nestjs/common");
const duvidas_dm_1 = require("./duvidas.dm");
const lista_duvidas_dto_1 = require("./dto/lista.duvidas.dto");
const duvidas_entity_1 = require("./duvidas.entity");
const uuid_1 = require("uuid");
const duvidas_dto_1 = require("./dto/duvidas.dto");
const atualiza_duvidas_dto_1 = require("./dto/atualiza.duvidas.dto");
const swagger_1 = require("@nestjs/swagger");
let DuvidasController = class DuvidasController {
    constructor(clsduvidasArmazenados) {
        this.clsduvidasArmazenados = clsduvidasArmazenados;
    }
    async Retornoduvidas() {
        const duvidasListados = await this.clsduvidasArmazenados.duvidas;
        const listaRetorno = duvidasListados.map((duvidas) => new lista_duvidas_dto_1.ListaDuvidasDTO(duvidas.id, duvidas.pergunta, duvidas.resposta));
        return listaRetorno;
    }
    async removeDuvidas(id) {
        const duvidasRemovido = await this.clsduvidasArmazenados.removeDuvidas(id);
        return {
            usuario: duvidasRemovido,
            message: 'Duvidas removido',
        };
    }
    async atualizaDuvidas(id, novosDadados) {
        const duvidasAtualizado = await this.clsduvidasArmazenados.atualizaDuvidas(id, novosDadados);
        return {
            Duvidas: duvidasAtualizado,
            message: 'Duvida atualizado',
        };
    }
    async AdicionarDuvidas(dadosDuvidas) {
        var duvidas = new duvidas_entity_1.DuvidasEntity((0, uuid_1.v4)(), dadosDuvidas.pergunta, dadosDuvidas.resposta);
        this.clsduvidasArmazenados.AdicionarDuvidas(duvidas);
        var retorno = {
            id: duvidas.id,
            message: 'Duvidas Criado',
        };
        return retorno;
    }
};
exports.DuvidasController = DuvidasController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna a lista de cadastros de documentações existentes.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DuvidasController.prototype, "Retornoduvidas", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de documentação.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno durante a exclusão.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DuvidasController.prototype, "removeDuvidas", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de documentação.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_duvidas_dto_1.AlteraDuvidasDTO]),
    __metadata("design:returntype", Promise)
], DuvidasController.prototype, "atualizaDuvidas", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao cadastrar duvidas e inclui o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [duvidas_dto_1.criaDuvidasDTO]),
    __metadata("design:returntype", Promise)
], DuvidasController.prototype, "AdicionarDuvidas", null);
exports.DuvidasController = DuvidasController = __decorate([
    (0, common_1.Controller)('/duvidas'),
    (0, swagger_1.ApiTags)('duvidas'),
    __metadata("design:paramtypes", [duvidas_dm_1.DuvidasArmazenados])
], DuvidasController);
//# sourceMappingURL=duvidas.controller.js.map