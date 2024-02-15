import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class TrabalhoEntity extends InteressesEntity {
    trabalho: string;
    PreRequisitos: string;
    SiteEmpresa: string;
    constructor(id: string, tipos: string, nome: string, Numero: string, Horario: string, LinkMaps: string, trabalho: string, PreRequisitos: string, SiteEmpresa: string);
}
