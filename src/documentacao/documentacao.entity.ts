import { Injectable } from "@nestjs/common";
import { InteressesEntity } from "src/interesses/interesses.entity";

@Injectable()
export class DocumentacaoEntity extends InteressesEntity {
    documentacao: string;
    linkGoverno: string;

    constructor(id: string, tipos: number, nome: string, documentacao: string, linkGoverno: string) {
        super(id, tipos, nome, null, null, null, null,null);

        this.documentacao = documentacao;
        this.linkGoverno = linkGoverno;
    }
}
