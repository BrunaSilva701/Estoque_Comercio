# Estoque_Comercio

## Clonar o repositorio
1.Copie o link do repositorio
 * PS: O link do repositório está em ```<>code```. É o ```HTTPS```
2. Na sua maquina abra o git bash em arquivos e escreva ```git clone LINK DO REPOSITORIO```

## Cria uma nova branch (Resitorio clonado pela primeira vez)
1. Acesse o terminal
2. Acesse a branch develop ````checkout develop````
3. Faça um git pull (````git pull origin develop````) para receber todas as informações atualizadas
4. Crie uma nova branch com base na develop usando ````git checkout -b NOME DA BRANCH````
5. Verifique se está na branch que você criou usando ````git branch -a```` (comando mostra todas as branches disponiveis)
6. Se não aparecer ````* NOME DA BRANCH````. Faça: git checkout NOME DA BRANCH
7. Suba a branch para o repositorio ````git push origin NOME DA BRANCH````

   **PS: Abrir uma nova branch para cada auteração**

## Cria uma nova branch (Resitorio já na maquina, ou seja, sofre auterações conforme atualização do github)
1. Virifique as branches disponiveis usando ````git branch -a````
2. Se no repositorio tiver branches diferentes, faça ````git fetch --prune```` (mostra branches novas e apagadas)
3. Acesse a branch de desenvolvimento ````git checkout develop````
4. Puxe as ultimas atualizações: ````git pull origin develop````
5. Crie uma nova branch com base na develop usando ````git checkout -b NOME DA BRANCH````
6. Verifique se está na branch que você criou usando ````git branch -a```` (comando mostra todas as branches disponiveis)
7. Se não aparecer ````* NOME DA BRANCH````. Faça: ````git checkout NOME DA BRANCH````
8. Suba a branch para o repositorio ````git push origin NOME DA BRANCH````

   **PS: Abrir uma nova branch para cada auteração**
   
## Dependencias do BackEnd
* PS: Rodar cada dependencia dentro da pasta especifica. Nesse caso, a ```BackEnd```
* PS: Rodar na sua maquina apenas a dependencia necessária, ou seja, ```npm install```. Caso seja necessário rodar outra dependencia o projeto não vai iniciar e o VsCode vai avisar que está faltando 
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

<!-- ## Dependencias do FrontEnd
* PS: Rodar cada dependencia dentro da pasta especifica. Nesse caso, a ```FrontEnd```
* PS: Rodar na sua maquina apenas as dependencias necessárias, ou seja, ```npm install```. Caso seja necessário rodar outra dependencia o projeto não vai iniciar e o  VsCode vai avisar que está faltando 
````
• npx create-vite@latest frontend (Criar projeto React) (Não precisa rodar novamente)

- Dentro da pasta vite-project
• npm install (Instalar dependências ) 
• npm install axios (Instalar Axios )

- Rodar ao clonar
• npm install (Instalar dependências ) (todas devem rodar ao clonar o repositorio pois vai permitir os testes)
```` -->

## Arquivos Front-End
1. Está dividido em HTML, CSS e JavaScript
   
## Subir alterações para o repositório
1. Verifique em qual branch você está:
```git branch -a```

2. Acesse a branch criada:
```git checkout NOME DA BRANCH```

3. Adicione os arquivos modificados:
```git add .```

4. Faça o commit das alterações:
```git commit -m "TÍTULO DO COMMIT"```

* PS: O título do commit deve representar claramente o que foi alterado para manter o histórico organizado e compreensível.

5. Envie as alterações para o repositório remoto:
```git push origin NOME DA BRANCH```

## Abrir o banco de dados (Não rodar ao clonar o repositorio)
```npx sequelize-cli db:migrate```

## Pull Request
1. Vai aparecer uma mensagem automatica no Gitub ````Creat Pull Request````. Caso não, clique em **Contribute** no inicio da página na aba da branch que você criou.
2. Abra um PR da **nova branch** para a branch **develop**

## Rodar a aplicação 
**FRONTEND**
<!-- 1. Abra o terminal e entre na pasta FronEnd através de ```cd FrontEnd```
2. Acesse a pasta vite-project através de ````cd vite-project````
3. Rode no terminal do FrontEnd ```npm run dev```
4. Coloque o link que aparecer no seu navegador para ver as telas -->
1. Clique em live server na pasta do HTML para mostrar a tela

**BACKEND**
<!-- 1. Abra um novo teminal (não feche o que está com o front aberto) e entre na pasta BackEnd através de ```cd BackEnd``` -->
1. Acesse a pasta ````BackEnd```` através de ````cd BackEnd````
2. Rode no terminal BackEnd ```node src/app.js```

## Rotas utilizadas
![](./img/rotas.png)
