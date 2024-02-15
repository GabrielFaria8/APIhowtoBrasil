import { EducacaoEntity } from './educacao.entity';
export declare class EducacaoArmazenados {
    #private;
    AdicionarEducacao(educacao: EducacaoEntity): void;
    atualizaEducacao(id: string, dadosAtualizacao: Partial<EducacaoEntity>): EducacaoEntity;
    private buscaporID;
    removeEducacao(id: string): Promise<EducacaoEntity>;
    get Educacao(): EducacaoEntity[];
}
