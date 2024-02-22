import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class TrabalhoEntity extends InteressesEntity {
    trabalho: string;
    preRequisitos: string;
    siteEmpresa: string;
    cidadeEstado: string;
    constructor(id: string, tipos: number, nome: string, trabalho: string, preRequisitos: string, siteEmpresa: string, cidadeEstado: string);
}
