import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { DuvidasArmazenados } from './duvidas.dm';
  import { ListaDuvidasDTO } from './dto/lista.duvidas.dto';
  import { DuvidasEntity } from './duvidas.entity';
  import { v4 as uuid } from 'uuid';
  import { criaDuvidasDTO } from './dto/duvidas.dto';
  import { AlteraDuvidasDTO } from './dto/atualiza.duvidas.dto';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
  
  @Controller('/duvidas')
  @ApiTags('duvidas')
  export class DuvidasController {
    constructor(private clsduvidasArmazenados: DuvidasArmazenados) {}
  
    @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros de documentações existentes.'})
    @Get()
    async Retornoduvidas() {
      const duvidasListados = await this.clsduvidasArmazenados.duvidas;
      const listaRetorno = duvidasListados.map(
        (duvidas) =>
          new ListaDuvidasDTO(
            duvidas.id,
            duvidas.pergunta,
            duvidas.resposta,            
          ),
      );
  
      return listaRetorno;
    }
    
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de documentação.'})
      @ApiResponse({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno durante a exclusão.'})
    @Delete(':id')
    async removeDuvidas(@Param('id') id: string) {
      const duvidasRemovido = await this.clsduvidasArmazenados.removeDuvidas(id);
  
      return {
        usuario : duvidasRemovido,
        message: 'Duvidas removido',
      }
    }
  
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de documentação.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro de documentação não foi encontrado ou ocorreu um erro interno.'})
    @Put('/:id')
    async atualizaDuvidas(
      @Param('id') id: string,
      @Body()  novosDadados: AlteraDuvidasDTO,
    ){
      const duvidasAtualizado = await this.clsduvidasArmazenados.atualizaDuvidas(
        id,
        novosDadados,
      );
      return{
        Duvidas: duvidasAtualizado,
        message: 'Duvida atualizado',
      };
    }
  
    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar duvidas e inclui o ID criado.'})
    @Post()
    async AdicionarDuvidas(@Body() dadosDuvidas: criaDuvidasDTO) {
      var duvidas = new DuvidasEntity(
        uuid(), 
        dadosDuvidas.pergunta,
        dadosDuvidas.resposta,        
      );
      this.clsduvidasArmazenados.AdicionarDuvidas(duvidas);
      var retorno = {
        id: duvidas.id,
        message: 'Duvidas Criado',
      };
      return retorno;
    }
  }