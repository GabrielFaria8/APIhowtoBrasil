export class InteressesEntity{
    id: string;
    tipos: number;
    nome: string;
    Numero: string;
    Horario: string;
    LinkMaps: string;
    constructor(id: string,tipos:number,nome:string,Numero: string,Horario: string,LinkMaps: string){
        
  
        this.id = id;
        this.nome = nome;
        this.Numero = Numero;
        this.Horario = Horario;
        this.LinkMaps = LinkMaps;
        this.tipos = tipos;
    }
    
      
      
      
  }
  