import { DocumentacaoEntity } from './documentacao.entity';
export declare class DocumentacaoArmazenados {
    #private;
    AdicionarDocumentacao(documentacao: DocumentacaoEntity): void;
    atualizaDocumentacao(id: string, dadosAtualizacao: Partial<DocumentacaoEntity>): DocumentacaoEntity;
    private buscaporID;
    removeDocumentacao(id: string): Promise<DocumentacaoEntity>;
    get Documentacao(): DocumentacaoEntity[];
}
