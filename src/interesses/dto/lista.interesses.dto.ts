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
        readonly documento: string,
        readonly linkGoverno: string,
        readonly linkCorrelato: string,
        readonly area: string,
        readonly quartos: number,
        readonly valor: string,
        readonly banheiro: number,
        readonly vagas: number,
        ){}
  }