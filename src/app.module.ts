import { Module } from '@nestjs/common';
import { FilesModule } from './files/validacao/files.modulo';
import { InteressesModule } from './interesses/interesses.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [InteressesModule,UsuarioModule,FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
