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
exports.DocumentacaoController = void 0;
const common_1 = require("@nestjs/common");
const documentacao_dm_1 = require("./documentacao.dm");
const lista_documentacao_dto_1 = require("./dto/lista.documentacao.dto");
const documentacao_entity_1 = require("./documentacao.entity");
const uuid_1 = require("uuid");
const documentacao_dto_1 = require("./dto/documentacao.dto");
const atualiza_documentacao_dto_1 = require("./dto/atualiza.documentacao.dto");
const swagger_1 = require("@nestjs/swagger");
let DocumentacaoController = class DocumentacaoController {
    constructor(clsdocumentacaoArmazenados) {
        this.clsdocumentacaoArmazenados = clsdocumentacaoArmazenados;
    }
    async Retornodocumentacao() {
        const documentacaoListados = await this.clsdocumentacaoArmazenados.Documentacao;
        const listaRetorno = documentacaoListados.map((documentacao) => new lista_documentacao_dto_1.ListaDocumentacaoDTO(documentacao.id, documentacao.nome, documentacao.linkGoverno, documentacao.linkGoverno));
        return listaRetorno;
    }
    async removeDocumentacao(id) {
        const documentacaoRemovido = await this.clsdocumentacaoArmazenados.removeDocumentacao(id);
        return {
            usuario: documentacaoRemovido,
            message: 'Documento removido',
        };
    }
    async atualizaDocumentacao(id, novosDadados) {
        const documentacaoAtualizado = await this.clsdocumentacaoArmazenados.atualizaDocumentacao(id, novosDadados);
        return {
            Documentacao: documentacaoAtualizado,
            message: 'Documento atualizado',
        };
    }
    async criaDocumentacao(dadosDocumentacao) {
        var documentacao = new documentacao_entity_1.DocumentacaoEntity((0, uuid_1.v4)(), dadosDocumentacao.tipos, dadosDocumentacao.nome, dadosDocumentacao.documentacao, dadosDocumentacao.linkGoverno);
        this.clsdocumentacaoArmazenados.AdicionarDocumentacao(documentacao);
        var retorno = {
            id: documentacao.id,
            message: 'Documento Criado',
        };
        return retorno;
    }
};
exports.DocumentacaoController = DocumentacaoController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna a lista de cadastros de documentações existentes.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DocumentacaoController.prototype, "Retornodocumentacao", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de documentação.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno durante a exclusão.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentacaoController.prototype, "removeDocumentacao", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de documentação.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_documentacao_dto_1.AlteraDocumentacaoDTO]),
    __metadata("design:returntype", Promise)
], DocumentacaoController.prototype, "atualizaDocumentacao", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao cadastrar informações de documentação e inclui o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [documentacao_dto_1.criaDocumentacaoDTO]),
    __metadata("design:returntype", Promise)
], DocumentacaoController.prototype, "criaDocumentacao", null);
exports.DocumentacaoController = DocumentacaoController = __decorate([
    (0, common_1.Controller)('/documentacao'),
    (0, swagger_1.ApiTags)('documentacao'),
    __metadata("design:paramtypes", [documentacao_dm_1.DocumentacaoArmazenados])
], DocumentacaoController);
//# sourceMappingURL=documentacao.controller.js.map