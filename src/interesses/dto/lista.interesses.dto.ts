export class ListaInteressesDTO{
    constructor(
        readonly id: string,
        readonly interesses: string,
        readonly nome: string,
        readonly endereco: string,
        readonly Numero: string,
        readonly Horario: string
        ){}
  }