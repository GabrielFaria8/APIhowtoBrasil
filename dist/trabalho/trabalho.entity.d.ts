import { InteressesEntity } from "src/interesses/interesses.entity";
export declare class TrabalhoEntity extends InteressesEntity {
    trabalho: string;
    preRequisitos: string;
    siteEmpresa: string;
    salario: string;
    descricao: string;
    foto: string;
    constructor(id: string, nome: string, trabalho: string, preRequisitos: string, siteEmpresa: string, salario: string, descricao: string, foto: string, interacao: string, subInteracao: string);
}
