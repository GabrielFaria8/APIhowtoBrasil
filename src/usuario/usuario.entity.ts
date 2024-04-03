import { json } from "stream/consumers";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class USUARIO{


    @PrimaryColumn()
    id: string;


    @Column({length: 255})
    nome: string;

    @Column({length: 255})
    ultimoNome: string;
    
    @Column({length: 255})
    statusMigratorio: string;

    @Column({length: 255})
    interesses: string;
    
    @Column({length: 255})
    email: string;

    @Column({length: 255})
    senha: string;

    @Column({length: 255})
    foto: string;
    
    login(senha){
      return bcrypt.compareSync(senha,this.senha);
  }

    trocasenha(senha){
      const saltOrRounds = 10;
      this.senha = bcrypt.hashSync(senha,saltOrRounds);
  }
}
