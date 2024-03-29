import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "../usuario.service";
export declare class EmailUnicoValidator implements ValidatorConstraintInterface {
    private Usuarios;
    constructor(Usuarios: UsuarioService);
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const EmailUnico: (opcaoValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;
