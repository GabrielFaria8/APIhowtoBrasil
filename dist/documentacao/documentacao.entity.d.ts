import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class DocumentacaoEntity extends InteressesEntity {
    documentacao: string;
    linkGoverno: string;
    constructor(id: string, tipos: number, nome: string, documentacao: string, linkGoverno: string);
}
