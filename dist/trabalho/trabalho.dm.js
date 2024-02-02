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
var _TrabalhoArmazenados_trabalho;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabalhoArmazenados = void 0;
const common_1 = require("@nestjs/common");
let TrabalhoArmazenados = class TrabalhoArmazenados {
    constructor() {
        _TrabalhoArmazenados_trabalho.set(this, []);
    }
    AdicionarTrabalho(trabalho) {
        __classPrivateFieldGet(this, _TrabalhoArmazenados_trabalho, "f").push(trabalho);
    }
    atualizaTrabalho(id, dadosAtualizacao) {
        const trabalho = this.buscaporID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            trabalho[chave] = valor;
        });
        return trabalho;
    }
    buscaporID(id) {
        const possivelTrabalho = __classPrivateFieldGet(this, _TrabalhoArmazenados_trabalho, "f").find((trabalhoSalva) => trabalhoSalva.id === id);
        if (possivelTrabalho) {
            return possivelTrabalho;
        }
    }
    async removeTrabalho(id) {
        const trabalho = this.buscaporID(id);
        __classPrivateFieldSet(this, _TrabalhoArmazenados_trabalho, __classPrivateFieldGet(this, _TrabalhoArmazenados_trabalho, "f").filter((trabalhoSalvo) => trabalhoSalvo.id !== id), "f");
        return trabalho;
    }
    get Trabalho() {
        return __classPrivateFieldGet(this, _TrabalhoArmazenados_trabalho, "f");
    }
};
exports.TrabalhoArmazenados = TrabalhoArmazenados;
_TrabalhoArmazenados_trabalho = new WeakMap();
exports.TrabalhoArmazenados = TrabalhoArmazenados = __decorate([
    (0, common_1.Injectable)()
], TrabalhoArmazenados);
//# sourceMappingURL=trabalho.dm.js.map