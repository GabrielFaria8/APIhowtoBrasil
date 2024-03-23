export class ListaTrabalhoDTO{
    constructor(
        readonly id: string,
        readonly trabalho: string,
        readonly PreRequisitos: string,
        readonly SiteEmpresa: string,
        readonly salario: string,
        readonly descricao: string,
        readonly foto: string,
        readonly nome: string,
        
    ){}
  }