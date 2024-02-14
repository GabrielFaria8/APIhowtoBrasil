export class InteressesEntity{
    id: string;
    tipos: string;
    nome: string;
    endereco: string;
    Numero: string;
    Horario: string;
    constructor(id: string,tipos: string,nome:string,endereco: string,Numero: string,Horario: string){
        
  
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.Numero = Numero;
        this.Horario = Horario;
        this.tipos = tipos;
    }
    
      
      
      
  }
  