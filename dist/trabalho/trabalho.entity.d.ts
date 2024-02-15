import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class TrabalhoEntity extends InteressesEntity {
    id: string;
    trabalho: string;
    PreRequisitos: string;
    SiteEmpresa: string;
    constructor(id: string, trabalho: string, PreRequisitos: string, SiteEmpresa: string);
    validarUsuario(): any[];
}
