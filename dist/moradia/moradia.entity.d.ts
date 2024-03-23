import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class MoradiaEntity extends InteressesEntity {
    endereco: string;
    linkCorrelatos: string;
    area: string;
    quartos: number;
    valor: number;
    banheiro: number;
    vagas: number;
    foto: string;
    constructor(id: string, tipos: number, nome: string, endereco: string, linkCorrelatos: string, area: string, quartos: number, valor: number, banheiro: number, vagas: number, foto: string);
}
