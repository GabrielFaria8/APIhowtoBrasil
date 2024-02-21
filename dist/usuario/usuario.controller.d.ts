import { criaUsuarioDTO } from './dto/usuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuariosArmazenados } from './usuario.dm';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { AlteraUsuarioDTO } from './dto/atualizaUsuario.dto';
import { LoginUsuarioDTO } from './dto/loginUsuario.dto';
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuariosArmazenados);
    RetornoUsuarios(): Promise<ListaUsuarioDTO[]>;
    Login(dadosUsuario: LoginUsuarioDTO): Promise<{
        usuario: any;
        status: any;
        message: string;
    }>;
    trocaSenha(dadosUsuario: {
        email: string;
        senha: string;
    }): Promise<{
        message: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
    atualizaUsuario(id: string, novosDados: AlteraUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
    atualizaFoto(id: string, AlteraFotoUsuarioDTO: any): Promise<{
        usuario: UsuarioEntity;
    }>;
    criaUsuario(dadosUsuario: criaUsuarioDTO): Promise<{
        id: string;
        message: string;
    }>;
}
