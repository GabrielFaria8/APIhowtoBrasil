import { Module } from '@nestjs/common';
import { InteressesModule } from './interesses/interesses.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [InteressesModule,UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
