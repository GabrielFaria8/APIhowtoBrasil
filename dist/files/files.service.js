"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesService = void 0;
const common_1 = require("@nestjs/common");
const files_entity_1 = require("./files.entity");
let filesService = class filesService {
    constructor() {
        this.arquivos = [];
    }
    async salvarDados(file, req) {
        const arquivo = new files_entity_1.Files();
        arquivo.fileName = file.filename;
        arquivo.contenLength = file.size;
        arquivo.contentType = file.mimetype;
        arquivo.url = `${file.filename}`;
        this.arquivos.push(arquivo);
        return arquivo.url;
    }
    async validaArquivo(nome) {
        const possivelArquivo = this.arquivos.find(file => file.fileName === nome);
        return (possivelArquivo !== undefined);
    }
};
exports.filesService = filesService;
exports.filesService = filesService = __decorate([
    (0, common_1.Injectable)()
], filesService);
//# sourceMappingURL=files.service.js.map