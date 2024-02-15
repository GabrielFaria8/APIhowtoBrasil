import { InteressesEntity } from './interesses.entity';
export declare class InteressesArmazenados {
    #private;
    AdicionarInteresses(interesses: InteressesEntity): void;
    atualizaInteresses(id: string, dadosAtualizacao: Partial<InteressesEntity>): InteressesEntity;
    private buscaporID;
    removeInteresses(id: string): Promise<InteressesEntity>;
    get Interesses(): InteressesEntity[];
}
