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
exports.SaudeController = void 0;
const common_1 = require("@nestjs/common");
const saude_dm_1 = require("./saude.dm");
const lista_saude_dto_1 = require("./dto/lista.saude.dto");
const saude_entity_1 = require("./saude.entity");
const uuid_1 = require("uuid");
const saude_dto_1 = require("./dto/saude.dto");
const atualiza_saude_dto_1 = require("./dto/atualiza.saude.dto");
const swagger_1 = require("@nestjs/swagger");
let SaudeController = class SaudeController {
    constructor(clssaudeArmazenados) {
        this.clssaudeArmazenados = clssaudeArmazenados;
    }
    async Retornosaude() {
        const saudeListados = await this.clssaudeArmazenados.Saude;
        const listaRetorno = saudeListados.map((saude) => new lista_saude_dto_1.ListaSaudeDTO(saude.id, saude.saude, saude.nome, saude.endereco, saude.Numero, saude.Horario));
        return listaRetorno;
    }
    async removeSaude(id) {
        const saudeRemovido = await this.clssaudeArmazenados.removeSaude(id);
        return {
            usuario: saudeRemovido,
            message: 'Usuário removido',
        };
    }
    async atualizaSaude(id, novosDadados) {
        const saudeAtualizado = await this.clssaudeArmazenados.atualizaSaude(id, novosDadados);
        return {
            Saude: saudeAtualizado,
            message: 'Usuário atualizado',
        };
    }
    async criaSaude(dadosSaude) {
        var saude = new saude_entity_1.SaudeEntity((0, uuid_1.v4)(), dadosSaude.saude, dadosSaude.nome, dadosSaude.endereco, dadosSaude.Numero, dadosSaude.Horario);
        this.clssaudeArmazenados.AdicionarSaude(saude);
        var retorno = {
            id: saude.id,
            message: 'Usuário Criado',
        };
        return retorno;
    }
};
exports.SaudeController = SaudeController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna a lista de cadastros de saúde existentes.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SaudeController.prototype, "Retornosaude", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de saúde.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de saúde não foi encontrado ou ocorreu um erro interno durante a exclusão.' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SaudeController.prototype, "removeSaude", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de saúde.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o cadastro de saúde não foi encontrado ou ocorreu um erro interno.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_saude_dto_1.AleteraSaudeDTO]),
    __metadata("design:returntype", Promise)
], SaudeController.prototype, "atualizaSaude", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ description: 'Retorna que houve sucesso ao cadastrar informações de saúde e inclui o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [saude_dto_1.criaSaudeDTO]),
    __metadata("design:returntype", Promise)
], SaudeController.prototype, "criaSaude", null);
exports.SaudeController = SaudeController = __decorate([
    (0, common_1.Controller)('/saude'),
    __metadata("design:paramtypes", [saude_dm_1.SaudeArmazenados])
], SaudeController);
//# sourceMappingURL=saude.controller.js.map