import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuariosArmazenados);
    Login(dadosUsuario: LoginUsuarioDTO): Promise<{
        usuario: any;
        status: any;
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
    criaUsuario(dadosUsuario: criaUsuarioDTO): Promise<{
        id: string;
        message: string;
    }>;
}
