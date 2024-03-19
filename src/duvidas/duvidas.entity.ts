export class DuvidasEntity {
    id: string;
    pergunta: string;
    resposta: string;

    constructor(id: string, pergunta: string, resposta: string) {
        this.id = id;
        this.pergunta = pergunta;
        this.resposta = resposta;
    }

}