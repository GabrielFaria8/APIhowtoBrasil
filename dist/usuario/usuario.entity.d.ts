export declare class UsuarioEntity {
    id: string;
    nome: string;
    ultimoNome: string;
    statusMigratorio: string;
    interesses: string;
    email: string;
    senha: string;
    foto: string;
    constructor(id: string, nome: string, ultimoNome: string, statusMigratorio: string, interesses: string, email: string, senha: string, foto: string);
    login(senha: any): any;
    trocasenha(senha: any): void;
}
