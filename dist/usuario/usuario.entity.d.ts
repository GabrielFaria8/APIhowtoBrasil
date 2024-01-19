export declare class UsuarioEntity {
    id: string;
    nome: string;
    idade: BigInteger;
    cidade: string;
    email: string;
    telefone: string;
    senha: string;
    constructor(id: string, nome: string, idade: BigInteger, cidade: string, email: string, telefone: string, senha: string);
    login(senha: any): boolean;
    trocasenha(senha: any): void;
    validarUsuario(): any[];
}
