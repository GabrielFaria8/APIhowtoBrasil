export class ListaMoradiaDTO{
    constructor(
        readonly id: string,
        readonly moradia: string,
        readonly linkCorrelatos: string,
        readonly area: number,
        readonly quartos: number,
        readonly valor: number,
        readonly banheiro: number,
        readonly vagas: number,
        readonly foto: string,
    
        ){}
  }