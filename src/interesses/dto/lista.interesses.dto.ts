export class ListaInteressesDTO{
    constructor(
        readonly id: string,
        readonly tipos: number,
        readonly nome: string,
        readonly numero: string,
        readonly horario: string,
        readonly linkMaps: string,        
        readonly trabalho: string,
        readonly preRequisitos: string,
        readonly siteEmpresa: string,
        readonly salario: string,
        readonly descricao: string,
        readonly foto: string,
        ){}
  }