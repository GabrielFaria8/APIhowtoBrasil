import { SaudeEntity } from "./saude.entity";
export declare class SaudeArmazenados {
    #private;
    AdicionarSaude(saude: SaudeEntity): void;
    get Saude(): SaudeEntity[];
}
