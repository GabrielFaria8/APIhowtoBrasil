import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { FilesModule } from './files/files.modulo';
import { EducacaoModule } from './educacao/educacao.module';
import { InteressesModule } from './interesses/interesses.module';

@Module({
  imports: [UsuarioModule,FilesModule,EducacaoModule,InteressesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
