import { Injectable } from "@nestjs/common";
import { InteressesEntity } from "src/interesses/interesses.entity";

@Injectable()
export class DocumentacaoEntity extends InteressesEntity {
    documentacao: string;
    linkGoverno: string;

    constructor(id: string, tipos: string, nome: string, Numero: string, Horario: string, LinkMaps: string, documentacao: string, linkGoverno: string) {
        super(id, tipos, nome, Numero, Horario, LinkMaps);
        this.documentacao = documentacao;
        this.linkGoverno = linkGoverno;
    }
}
