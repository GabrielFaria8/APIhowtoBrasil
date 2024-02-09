<p>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div>
  <p align="center">
    <img src="src/image/logo.jpg" alt="Logo" height="280">
  </p>
</div>

# Introdução
<p> Neste projeto, desenvolveremos uma aplicação web para auxiliar imigrantes recém-
chegados no Brasil a se adaptarem de forma legal e identificar os principais pontos
públicos essenciais em sua localização.
O objetivo da aplicação é fornecer informações relevantes sobre documentos
necessários, direitos e deveres, serviços de saúde, educação, transporte e outras
informações úteis para facilitar a integração dos imigrantes. Além disso, a aplicação
também ajudará a identificar locais de acolhimento e organizações que oferecem
suporte aos imigrantes. Vamos implementar restaurantes em que a pessoa possa se
alimentar com baixo custo ou de forma gratuita.
O projeto será desenvolvido em etapas, incluindo o levantamento de informações, o
design e desenvolvimento da aplicação, a implementação de recursos de
localização e a criação de uma interface intuitiva e de fácil utilização.
Vamos trabalhar juntos para criar uma aplicação que seja útil e acolhedora para os
imigrantes recém-chegados no Brasil. </p>

- **Consulta**: Permite consultar interesses.
- **Inclusão**:  Permite adicionar novos interesses.
- **Exclusão**:  Permite remover informações.
- **Alteração**: Permite modificar dados de usuário e interesses.
- **Compartilhar**: Permite compartilhar interesses.

**Professor**: JOÃO PEDRO PARELLA 
 <a href="https://www.linkedin.com/in/jpparella/">Linkedin</a>


## Instalação

```bash
# instalar node_modules
$ npm install
```

## Executando API

```bash
# ativação de recarregamento automático
$ npm run start:dev
```

### Usuario
```bash
# consultar
POST http://localhost:3001/usuarios/login
Selecione Body, raw, json

{
  "email": "GABRIEL_12345@gmail.com",
  "senha": "GABRIEL@1234"
}
```
```bash
# inclusão
POST http://localhost:3001/usuarios
Selecione Body, raw, json

{
  {
  "nome": "Carlos",
  "ultimoNome": "Visto de Trabalho",
  "statusMigratório": "Edurado",
  "interesses": "Trabalho",
  "email": "teste@teste.com",
  "senha": "Asd@444555666"
}

}
```
```bash
# exclusão
DELET http://localhost:3001/usuarios/{"id do usuario"}
Selecione Params
```
```bash
# alteração
PUT http://localhost:3001/usuarios/{"id do usuario"}
Selecione Params
{
  "nome": "Karllos",
  "ultimoNome": "Visto de Trabalho",
  "statusMigratório": "Eddurado",
  "interesses": "moradia",
  "email": "teste@teste.com",
  "senha": "Asd@444555666",
  "foto": "asdasdaslo-4d06e95a-4ee7-4195-b48e-6cc05a264de8.png"
}
```
```bash
# consultar
GET http://localhost:3001/usuarios
Selecione Params
```
### Formulário



```bash
# inclusão Foto Usuario
POST http://localhost:3001/usuarios/foto/{"url da foto"}
Selecione Body, raw, json

{
  "nome": "Carlos",
  "ultimoNome": "Visto de Trabalho",
  "statusMigratório": "Edurado",
  "interesses": "Trabalho",
  "email": "teste@teste.com",
  "senha": "Asd@444555666",
  "foto": "asdasdaslo-4d06e95a-4ee7-4195-b48e-6cc05a264de8.png"
}
```
### 👾 Linguagens e Ferramentas
<img align="left" alt="TypeScript" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/typescript.png" />
<img align="left" alt="JavaScript" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/javascript.png" />
<img align="left" alt="Nest.js" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/nestjs.png" />
<img align="left" alt="Postman" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/postman.png" />
<br>