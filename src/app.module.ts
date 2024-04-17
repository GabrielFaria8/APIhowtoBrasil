import { Module } from '@nestjs/common';
import { filesModule } from './files/files.molude';
import { InteressesModule } from './interesses/interesses.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [InteressesModule,UsuarioModule,filesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
