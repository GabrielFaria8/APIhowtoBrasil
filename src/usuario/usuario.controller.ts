import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { v4 as uuid } from 'uuid';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { UsuarioService } from './usuario.service';
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
  
  @ApiTags('usuario')
@Controller('/usuario')
export class UsuarioController{    
    constructor(private readonly usuarioService: UsuarioService){
    }

    @Get()
    async Retorno():Promise<ListaUsuarioDTO[]> {
        return this.usuarioService.listar();
    }


    @Delete('/:id')
    async remove(@Param('id') id: string): Promise<RetornoObjDTO>{
        return this.usuarioService.remover(id);
    }


    // @Put('/:id')
    // async atualiza(@Param('id') id: string, @Body() novosDados: AlterausuarioDTO):Promise<RetornoCadastroDTO>{
    //     return this.usuarioService.alterar(id, novosDados);
    // }

    @Post()
    async cria(@Body() dados: criaUsuarioDTO):Promise<RetornoCadastroDTO>{
        return this.usuarioService.inserir(dados);        
    }

}