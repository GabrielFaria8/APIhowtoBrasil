import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { FilesModule } from './files/files.modulo';
import { InteressesModule } from './interesses/interesses.module';
import { DocumentacaoModule } from './documentacao/documentacao.module';
import { MoradiaModule } from './moradia/moradia.module';
import { TrabalhoModule } from './trabalho/trabalho.module';
import { DuvidasModule } from './duvidas/duvidas.module';

@Module({
  imports: [UsuarioModule,FilesModule,InteressesModule, DocumentacaoModule,MoradiaModule, TrabalhoModule,DuvidasModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
