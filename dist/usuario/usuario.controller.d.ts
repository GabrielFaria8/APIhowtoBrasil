import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuariosArmazenados } from "./usuario.dm";
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuariosArmazenados);
    RetornoUsuarios(): Promise<ListaUsuarioDTO[]>;
    Login(dadosUsuario: LoginUsuarioDTO): Promise<{
        usuario: any;
        status: any;
        message: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: any;
        message: string;
    }>;
    atualizaUsuario(id: string, novosDados: AlteraUsuarioDTO): Promise<{
        usuario: any;
        message: string;
    }>;
    criaUsuario(dadosUsuario: criaUsuarioDTO): Promise<{
        id: string;
        message: string;
    }>;
}
