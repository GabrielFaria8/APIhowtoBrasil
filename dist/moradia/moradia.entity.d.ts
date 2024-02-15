import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class MoradiaEntity extends InteressesEntity {
    moradia: string;
    linkGoverno: string;
    linkCorrelatos: string;
    constructor(id: string, tipos: string, nome: string, Numero: string, Horario: string, LinkMaps: string, moradia: string, linkGoverno: string, linkCorrelatos: string);
}
