export class ListaTrabalhoDTO{
    constructor(
        readonly id: string,
        readonly trabalho: string,
        readonly PreRequisitos: string,
        readonly SiteEmpresa: string,
        
    ){}
  }