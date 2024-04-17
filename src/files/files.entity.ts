// export class files{
//     id: number;
//     fileName: string;
//     contenLength: number;
//     contentType:string;
//     url: string;
// }

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Files {
    @PrimaryColumn()
    id: string;

    @Column({ length: 1255 })
    fileName: string;

    @Column('int')
    contenLength: number;

    @Column({ length: 1255 })
    contentType: string;

    @Column({ length: 1255 })
    url: string;
}
