export declare class UsuarioEntity {
    id: string;
    nome: string;
    statusMigratório: string;
    email: string;
    interesses: string;
    senha: string;
    constructor(id: string, nome: string, statusMigratório: string, email: string, interesses: string, senha: string);
    login(senha: any): any;
    trocasenha(senha: any): void;
    validarUsuario(): any[];
}
