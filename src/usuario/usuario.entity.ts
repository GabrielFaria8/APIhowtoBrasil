
import * as bcrypt from 'bcrypt';



export class UsuarioEntity{
    id: string;
    nome: string;
    ultimoNome: string;
    statusMigratório: string;
    interesses: string;
    email: string;
    senha: string; 
    constructor(id: string,nome: string,ultimoNome: string,statusMigratório: string,interesses: string,email: string,senha: string){
        const saltOrRounds = 10;

        this.id = id;
        this.nome = nome;
        this.ultimoNome = ultimoNome;
        this.statusMigratório = statusMigratório;
        this.interesses = interesses;
        this.email = email;
        this.senha = bcrypt.hashSync(senha, saltOrRounds);
    }

    login(senha){
        return bcrypt.compareSync(senha,this.senha);
    }

    trocasenha(senha){
        const saltOrRounds = 10;
        this.senha = bcrypt.hashSync(senha,saltOrRounds);
    }


    validarUsuario(){
        var retorno = [];
        if (this.nome == ""){
            retorno.push("Nome inválido ou vazio");
        }
        if (this.ultimoNome == ""){
            retorno.push("Nome inválido ou vazio");
        }
        if (this.statusMigratório  == ""){
            retorno.push("Status migratório inválida ou vazia");
        }
        if (this.interesses == ""){
            retorno.push("Telefone inválido ou vazio");
        }
        if (this.email  == ""){
            retorno.push("Email inválido ou vazio");
        }
        if (this.senha  == "" || this.senha.length < 6){
            retorno.push("Senha inválida ou vazia");
        }
        
        return retorno;
    }

}