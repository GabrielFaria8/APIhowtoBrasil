import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class TrabalhoEntity extends InteressesEntity {
    trabalho: string;
    preRequisitos: string;
    siteEmpresa: string;
    constructor(id: string, tipos: number, nome: string, Numero: string, Horario: string, LinkMaps: string, trabalho: string, preRequisitos: string, siteEmpresa: string);
}
