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
exports.filesService = void 0;
const common_1 = require("@nestjs/common");
const files_entity_1 = require("./files.entity");
const decorators_1 = require("@nestjs/common/decorators");
const Repository_1 = require("typeorm/repository/Repository");
const uuid_1 = require("uuid");
let filesService = class filesService {
    constructor(filesRepository) {
        this.filesRepository = filesRepository;
    }
    async salvarDados(file, req) {
        const arquivo = new files_entity_1.Files();
        arquivo.id = (0, uuid_1.v4)();
        arquivo.fileName = file.filename;
        arquivo.contenLength = file.size;
        arquivo.contentType = file.mimetype;
        arquivo.url = `${file.filename}`;
        this.filesRepository.save(arquivo);
        return arquivo.id;
    }
    async validaArquivo(fileName) {
        return this.filesRepository.find({
            where: {
                fileName,
            },
        });
    }
};
exports.filesService = filesService;
exports.filesService = filesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, decorators_1.Inject)('FILES_REPOSITORY')),
    __metadata("design:paramtypes", [Repository_1.Repository])
], filesService);
//# sourceMappingURL=files.service.js.map