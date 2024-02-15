"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _EducacaoArmazenados_educacao;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducacaoArmazenados = void 0;
const common_1 = require("@nestjs/common");
let EducacaoArmazenados = class EducacaoArmazenados {
    constructor() {
        _EducacaoArmazenados_educacao.set(this, []);
    }
    AdicionarEducacao(educacao) {
        __classPrivateFieldGet(this, _EducacaoArmazenados_educacao, "f").push(educacao);
    }
    atualizaEducacao(id, dadosAtualizacao) {
        const educacao = this.buscaporID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            educacao[chave] = valor;
        });
        return educacao;
    }
    buscaporID(id) {
        const possivelEducacao = __classPrivateFieldGet(this, _EducacaoArmazenados_educacao, "f").find((educacaoSalva) => educacaoSalva.id === id);
        if (possivelEducacao) {
            return possivelEducacao;
        }
    }
    async removeEducacao(id) {
        const educacao = this.buscaporID(id);
        __classPrivateFieldSet(this, _EducacaoArmazenados_educacao, __classPrivateFieldGet(this, _EducacaoArmazenados_educacao, "f").filter((educacaoSalvo) => educacaoSalvo.id !== id), "f");
        return educacao;
    }
    get Educacao() {
        return __classPrivateFieldGet(this, _EducacaoArmazenados_educacao, "f");
    }
};
exports.EducacaoArmazenados = EducacaoArmazenados;
_EducacaoArmazenados_educacao = new WeakMap();
exports.EducacaoArmazenados = EducacaoArmazenados = __decorate([
    (0, common_1.Injectable)()
], EducacaoArmazenados);
//# sourceMappingURL=educacao.dm.js.map