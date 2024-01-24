import { UsuarioEntity } from "./usuario.entity";
export declare class UsuariosArmazenados {
    #private;
    AdicionarUsuario(usuario: UsuarioEntity): void;
    atualizaUSuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>): any;
    private buscaPorID;
    removeUsuario(id: string): Promise<any>;
    buscaPorEmail(email: string): any;
    validaEmail(email: string): boolean;
    validarLogin(email: string, senha: string): any[];
    get Usuarios(): any[];
}
