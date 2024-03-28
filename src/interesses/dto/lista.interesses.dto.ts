export class ListaInteressesDTO{
    constructor(
        readonly id: string,
        readonly tipos: number,
        readonly nome: string,
        readonly Numero: string,
        readonly Horario: string,
        readonly LinkMaps: string,        
        readonly trabalho: string,
        readonly PreRequisitos: string,
        readonly SiteEmpresa: string,
        readonly salario: string,
        readonly descricao: string,
        readonly foto: string,
        ){}
  }