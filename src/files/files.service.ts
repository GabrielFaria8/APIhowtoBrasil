import { Injectable } from '@nestjs/common';
import { Files } from './files.entity';
import { Request } from 'express';
import { Inject } from '@nestjs/common/decorators';
import { Repository } from 'typeorm/repository/Repository';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class filesService {
  constructor(
    @Inject('FILES_REPOSITORY')
    private filesRepository: Repository<Files>,
    
  ) {}  
  
  async salvarDados(file: Express.Multer.File, req: Request) {
    const arquivo = new Files();
    arquivo.id = uuidv4();
    arquivo.fileName = file.filename;
    arquivo.contenLength = file.size;
    arquivo.contentType = file.mimetype;
    arquivo.url = `${file.filename}`;

     this.filesRepository.save(arquivo);
    return arquivo.id;
  }

  async validaArquivo(fileName: string){

    return this.filesRepository.find({
      where: {
        fileName,
      },
    });
  }
}
