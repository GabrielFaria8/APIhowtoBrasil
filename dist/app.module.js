"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_module_1 = require("./usuario/usuario.module");
const files_modulo_1 = require("./files/files.modulo");
const interesses_module_1 = require("./interesses/interesses.module");
const documentacao_module_1 = require("./documentacao/documentacao.module");
const moradia_module_1 = require("./moradia/moradia.module");
const trabalho_module_1 = require("./trabalho/trabalho.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [usuario_module_1.UsuarioModule, files_modulo_1.FilesModule, interesses_module_1.InteressesModule, documentacao_module_1.DocumentacaoModule, moradia_module_1.MoradiaModule, trabalho_module_1.TrabalhoModule],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map