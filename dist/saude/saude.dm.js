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
var _SaudeArmazenados_saude;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaudeArmazenados = void 0;
const common_1 = require("@nestjs/common");
let SaudeArmazenados = class SaudeArmazenados {
    constructor() {
        _SaudeArmazenados_saude.set(this, []);
    }
    AdicionarSaude(saude) {
        __classPrivateFieldGet(this, _SaudeArmazenados_saude, "f").push(saude);
    }
    atualizaSaude(id, dadosAtualizacao) {
        const saude = this.buscaporID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            saude[chave] = valor;
        });
        return saude;
    }
    buscaporID(id) {
        const possivelSaude = __classPrivateFieldGet(this, _SaudeArmazenados_saude, "f").find((saudeSalva) => saudeSalva.id === id);
        if (possivelSaude) {
            return possivelSaude;
        }
    }
    async removeSaude(id) {
        const saude = this.buscaporID(id);
        __classPrivateFieldSet(this, _SaudeArmazenados_saude, __classPrivateFieldGet(this, _SaudeArmazenados_saude, "f").filter((saudeSalvo) => saudeSalvo.id !== id), "f");
        return saude;
    }
    get Saude() {
        return __classPrivateFieldGet(this, _SaudeArmazenados_saude, "f");
    }
};
exports.SaudeArmazenados = SaudeArmazenados;
_SaudeArmazenados_saude = new WeakMap();
exports.SaudeArmazenados = SaudeArmazenados = __decorate([
    (0, common_1.Injectable)()
], SaudeArmazenados);
//# sourceMappingURL=saude.dm.js.map