import { UsuarioEntity } from './usuario.entity';
export declare class UsuariosArmazenados {
    #private;
    AdicionarUsuario(usuario: UsuarioEntity): void;
    atualizaUSuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>): UsuarioEntity;
    private buscaPorID;
    removeUsuario(id: string): Promise<UsuarioEntity>;
    validaEmail(email: string): boolean;
    buscaPorEmail(email: string): UsuarioEntity;
    validarLogin(email: string, senha: string): any[];
    get Usuarios(): UsuarioEntity[];
}
