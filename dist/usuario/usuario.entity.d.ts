export declare class UsuarioEntity {
    id: string;
    nome: string;
    idade: number;
    cidade: string;
    email: string;
    telefone: string;
    senha: string;
    assinatura: Date;
    constructor(id: string, nome: string, idade: number, cidade: string, email: string, telefone: string, senha: string);
    login(senha: any): any;
    trocaSenha(senha: any): void;
}
