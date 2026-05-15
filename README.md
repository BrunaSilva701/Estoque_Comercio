# Estoque_Comercio

## Clonar o repositorio
1. Na sua maquina abra o git bash e escreva ```git clone LINK DO REPOSITORIO```
   * PS: O link do repositório está em ```<>code```. É o ```HTTPS```
2. Verifique se está na branch certa através de ```git branch -a``` (vai aparecer ```*main```)
3. Faça ```git pull origin main``` no terminal do projeto para baixar tudo que foi commitado
   * Vai aparecer a mensagem abaixo quando não tiver modificações e as modificações quando houver
``` 
    * branch   main  -> FETCH_HEAD     Already up to date
```

## Dependencias do BackEnd
* PS: Rodar cada dependencia dentro da pasta especifica. Nesse caso, a ```BackEnd```
* PS: Rodar na sua maquina apenas a dependencia necessária, ou seja, ```npm install```. Caso seja necessário rodar outra dependencia o projeto não vai iniciar e o  VsCode vai avisar que está faltando 
````
• npm init -y (Inicializar projeto) 
• npm install express cors sequelize sqlite3 dotenv (Dependências principais) 
• npm install --save-dev sequelize-cli (Dependências de desenvolvimento) 
• npm install --save-dev nodemon (reinicia o servidor automaticamente)

- Rodar ao clonar
• npm install (todas devem rodar ao clonar o repositorio pois vai permitir os testes)
````

## Criação de arquivos BackEnd (Não precisa rodar ao clonar)
1. Cria a pasta src
2. Dentro da src roda ```npx sequelize-cli init``` gerando a estrutura de desenvolvimento

## Dependencias do FrontEnd
* PS: Rodar cada dependencia dentro da pasta especifica. Nesse caso, a ```FrontEnd```
* PS: Rodar na sua maquina apenas as dependencias necessárias, ou seja, ```npm install```. Caso seja necessário rodar outra dependencia o projeto não vai iniciar e o  VsCode vai avisar que está faltando 
````
• npx create-vite@latest frontend (Criar projeto React) (Não precisa rodar novamente)

- Dentro da pasta vite-project
• npm install (Instalar dependências ) 
• npm install axios (Instalar Axios )

- Rodar ao clonar
• npm install (Instalar dependências ) (todas devem rodar ao clonar o repositorio pois vai permitir os testes)
````

## Subir para o repositorio
1. Faça ```git pull origin main``` para ter certaza que não está com conflito de informações
* Vai aparecer a mensagem abaixo quando não tiver modificações e as modificações quando houver (Depois disso segue próximos passos) 
``` 
    * branch   main  -> FETCH_HEAD     Already up to date
```

2. Faça ```git add .```
3. Faça ```git commit -m "TITULO DO COMMIT"```
   * PS: O titulo do commit deve ter relação com o que foi commitado para manter o histórico organizado e compreensível
4. Faça ```git push origin main``` para subir as novas informações

## Abrir o banco de dados
```npx sequelize-cli db:migrate```

## Rodar a aplicação 
**FRONTEND**
1. Abra o terminal e entre na pasta FronEnd através de ```cd FrontEnd```
2. Acesse a pasta vite-project através de ````cd vite-project````
3. Rode no terminal do FrontEnd ```npm run dev```
4. Coloque o link que aparecer no seu navegador para ver as telas

**BACKEND**
1. Abra um novo teminal (não feche o que está com o front aberto) e entre na pasta BackEnd através de ```cd BackEnd```
2. Rode no terminal BackEnd ```node src/app.js```

## Rotas utilizadas
![](./img/rotas.png)
