import { SaudeEntity } from './saude.entity';
export declare class SaudeArmazenados {
    #private;
    AdicionarSaude(saude: SaudeEntity): void;
    atualizaSaude(id: string, dadosAtualizacao: Partial<SaudeEntity>): SaudeEntity;
    private buscaporID;
    removeSaude(id: string): Promise<SaudeEntity>;
    get Saude(): SaudeEntity[];
}
