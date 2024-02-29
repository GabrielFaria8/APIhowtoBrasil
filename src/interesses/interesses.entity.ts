import { json } from "stream/consumers";

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
    
      transicaoTipos (tipos) {
        if (this.tipos == 1) {
            return (tipos) + 'é igual a saúde'
        }

        if (this.tipos == 2) {
            return (tipos) + 'é igual a educação'
        }
        if (this.tipos == 3) {
            return(tipos) + 'é igual a apoio comunitario'
        }

        else {
            return 'tipo não habilitado'
        }
      }
      
      
  }
  