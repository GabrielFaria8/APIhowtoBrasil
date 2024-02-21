import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
export declare class ArquivoValidoValidator implements ValidatorConstraintInterface {
    constructor();
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean>;
}
export declare const ArquivoValido: (opcaoValidacao: ValidationOptions) => (objeto: Object, propriedade: string) => void;
