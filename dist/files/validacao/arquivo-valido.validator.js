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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArquivoValido = exports.ArquivoValidoValidator = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let ArquivoValidoValidator = class ArquivoValidoValidator {
    constructor() { }
    async validate(value, validationArguments) {
        var arquivos;
        const fs = require('fs');
        fs.readdir('./upload/files/', (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
            arquivos = files;
        });
        const validaArquivo = true;
        return validaArquivo;
    }
};
exports.ArquivoValidoValidator = ArquivoValidoValidator;
exports.ArquivoValidoValidator = ArquivoValidoValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [])
], ArquivoValidoValidator);
const ArquivoValido = (opcaoValidacao) => {
    return (objeto, propriedade) => {
        (0, class_validator_1.registerDecorator)({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcaoValidacao,
            constraints: [],
            validator: ArquivoValidoValidator,
        });
    };
};
exports.ArquivoValido = ArquivoValido;
//# sourceMappingURL=arquivo-valido.validator.js.map