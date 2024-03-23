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
var _DuvidasArmazenados_duvidas;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuvidasArmazenados = void 0;
const common_1 = require("@nestjs/common");
let DuvidasArmazenados = class DuvidasArmazenados {
    constructor() {
        _DuvidasArmazenados_duvidas.set(this, []);
    }
    AdicionarDuvidas(duvidas) {
        __classPrivateFieldGet(this, _DuvidasArmazenados_duvidas, "f").push(duvidas);
    }
    atualizaDuvidas(id, dadosAtualizacao) {
        const duvidas = this.buscaporID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            duvidas[chave] = valor;
        });
        return duvidas;
    }
    buscaporID(id) {
        const possivelDuvidas = __classPrivateFieldGet(this, _DuvidasArmazenados_duvidas, "f").find((duvidasSalva) => duvidasSalva.id === id);
        if (possivelDuvidas) {
            return possivelDuvidas;
        }
    }
    async removeDuvidas(id) {
        const duvidas = this.buscaporID(id);
        __classPrivateFieldSet(this, _DuvidasArmazenados_duvidas, __classPrivateFieldGet(this, _DuvidasArmazenados_duvidas, "f").filter((duvidasSalva) => duvidasSalva.id !== id), "f");
        return duvidas;
    }
    get duvidas() {
        return __classPrivateFieldGet(this, _DuvidasArmazenados_duvidas, "f");
    }
};
exports.DuvidasArmazenados = DuvidasArmazenados;
_DuvidasArmazenados_duvidas = new WeakMap();
exports.DuvidasArmazenados = DuvidasArmazenados = __decorate([
    (0, common_1.Injectable)()
], DuvidasArmazenados);
//# sourceMappingURL=duvidas.dm.js.map