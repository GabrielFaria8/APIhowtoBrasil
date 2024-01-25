export class ListaUsuarioDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly ultimoNome: string,
        readonly statusMigratório: string,
        readonly interesses: string,
        readonly email: string,
        readonly senha: string
        ){}
}