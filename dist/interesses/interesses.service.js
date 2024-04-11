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
exports.InteressesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const lista_interesses_dto_1 = require("./dto/lista.interesses.dto");
const interesses_entity_1 = require("./interesses.entity");
let InteressesService = class InteressesService {
    constructor(interessesRepository) {
        this.interessesRepository = interessesRepository;
    }
    async listar() {
        var interessesListados = await this.interessesRepository.find();
        return interessesListados.map(interesses => new lista_interesses_dto_1.ListaInteressesDTO(interesses.id, interesses.tipos, interesses.nome, interesses.numero, interesses.horario, interesses.linkMaps, interesses.trabalho, interesses.preRequisitos, interesses.siteEmpresa, interesses.salario, interesses.descricao, interesses.foto, interesses.documento, interesses.linkGoverno, interesses.linkCorrelato, interesses.area, interesses.quartos, interesses.valor, interesses.banheiro, interesses.vagas));
    }
    async inserir(dados) {
        let interesses = new interesses_entity_1.INTERESSES();
        interesses.id = (0, uuid_1.v4)();
        interesses.tipos = dados.tipos;
        interesses.nome = dados.nome;
        interesses.numero = dados.numero;
        interesses.horario = dados.horario;
        interesses.linkMaps = dados.linkMaps;
        interesses.trabalho = dados.trabalho;
        interesses.preRequisitos = dados.preRequisitos;
        interesses.siteEmpresa = dados.siteEmpresa;
        interesses.salario = dados.salario;
        interesses.descricao = dados.descricao;
        interesses.foto = dados.foto;
        interesses.documento = dados.documento;
        interesses.linkGoverno = dados.linkGoverno;
        interesses.linkCorrelato = dados.linkCorrelato;
        interesses.area = dados.area;
        interesses.quartos = dados.quartos;
        interesses.valor = dados.valor;
        interesses.banheiro = dados.banheiro;
        interesses.vagas = dados.vagas;
        return this.interessesRepository.save(interesses)
            .then((result) => {
            return {
                id: interesses.id,
                message: "Interesse cadastrado!"
            };
        })
            .catch((error) => {
            return {
                id: "",
                message: "Houve um erro ao cadastrar." + error.message
            };
        });
    }
    localizarID(id) {
        return this.interessesRepository.findOne({
            where: {
                id,
            },
        });
    }
    localizarTipo(tipos) {
        return this.interessesRepository.find({
            where: {
                tipos,
            },
        });
    }
    async remover(id) {
        const interesses = await this.localizarID(id);
        return this.interessesRepository.remove(interesses)
            .then((result) => {
            return {
                return: interesses,
                message: "Interesse excluido!"
            };
        })
            .catch((error) => {
            return {
                return: interesses,
                message: "Houve um erro ao excluir." + error.message
            };
        });
    }
};
exports.InteressesService = InteressesService;
exports.InteressesService = InteressesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('INTERESSES_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], InteressesService);
//# sourceMappingURL=interesses.service.js.map