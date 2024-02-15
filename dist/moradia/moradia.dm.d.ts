import { MoradiaEntity } from './moradia.entity';
export declare class MoradiaArmazenados {
    #private;
    AdicionarMoradia(Moradia: MoradiaEntity): void;
    atualizaMoradia(id: string, dadosAtualizacao: Partial<MoradiaEntity>): MoradiaEntity;
    private buscaporID;
    removeMoradia(id: string): Promise<MoradiaEntity>;
    get Moradia(): MoradiaEntity[];
}
