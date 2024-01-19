
import * as bcrypt from 'bcrypt';



export class UsuarioEntity{
    id: string;
    nome: string;
    idade: BigInteger;
    cidade: string;
    email: string;
    telefone: string;
    senha: string; 
    constructor(id: string,nome: string,idade: BigInteger,cidade: string,email: string,telefone: string,senha: string){
        const saltOrRounds = 10;

        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
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
        if (this.telefone == ""){
            retorno.push("Telefone inválido ou vazio");
        }
        if (this.cidade  == ""){
            retorno.push("Cidade inválida ou vazia");
        }
        if (this.email  == ""){
            retorno.push("Email inválido ou vazio");
        }
        if (this.senha  == "" || this.senha.length < 6){
            retorno.push("Senha inválida ou vazia");
        }
        if (this.idade == null || this.idade.toString()  == ""){
            retorno.push("Idade inválida ou vazia");
        }
        return retorno;
    }

}