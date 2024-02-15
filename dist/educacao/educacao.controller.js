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
exports.EducacaoController = void 0;
const common_1 = require("@nestjs/common");
const educacao_dm_1 = require("./educacao.dm");
const lista_educacao_dto_1 = require("./dto/lista.educacao.dto");
const educacao_entity_1 = require("./educacao.entity");
const uuid_1 = require("uuid");
const educacao_dto_1 = require("./dto/educacao.dto");
const atualiza_educacao_dto_1 = require("./dto/atualiza.educacao.dto");
const swagger_1 = require("@nestjs/swagger");
let EducacaoController = class EducacaoController {
    constructor(clseducacaoArmazenados) {
        this.clseducacaoArmazenados = clseducacaoArmazenados;
    }
    async Retornoeducacao() {
        const educacaoListados = await this.clseducacaoArmazenados.Educacao;
        const listaRetorno = educacaoListados.map((educacao) => new lista_educacao_dto_1.ListaEducacaoDTO(educacao.id, educacao.educacao, educacao.nome, educacao.endereco, educacao.Numero, educacao.Horario));
        return listaRetorno;
    }
    async removeEducacao(id) {
        const educacaoRemovido = await this.clseducacaoArmazenados.removeEducacao(id);
        return {
            usuario: educacaoRemovido,
            message: 'Usuário removido',
        };
    }
    async atualizaEducacao(id, novosDadados) {
        const educacaoAtualizado = await this.clseducacaoArmazenados.atualizaEducacao(id, novosDadados);
        return {
            Educacao: educacaoAtualizado,
            message: 'Usuário atualizado',
        };
    }
    async criaEducacao(dadosEducacao) {
        var educacao = new educacao_entity_1.EducacaoEntity((0, uuid_1.v4)(), dadosEducacao.educacao, dadosEducacao.nome, dadosEducacao.endereco, dadosEducacao.Numero, dadosEducacao.Horario);
        this.clseducacaoArmazenados.AdicionarEducacao(educacao);
        var retorno = {
            id: educacao.id,
            message: 'Usuário Criado',
        };
        return retorno;
    }
};
exports.EducacaoController = EducacaoController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna a lista de cadastros de educação existentes.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EducacaoController.prototype, "Retornoeducacao", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de educação.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno durante a exclusão.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EducacaoController.prototype, "removeEducacao", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de educação.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_educacao_dto_1.AlteraEducacaoDTO]),
    __metadata("design:returntype", Promise)
], EducacaoController.prototype, "atualizaEducacao", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao cadastrar informações de educação e inclui o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [educacao_dto_1.criaEducacaoDTO]),
    __metadata("design:returntype", Promise)
], EducacaoController.prototype, "criaEducacao", null);
exports.EducacaoController = EducacaoController = __decorate([
    (0, common_1.Controller)('/educacao'),
    (0, swagger_1.ApiTags)('educacao'),
    __metadata("design:paramtypes", [educacao_dm_1.EducacaoArmazenados])
], EducacaoController);
//# sourceMappingURL=educacao.controller.js.map