

#  CHATGPT + DALLE2 - PROJETO BEM LEGAL!
## TUTORIAL - (Texto + Imagem GPT Next.js) + API + OPEN-AI

Este é um exemplo básico de como ter um site sem servidor disponível ao público que **não** vaza sua chave API OpenAI para o público.
Basta adicionar sua chave de API OpenAI ao arquivo .env e você está pronto para ir.

Use `npm run dev` para hospedar localmente @ `localhost:3000`. Ou utilize `npm run build` e depois `npm run start` para visualizar a construção pública. Empurre para uma conta Vercel gratuita para hospedá-lo e compartilhá-lo com o mundo.

Atualizar uma Chave de Chave Privada do chatGPT em 
".env"


## 1.0 - Dependências 

Dependências: 
 - VSCODE ou outro editor do seu interesse.
 - Node.JS instalado na máquina, para poder rodar localmente. 

 - Possuir uma chave API-KEY da OPENAI
```sh
https://platform.openai.com/account/api-keys
```

## 2.0 - Configurando o Projeto :
 
1. Clone este repositório para alguma pasta do seu computador, seu projetoweb.
2. Exemplo, crie uma pasta na raíz C:

```sh
C:\gpt-nextjs-example
```

## 3.0 - Atualizando sua chave API-KEY 
2.1 Procure o arquivo com a extensão *".env"* nos arquivos da pasta:
2.3 Edite a linha abaixo no seu editor: 

```sh
OPENAI= "Insira sua API-KEY do projeto"
```
2.4 Ficando assim no final (sem aspas):

```sh
OPENAI= XKXKXKXKXKXKXKXKXKXKXKXKXKXKXKXKXKXKXKX
```

## 4.0 - Executando 

3. Abrir seu editor padrão vscode ou outro:

4. Abrir o terminal integrado dentro do caminho da "pasta".
Rodar o comando abaixo para atualizar os pacotes (node_modules) que estão relacionados no "*package.json*":

```sh
npm install
```
5. Use o comando abaixo para executar o projeto:
```sh
npm run dev
```
6. Se nenhum erro foi apresentado até aqui, Va até ao seu Navegador Web: 
Use o comando abaixo para executar o projeto:

```sh
http://localhost:3000
```

7. Lembre-se,  o projeto só irá funcionar se você atualizou a API-KEY
no arquivo abaixo:

```sh
.env
```
8. Se quiser encerrar o projeto local durante a execução, basta apenas pressionar as teclas
dentro do terminal do windows. 

```sh
CTRL+C
```

## Referências da API do Projeto:

```sh
https://platform.openai.com/docs/libraries/node-js-library
```

Modelos do ChatGPT/Dalle-2 para Testes
```sh
https://platform.openai.com/docs/models/overview
```

Referências  
```sh
Autores: (Bob Ross / Brad Schiffs)
```
Adaptação e Tradução:
```sh
### - Adaptação: Everton Eduardo Vilela - EEV - "@duhvilela"
```
