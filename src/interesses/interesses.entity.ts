import { json } from "stream/consumers";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class INTERESSES{
    @PrimaryColumn()
    ID: string;

    @Column('int')
    TIPOS: number;

    @Column({length: 255})
    NOME: string;

    @Column({length: 255})
    NUMERO: string;
    
    @Column({length: 255})
    HORARIO: string;

    @Column({length: 255})
    LINKMAPS: string;
    
    @Column({length: 255})
    TRABALHO: string;

    @Column({length: 255})
    PREREQUISITOS: string;

    @Column({length: 255})
    SITEEMPRESA: string;
    
    @Column({length: 255})
    SALARIO: string;

    @Column({length: 255})
    DESCRICAO: string;

    @Column({length: 255})
    FOTO: string;
    
}
