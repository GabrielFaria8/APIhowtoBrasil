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
exports.InteressesController = void 0;
const common_1 = require("@nestjs/common");
const interesses_dm_1 = require("./interesses.dm");
const lista_interesses_dto_1 = require("./dto/lista.interesses.dto");
const interesses_entity_1 = require("./interesses.entity");
const uuid_1 = require("uuid");
const interesses_dto_1 = require("./dto/interesses.dto");
const atualiza_interesses_dto_1 = require("./dto/atualiza.interesses.dto");
const swagger_1 = require("@nestjs/swagger");
let InteressesController = class InteressesController {
    constructor(clsinteressesArmazenados) {
        this.clsinteressesArmazenados = clsinteressesArmazenados;
    }
    async Retornointeresses() {
        const interessesListados = await this.clsinteressesArmazenados.Interesses;
        const listaRetorno = interessesListados.map((interesses) => new lista_interesses_dto_1.ListaInteressesDTO(interesses.id, interesses.tipos, interesses.nome, interesses.Numero, interesses.Horario, interesses.LinkMaps));
        return listaRetorno;
    }
    async tiposInteresses(tipo) {
        const interessesListados = await this.clsinteressesArmazenados.tiposInteresses(tipo);
        const interessesFiltrados = interessesListados.filter(interesse => interesse.tipos === tipo);
        const listaRetorno = interessesFiltrados.map((interesse) => new lista_interesses_dto_1.ListaInteressesDTO(interesse.id, interesse.tipos, interesse.nome, interesse.Numero, interesse.Horario, interesse.LinkMaps));
        return listaRetorno;
    }
    async removeInteresses(id) {
        const interessesRemovido = await this.clsinteressesArmazenados.removeInteresses(id);
        return {
            usuario: interessesRemovido,
            message: 'Interesses removido',
        };
    }
    async atualizaInteresses(id, novosDadados) {
        const interessesAtualizado = await this.clsinteressesArmazenados.atualizaInteresses(id, novosDadados);
        return {
            Interesses: interessesAtualizado,
            message: 'Interesses atualizado',
        };
    }
    async criaInteresses(dadosInteresses) {
        var interesses = new interesses_entity_1.InteressesEntity((0, uuid_1.v4)(), dadosInteresses.tipos, dadosInteresses.nome, dadosInteresses.Numero, dadosInteresses.Horario, dadosInteresses.LinkMaps);
        this.clsinteressesArmazenados.AdicionarInteresses(interesses);
        var retorno = {
            id: interesses.id,
            message: 'Interesses Criado',
        };
        return retorno;
    }
};
exports.InteressesController = InteressesController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna a lista de cadastros de interesses existentes.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "Retornointeresses", null);
__decorate([
    (0, common_1.Get)(':tipo'),
    __param(0, (0, common_1.Param)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "tiposInteresses", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de interesses.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de interesses não foi encontrado ou ocorreu um erro interno durante a exclusão.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "removeInteresses", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de interesses.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de interesses não foi encontrado ou ocorreu um erro interno.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_interesses_dto_1.AlteraInteressesDTO]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "atualizaInteresses", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao cadastrar informações de interesses e inclui o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interesses_dto_1.criaInteressesDTO]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "criaInteresses", null);
exports.InteressesController = InteressesController = __decorate([
    (0, common_1.Controller)('/interesses'),
    (0, swagger_1.ApiTags)('interesses'),
    __metadata("design:paramtypes", [interesses_dm_1.InteressesArmazenados])
], InteressesController);
//# sourceMappingURL=interesses.controller.js.map