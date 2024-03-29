# Aplicação web para e-commerce.

### Como Usuário/Cliente você terá acesso ->

### Página de Login.
![LoginPage](https://user-images.githubusercontent.com/82123987/217118423-6ccfabde-2936-46ed-8af3-4ade2acac5d4.png)
### Página de cadastro.
![registeruserspage](https://user-images.githubusercontent.com/82123987/217118424-3ca6f20b-1691-4ddd-a216-a55c3e8de112.png)
### Páginal Inicial.
![homepageUser](https://user-images.githubusercontent.com/82123987/217118415-0cfb4dbb-bd35-47f2-9f73-fda84a1458c5.png)
### Carrinho de compras.
![cart](https://user-images.githubusercontent.com/82123987/217118411-c4dd16f4-8cd2-44f6-9e88-dda11a5d0b8b.png)

### Como Administrado você terá acesso ->

### Dashboard com informações.
![dashboardAdmin](https://user-images.githubusercontent.com/82123987/217118412-102ed465-fef1-4bda-b0ac-9d3b60c179c4.png)
### Opções de administrador (Cadastrar, editar, consultar e remover) Produtos e Usuários. 
![AdminSettings](https://user-images.githubusercontent.com/82123987/217118408-779dbbc7-4b74-47e3-b8ea-cbddecd5c616.png)


## Funcionalidades gerais

* Gerenciamento de Produto/Estoque.
* Gerenciamento de usuário.
* Dashboard com informações e consultas.
* Carrinho de compras com todas informações pertinentes ao item em andamento dacompra.


## 💻 Backend </br>

# Backend foi desenvolvido com as seguintes ferramentas -> 
* NodeJs
* Express - (Gerenciamento de rotas e requisições)
* Jason Web Token - (Utlizado para compartilhamento de informações e autenticação de usuário) </br>
* Bcryptjs - (Utlizado para criptografia do tipo hash para senhas dos usuarios salvas no banco de dados) </br>
* Sequelize -  (O Sequelize é uma ferramenta Node.js ORM fácil de usar e baseada em promessas para Postgres) </br>
* SequelizeCli - (Para criar modelos, configurações e arquivos de migração para o banco de dados) </br>

</br>

## 💻 Frontend</br>
# Frontend foi desenvolvido com as seguintes ferramentas -> 
* ReactJs + Typescript- (Context, hooks, componentes e props, estados)</br>
* Axios - (Utilizado para gerenciar e manipular requisições feitas ao backend)</br>
* TailwindCss - (Framework css para estilização e responsividade do layout)</br>
* React-router-dom - (Utilizado para controle e manipualão das rotas de forma dinâmica, também utlizado para implementação de rotas privadas )</br>
* Js Cookie - (Utilizado apra validação do token do usuario ao fazer login)</br>
* React-hook-form + Yup - (Utilizados para criar, validar e manipular os formulários) </br>
* React-icons
* LocalStorage - (Utilizado para armazenar dados no navegador  que foram requisitados do banco de dados

##  Banco de dados 
* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" hight="30px" width="30px"> MySQL
 

## Construido com Vite
* Vite é uma ferramenta com o objetivo de criar um ambiente de desenvolvimento simples e super rápido. Fornece uma experiência de desenvolvimento enxuta para projetos modernos.
</br> 

# Para testar e rodar o Front-End projeto na sua máquina siga o passo a passo abaixo. 
</br>
 1 - Instale o Git em sua máquina, se ainda não tiver feito isso.</br>
 2 - Abra o terminal ou o Git Bash e navegue até o diretório onde você deseja clonar o projeto.</br>
3 - Clone o repositório do GitHub usando o seguinte comando:</br>
 git clone https://github.com/CamilodeAssis/Smart-Store-1.0.git</br>
 4 - Entre no diretório Client do projeto clonado com o seguinte comando:</br>
 cd Smart-Store-1.0/client</br>
 5 - Instale as dependências do projeto com o seguinte comando:</br>
 npm install ou yarn install</br>
6 - Execute o projeto com o seguinte comando:</br>
 npm run dev ou yarn dev</br>
7 - Abra o navegador em http://localhost:5173 para ver o projeto em execução.</br>
</br>

## Para rodar o Server NodeJs projeto na sua máquina basta instalar as dependencias, acessar o diretório Smart-Store-1.0/server e rodar o comando npm run dev ou yarn dev
</br>
</br>
Observe que esses comandos supõem que você tenha o Node.js e o npm ou o yarn instalados em sua máquina.
