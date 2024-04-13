import { Files } from "src/files/files.entity";
import { json } from "stream/consumers";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

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
    documento: string;

    @Column({length: 255})
    linkGoverno: string;

    @Column({length: 255})
    linkCorrelato: string;

    @Column({length: 255})
    area: string;

    @Column('int')
    quartos: number;

    @Column({length: 255})
    valor: string;

    @Column('int')
    banheiro: number;

    @Column('int')
    vagas: number;
    
    @OneToOne(() => Files) // Corrija aqui para usar a entidade correta
    @JoinColumn({ name: 'idFiles', referencedColumnName:'id'})
    files: Files; // Corrija aqui também


}
