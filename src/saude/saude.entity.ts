export class SaudeEntity{
  id: string;
  saude: string;
  nome: string;
  endereco: string;
  Numero: string;
  Horario: string;
  constructor(id: string,saude: string,nome:string,endereco: string,Numero: string,Horario: string){
      

      this.id = id;
      this.nome = nome;
      this.endereco = endereco;
      this.Numero = Numero;
      this.Horario = Horario;
      this.saude = saude;
  }
}