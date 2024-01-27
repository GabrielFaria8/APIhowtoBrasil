import { SaudeEntity } from './saude.entity';
export declare class SaudeArmazenados {
    #private;
    AdicionarSaude(saude: SaudeEntity): void;
    atualizaSaude(id: string, dadosAtualizacao: Partial<SaudeEntity>): SaudeEntity;
    private buscaporID;
    get Saude(): SaudeEntity[];
}
