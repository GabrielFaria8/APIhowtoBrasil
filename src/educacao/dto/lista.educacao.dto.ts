export class ListaEducacaoDTO{
    constructor(
        readonly id: string,
        readonly educacao: string,
        readonly nome: string,
        readonly endereco: string,
        readonly Numero: string,
        readonly Horario: string
        ){}
  }