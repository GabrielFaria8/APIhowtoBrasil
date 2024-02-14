import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { InteressesArmazenados } from './interesses.dm';
  import { ListaInteressesDTO } from './dto/lista.interesses.dto';
  import { InteressesEntity } from './interesses.entity';
  import { v4 as uuid } from 'uuid';
  import { criaInteressesDTO } from './dto/interesses.dto';
  import { AlteraInteressesDTO } from './dto/atualiza.interesses.dto';
  import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
  
  @Controller('/interesses')
  @ApiTags('interesses')
  export class InteressesController {
    constructor(private clsinteressesArmazenados: InteressesArmazenados) {}
  
    @ApiResponse({ status: 200, description: 'Retorna a lista de cadastros de interesses existentes.'})
    @Get()
    async Retornointeresses() {
      const interessesListados = await this.clsinteressesArmazenados.Interesses;
      const listaRetorno = interessesListados.map(
        (interesses) =>
          new ListaInteressesDTO(
            interesses.id,
            interesses.tipos,
            interesses.nome,
            interesses.endereco,
            interesses.Numero,
            interesses.Horario,
          ),
      );
  
      return listaRetorno;
    }
    
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o cadastro de interesses.'})
      @ApiResponse({ status: 500, description: 'Retorna que o cadastro de interesses não foi encontrado ou ocorreu um erro interno durante a exclusão.'})
    @Delete(':id')
    async removeInteresses(@Param('id') id: string) {
      const interessesRemovido = await this.clsinteressesArmazenados.removeInteresses(id);
  
      return {
        usuario : interessesRemovido,
        message: 'Usuário removido',
      }
    }
  
    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o cadastro de interesses.'})
    @ApiResponse({ status: 500, description: 'Retorna que o cadastro de interesses não foi encontrado ou ocorreu um erro interno.'})
    @Put('/:id')
    async atualizaInteresses(
      @Param('id') id: string,
      @Body()  novosDadados: AlteraInteressesDTO,
    ){
      const interessesAtualizado = await this.clsinteressesArmazenados.atualizaInteresses(
        id,
        novosDadados,
      );
      return{
        Interesses: interessesAtualizado,
        message: 'Usuário atualizado',
      };
    }
  
    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar informações de interesses e inclui o ID criado.'})
    @Post()
    async criaInteresses(@Body() dadosInteresses: criaInteressesDTO) {
      var interesses = new InteressesEntity(
        uuid(),
        dadosInteresses.tipos,
        dadosInteresses.nome,
        dadosInteresses.endereco,
        dadosInteresses.Numero,
        dadosInteresses.Horario,
      );
      this.clsinteressesArmazenados.AdicionarInteresses(interesses);
      var retorno = {
        id: interesses.id,
        message: 'Usuário Criado',
      };
      return retorno;
    }
  }
  