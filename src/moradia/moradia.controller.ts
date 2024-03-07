import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MoradiaArmazenados } from './moradia.dm';
import { ListaMoradiaDTO } from './dto/lista.moradia.dto';
import { MoradiaEntity } from './moradia.entity';
import { v4 as uuid } from 'uuid';
import { criaMoradiaDTO } from './dto/moradia.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlteraMoradiaDTO } from './dto/atualiza.moradia.dto';

@Controller('/moradia')
@ApiTags('moradia')
export class MoradiaController {
  constructor(private clsmoradiaArmazenados: MoradiaArmazenados) {}

  @ApiResponse({
    status: 200,
    description: 'Retorna a lista de cadastros de moradia existentes.',
  })
  @Get()
  async Retornomoradia() {
    const moradiaListados = await this.clsmoradiaArmazenados.Moradia;
    const listaRetorno = moradiaListados.map(
      (moradia) =>
        new ListaMoradiaDTO(
          moradia.id,
          moradia.nome,
          moradia.endereco,
          moradia.linkCorrelatos,
          moradia.area,
          moradia.quartos,          
          moradia.valor,          
          moradia.banheiro,
          moradia.vagas,
          moradia.foto,
          moradia.interacao,
          moradia.subInteracao,
        ),
    );

    return listaRetorno;
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna que houve sucesso ao excluir o cadastro de educação.',
  })
  @ApiResponse({
    status: 500,
    description:
      'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno durante a exclusão.',
  })
  @Delete(':id')
  async removemoradia(@Param('id') id: string) {
    const moradiaRemovido = await this.clsmoradiaArmazenados.removeMoradia(id);

    return {
      usuario: moradiaRemovido,
      message: 'Moradia removido',
    };
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna que houve sucesso ao alterar o cadastro de educação.',
  })
  @ApiResponse({
    status: 500,
    description:
      'Retorna que o cadastro de educação não foi encontrado ou ocorreu um erro interno.',
  })
  @Put('/:id')
  async atualizamoradia(
    @Param('id') id: string,
    @Body() novosDadados: AlteraMoradiaDTO,
  ) {
    const moradiaAtualizado = await this.clsmoradiaArmazenados.atualizaMoradia(
      id,
      novosDadados,
    );
    return {
      moradia: moradiaAtualizado,
      message: 'Moradia atualizado',
    };
  }

  @ApiCreatedResponse({
    description:
      'Retorna que houve sucesso ao cadastrar informações de educação e inclui o ID criado.',
  })
  @Post()
  async criamoradia(@Body() dadosmoradia: criaMoradiaDTO) {
    var moradia = new MoradiaEntity(
      uuid(),      
      dadosmoradia.tipos,
      dadosmoradia.nome,
      dadosmoradia.interacao,
      dadosmoradia.subInteracao,
      dadosmoradia.endereco,
      dadosmoradia.linkCorrelatos,
      dadosmoradia.area,
      dadosmoradia.quartos,
      dadosmoradia.valor,      
      dadosmoradia.banheiro,
      dadosmoradia.vagas,
      dadosmoradia.foto,
    );
    this.clsmoradiaArmazenados.AdicionarMoradia(moradia);
    var retorno = {
      id: moradia.id,
      message: 'Moradia Criado',
    };
    return retorno;
  }
}
