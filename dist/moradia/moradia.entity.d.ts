import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class MoradiaEntity extends InteressesEntity {
    moradia: string;
    linkCorrelatos: string;
    area: number;
    quartos: number;
    valor: number;
    banheiro: number;
    vagas: number;
    foto: string;
    constructor(id: string, tipos: number, nome: string, Numero: string, Horario: string, LinkMaps: string, moradia: string, linkCorrelatos: string, area: number, quartos: number, valor: number, banheiro: number, vagas: number, foto: string);
}
