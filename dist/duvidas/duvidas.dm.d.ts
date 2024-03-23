import { DuvidasEntity } from './duvidas.entity';
export declare class DuvidasArmazenados {
    #private;
    AdicionarDuvidas(duvidas: DuvidasEntity): void;
    atualizaDuvidas(id: string, dadosAtualizacao: Partial<DuvidasEntity>): DuvidasEntity;
    private buscaporID;
    removeDuvidas(id: string): Promise<DuvidasEntity>;
    get duvidas(): DuvidasEntity[];
}
