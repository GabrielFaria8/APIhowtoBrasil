
import * as bcrypt from 'bcrypt';



export class UsuarioEntity{
    id: string;
    nome: string;
    ultimoNome: string;
    statusMigratorio: string;
    interesses: string;
    email: string;
    senha: string; 
    foto: string;
    constructor(id: string,nome: string,ultimoNome: string,statusMigratorio: string,interesses: string,email: string,senha: string, foto: string){
        const saltOrRounds = 10;

        this.id = id;
        this.nome = nome;
        this.ultimoNome = ultimoNome;
        this.statusMigratorio = statusMigratorio;
        this.interesses = interesses;
        this.email = email;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
        this.foto = foto;
    }

    login(senha){
        return bcrypt.compareSync(senha,this.senha);
    }

    trocasenha(senha){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha,saltOrRounds);
    }



}