export declare class InteressesEntity {
    id: string;
    tipos: number;
    nome: string;
    Numero: string;
    Horario: string;
    LinkMaps: string;
    constructor(id: string, tipos: number, nome: string, Numero: string, Horario: string, LinkMaps: string);
    transicaoTipos(tipos: any): string;
}
