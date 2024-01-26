export class ListaSaudeDTO{
  constructor(
      readonly id: string,
      readonly nome: string,
      readonly endereco: string,
      readonly Numero: string,
      readonly Horario: string,
      readonly email: string
      ){}
}