export class ListaTrabalhoDTO{
    constructor(
        readonly id: string,
        readonly trabalho: string,
        readonly nome: string,
        readonly endereco: string,
        readonly Numero: string,
        readonly Horario: string
        ){}
  }