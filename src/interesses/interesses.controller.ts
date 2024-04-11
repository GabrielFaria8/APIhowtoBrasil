import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { InteressesService } from './interesses.service';
  import { ListaInteressesDTO } from './dto/lista.interesses.dto';
  import { v4 as uuid } from 'uuid';
  import { criaInteressesDTO } from './dto/interesses.dto';
  import { AlteraInteressesDTO } from './dto/atualiza.interesses.dto';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
  
  @ApiTags('interesses')
@Controller('/interesses')
export class InteressesController{    
    constructor(private readonly interessesService: InteressesService){
    }

    @Get()
    async Retorno():Promise<ListaInteressesDTO[]> {
        return this.interessesService.listar();
    }

    @Get(':tipo')
    async tipo(@Param('tipo') tipos: number): Promise<ListaInteressesDTO[]>{
        return this.interessesService.localizarTipo(tipos);
    }


    @Delete('/:id')
    async remove(@Param('id') id: string): Promise<RetornoObjDTO>{
        return this.interessesService.remover(id);
    }


    // @Put('/:id')
    // async atualiza(@Param('id') id: string, @Body() novosDados: AlteraInteressesDTO):Promise<RetornoCadastroDTO>{
    //     return this.interessesService.alterar(id, novosDados);
    // }

    @Post()
    async cria(@Body() dados: criaInteressesDTO):Promise<RetornoCadastroDTO>{
        return this.interessesService.inserir(dados);        
    }

}