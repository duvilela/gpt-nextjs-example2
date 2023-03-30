

#  (CHATGPT + DALLE2) - PROJETO BEM LEGAL!
## TUTORIAL - (Texto + Imagem GPT Next.js) + API + OPEN-AI

Este projeto é uma interação com a inteligência artificial da OPENAI, utilizando dois recursos, o chatgpt que é o bot de texto e o Dalle que é a inteligência artificial que gera imagens aleatórias,  nesse projeto está sendo utilizada o modelo davinci 003, mas você pode usar outros modelos.

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

Modelo usado para teste nesse projeto
```sh
model: "text-davinci-003" ,  ( porém existem muitas).
```


Referências  
```sh
Autores: (Bob Ross / Brad Schiffs)
https://github.com/LearnWebCode/gpt-nextjs-example (original project)
```
Adaptação e Tradução:
```sh
### - Adaptação: Everton Eduardo Vilela - EEV - "@duhvilela"
```

## Imagens do Projeto
```sh
### Segue alguns prints, do projeto em execução:
```

## Passo 1 - Tela do Projeto:
![image](https://user-images.githubusercontent.com/62842286/228988623-e0d0d451-8a5c-4197-9ca8-bfa875d48d1f.png)

## Passo 2 - Rodando a aplicação:
![image](https://user-images.githubusercontent.com/62842286/228988785-72fe9f29-9854-4ef1-b8fd-7c445d7b2fe8.png)

## Passo 3 - Pagina Inicial - Localhost:3000
![image](https://user-images.githubusercontent.com/62842286/228988931-5aa5f060-4aec-4d5c-8530-0dbe1940c7fc.png)

## Passo 4 - Pagina Inicial - Modo Texto -  Pergunta Respondida !!
![image](https://user-images.githubusercontent.com/62842286/228989054-e2b40b06-e587-4f1b-936e-f91af19f077b.png)

## Passo 5 - Pagina Inicial - Modo Imagem 1 -  Gerando uma Imagem com um prompt criado pelo modo texto !
![image](https://user-images.githubusercontent.com/62842286/228989220-cf7b5cad-eafb-43ff-a210-456ccfabdc4c.png)

## Passo 6 - Pagina Inicial - Modo Imagem 2 -  Gerando a Imagem conforme o prompt acima !

![image](https://user-images.githubusercontent.com/62842286/228989348-5bbaa226-a4bc-4944-9d49-dac1190fe923.png)

## Passo 6 - Resumo !!
Por enquanto é isso ,  olha quanta coisa legal dá para ser feita com esta API da Open-AI, irei continuar nos projetos, ainda vou lançar mais que roda no terminal de exemplo.














