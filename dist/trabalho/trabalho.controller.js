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
exports.TrabalhoController = void 0;
const common_1 = require("@nestjs/common");
const trabalho_dm_1 = require("./trabalho.dm");
const lista_trabalho_dto_1 = require("./dto/lista.trabalho.dto");
const trabalho_entity_1 = require("./trabalho.entity");
const uuid_1 = require("uuid");
const trabalho_dto_1 = require("./dto/trabalho.dto");
const atualiza_trabalho_dto_1 = require("./dto/atualiza.trabalho.dto");
const swagger_1 = require("@nestjs/swagger");
let TrabalhoController = class TrabalhoController {
    constructor(clstrabalhoArmazenados) {
        this.clstrabalhoArmazenados = clstrabalhoArmazenados;
    }
    async Retornotrabalho() {
        const trabalhoListados = await this.clstrabalhoArmazenados.Trabalho;
        const listaRetorno = trabalhoListados.map((trabalho) => new lista_trabalho_dto_1.ListaTrabalhoDTO(trabalho.id, trabalho.trabalho, trabalho.preRequisitos, trabalho.siteEmpresa, trabalho.salario, trabalho.descricao, trabalho.foto, trabalho.nome, trabalho.interacao, trabalho.subInteracao));
        return listaRetorno;
    }
    async removeTrabalho(id) {
        const trabalhoRemovido = await this.clstrabalhoArmazenados.removeTrabalho(id);
        return {
            usuario: trabalhoRemovido,
            message: 'Trabalho removido',
        };
    }
    async atualizaTrabalho(id, novosDados) {
        const trabalhoAtualizado = await this.clstrabalhoArmazenados.atualizaTrabalho(id, novosDados);
        return {
            Trabalho: trabalhoAtualizado,
            message: 'Trabalho atualizado',
        };
    }
    async criaTrabalho(dadosTrabalho) {
        var trabalho = new trabalho_entity_1.TrabalhoEntity((0, uuid_1.v4)(), dadosTrabalho.tipos, dadosTrabalho.nome, dadosTrabalho.trabalho, dadosTrabalho.preRequisitos, dadosTrabalho.siteEmpresa, dadosTrabalho.salario, dadosTrabalho.descricao, dadosTrabalho.foto, dadosTrabalho.interacao, dadosTrabalho.subInteracao);
        this.clstrabalhoArmazenados.AdicionarTrabalho(trabalho);
        var retorno = {
            id: trabalho.id,
            message: 'Trabalho Criado',
        };
        return retorno;
    }
};
exports.TrabalhoController = TrabalhoController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna a lista de cadastros de trabalhos existentes.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TrabalhoController.prototype, "Retornotrabalho", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de trabalho.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de trabalho não foi encontrado ou ocorreu um erro interno durante a exclusão.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrabalhoController.prototype, "removeTrabalho", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de trabalho.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de trabalho não foi encontrado ou ocorreu um erro interno.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_trabalho_dto_1.AlteraTrabalhoDTO]),
    __metadata("design:returntype", Promise)
], TrabalhoController.prototype, "atualizaTrabalho", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao cadastrar informações de trabalho e inclui o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trabalho_dto_1.criaTrabalhoDTO]),
    __metadata("design:returntype", Promise)
], TrabalhoController.prototype, "criaTrabalho", null);
exports.TrabalhoController = TrabalhoController = __decorate([
    (0, common_1.Controller)('/trabalho'),
    (0, swagger_1.ApiTags)('trabalho'),
    __metadata("design:paramtypes", [trabalho_dm_1.TrabalhoArmazenados])
], TrabalhoController);
//# sourceMappingURL=trabalho.controller.js.map