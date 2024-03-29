import { json } from "stream/consumers";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class INTERESSES{
    @PrimaryColumn()
    id: string;

    @Column('int')
    tipos: number;

    @Column({length: 255})
    nome: string;

    @Column({length: 255})
    numero: string;
    
    @Column({length: 255})
    horario: string;

    @Column({length: 255})
    linkMaps: string;
    
    @Column({length: 255})
    trabalho: string;

    @Column({length: 255})
    preRequisitos: string;

    @Column({length: 255})
    siteEmpresa: string;
    
    @Column({length: 255})
    salario: string;

    @Column({length: 255})
    descricao: string;

    @Column({length: 255})
    foto: string;
    
}
