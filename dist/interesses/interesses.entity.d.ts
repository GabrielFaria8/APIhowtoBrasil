export declare class InteressesEntity {
    id: string;
    tipos: number;
    nome: string;
    Numero: string;
    Horario: string;
    LinkMaps: string;
    interacao: string;
    subInteracao: string;
    constructor(id: string, tipos: number, nome: string, Numero: string, Horario: string, LinkMaps: string, interacao: string, subInteracao: string);
    transicaoTipos(tipos: any): string;
}
