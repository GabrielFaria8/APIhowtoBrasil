export class ListaDocumentacaoDTO{
  constructor(
      readonly id: string,
      readonly nome: string,
      readonly documentacao: string,
      readonly linkGoverno: string,
      
      ){}
}