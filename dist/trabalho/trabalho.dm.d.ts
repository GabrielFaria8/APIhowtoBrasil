import { TrabalhoEntity } from './trabalho.entity';
export declare class TrabalhoArmazenados {
    #private;
    AdicionarTrabalho(trabalho: TrabalhoEntity): void;
    atualizaTrabalho(id: string, dadosAtualizacao: Partial<TrabalhoEntity>): TrabalhoEntity;
    private buscaporID;
    removeTrabalho(id: string): Promise<TrabalhoEntity>;
    get Trabalho(): TrabalhoEntity[];
}
