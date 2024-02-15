import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class DocumentacaoEntity extends InteressesEntity {
    id: string;
    documentacao: string;
    linkGoverno: string;
    constructor(id: string, documentacao: string, linkGoverno: string);
    validarUsuario(): any[];
}
