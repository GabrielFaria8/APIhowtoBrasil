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
const interesses_service_1 = require("./interesses.service");
const interesses_dto_1 = require("./dto/interesses.dto");
const atualiza_interesses_dto_1 = require("./dto/atualiza.interesses.dto");
const swagger_1 = require("@nestjs/swagger");
let InteressesController = class InteressesController {
    constructor(interessesService) {
        this.interessesService = interessesService;
    }
    async Retorno() {
        return this.interessesService.listar();
    }
    async tipo(tipos) {
        return this.interessesService.localizarTipo(tipos);
    }
    async remove(id) {
        return this.interessesService.remover(id);
    }
    async atualiza(id, novosDados) {
        return this.interessesService.alterar(id, novosDados);
    }
    async cria(dados) {
        return this.interessesService.inserir(dados);
    }
};
exports.InteressesController = InteressesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "Retorno", null);
__decorate([
    (0, common_1.Get)(':tipo'),
    __param(0, (0, common_1.Param)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "tipo", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_interesses_dto_1.AlteraInteressesDTO]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "atualiza", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [interesses_dto_1.criaInteressesDTO]),
    __metadata("design:returntype", Promise)
], InteressesController.prototype, "cria", null);
exports.InteressesController = InteressesController = __decorate([
    (0, swagger_1.ApiTags)('interesses'),
    (0, common_1.Controller)('/interesses'),
    __metadata("design:paramtypes", [interesses_service_1.InteressesService])
], InteressesController);
//# sourceMappingURL=interesses.controller.js.map