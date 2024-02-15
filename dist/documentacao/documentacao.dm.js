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
var _DocumentacaoArmazenados_documentacao;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentacaoArmazenados = void 0;
const common_1 = require("@nestjs/common");
let DocumentacaoArmazenados = class DocumentacaoArmazenados {
    constructor() {
        _DocumentacaoArmazenados_documentacao.set(this, []);
    }
    AdicionarDocumentacao(documentacao) {
        __classPrivateFieldGet(this, _DocumentacaoArmazenados_documentacao, "f").push(documentacao);
    }
    atualizaDocumentacao(id, dadosAtualizacao) {
        const documentacao = this.buscaporID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            documentacao[chave] = valor;
        });
        return documentacao;
    }
    buscaporID(id) {
        const possivelDocumentacao = __classPrivateFieldGet(this, _DocumentacaoArmazenados_documentacao, "f").find((documentacaoSalva) => documentacaoSalva.id === id);
        if (possivelDocumentacao) {
            return possivelDocumentacao;
        }
    }
    async removeDocumentacao(id) {
        const documentacao = this.buscaporID(id);
        __classPrivateFieldSet(this, _DocumentacaoArmazenados_documentacao, __classPrivateFieldGet(this, _DocumentacaoArmazenados_documentacao, "f").filter((documentacaoSalvo) => documentacaoSalvo.id !== id), "f");
        return documentacao;
    }
    get Documentacao() {
        return __classPrivateFieldGet(this, _DocumentacaoArmazenados_documentacao, "f");
    }
};
exports.DocumentacaoArmazenados = DocumentacaoArmazenados;
_DocumentacaoArmazenados_documentacao = new WeakMap();
exports.DocumentacaoArmazenados = DocumentacaoArmazenados = __decorate([
    (0, common_1.Injectable)()
], DocumentacaoArmazenados);
//# sourceMappingURL=documentacao.dm.js.map