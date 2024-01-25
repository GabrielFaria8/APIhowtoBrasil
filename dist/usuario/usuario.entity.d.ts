export declare class UsuarioEntity {
    id: string;
    nome: string;
    ultimoNome: string;
    statusMigratório: string;
    interesses: string;
    email: string;
    senha: string;
    constructor(id: string, nome: string, ultimoNome: string, statusMigratório: string, interesses: string, email: string, senha: string);
    login(senha: any): any;
    trocasenha(senha: any): void;
    validarUsuario(): any[];
}
