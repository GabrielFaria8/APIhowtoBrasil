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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const usuario_service_1 = require("./usuario.service");
const usuario_dto_1 = require("./dto/usuario.dto");
const atualiza_usuario_dto_1 = require("./dto/atualiza.usuario.dto");
const login_usuario_dto_1 = require("./dto/login.usuario.dto");
const atualiza_senha_dto_1 = require("./dto/atualiza.senha.dto");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    async Retorno() {
        return this.usuarioService.listar();
    }
    async remove(id) {
        return this.usuarioService.remover(id);
    }
    async atualiza(id, novosDados) {
        return this.usuarioService.alterar(id, novosDados);
    }
    async cria(dados) {
        return this.usuarioService.inserir(dados);
    }
    async Login(dadosUsuario) {
        return this.usuarioService.validaLogin(dadosUsuario.email, dadosUsuario.senha, dadosUsuario.nome, dadosUsuario.ultimoNome);
    }
    async trocaSenha(dadosTrocaSenha) {
        const senhaTrocadaComSucesso = await this.usuarioService.trocaSenha(dadosTrocaSenha.email, dadosTrocaSenha.senha);
        if (senhaTrocadaComSucesso) {
            return {
                message: 'Senha atualizada com sucesso!'
            };
        }
        else {
            return {
                message: 'O email fornecido não foi encontrado.'
            };
        }
    }
};
exports.UsuarioController = UsuarioController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna os usuários cadastrados.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "Retorno", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ status: 200, description: 'Retorna que houve sucesso ao remover o usuário.' }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna que houve sucesso ao alterar o usuário.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Retorna que o usuário não foi encontrado.' }),
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_usuario_dto_1.AlteraUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "atualiza", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ status: 200, description: 'Retorna que houve sucesso ao cadastrar o usuário e retorna o ID criado.' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuario_dto_1.criaUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "cria", null);
__decorate([
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retorna se houve sucesso no login. O retorno "Status" diz se houve sucesso ou não.' }),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_usuario_dto_1.LoginUsuarioDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "Login", null);
__decorate([
    (0, common_1.Post)('/troca-senha'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualiza_senha_dto_1.atualizaSenhaDTO]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "trocaSenha", null);
exports.UsuarioController = UsuarioController = __decorate([
    (0, swagger_1.ApiTags)('usuario'),
    (0, common_1.Controller)('/usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
//# sourceMappingURL=usuario.controller.js.map