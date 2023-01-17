## Projeto #Galeria de Fotos LBS
O projeto **#Galeria de Fotos LBS** foi desenvolvido por mim, Lucas Bargas, para estudo, com base em um conjunto de layouts que encontrei na web. Este projeto tem como objetivo apresentar uma galeria de fotos onde os usuários cadastrados podem compartilhar suas fotografias publicamente.

### Por que fiz este projeto?
Há alguns meses venho estudando com afinco tecnologias backend. Tenho focado, no momento, no Nodejs com Express e no banco de dados, MongoDB. Já tive a oportunidade de praticar estas tecnologias em outros projeto (que também estão publicamente no github), porém, até então, não havia feito uso do **Multer** que é um middleware que auxilia no upload de arquivos. Então, especialmente por este motivo, fiz esta galeria que requer uploads, no caso de fotos.
Agora pensando no front end, também tenho praticado dedicadamente o framework **Nextjs**, onde a renderização no lado do servidor se torna possível. Sendo assim, por conta disso, fiz a maioria das renderizações com SSG e SSR. Tive e ainda tenho algumas dificuldades, mas sem dúvida o aprendizado foi muito.

### Link para visualizar o projeto
<https://galeriadefotos-lbs.vercel.app/>

### Principais recursos do App
* Registo, login e logout de usuário;
* Edição de usuário, somente autenticado;
* Registro e exclusão de fotos, somente autenticado;
* A exclusão só pode ser feita por quem postou a foto.

### Tecnologias utilizadas
#### Front end
<table>
  <tr>
    <td>Nextjs</td>
    <td>Styled Components</td>
    <td>Axios</td>
    <td>React icons</td>
    <td>Nookies</td>
  </tr>
  <tr>
    <td>13.1</td>
    <td>5.3</td>
    <td>1.2</td>
    <td>4.7</td>
    <td>2.5</td>
  <tr>
</table>

### Outros recursos utilizados
* Hooks e Context API;
* Renderização de dados com SSR e SSG;

### Prints do App (Versão Desktop e Mobile)

#### Página incial
<img alt="Página inicial" src="https://user-images.githubusercontent.com/76006347/212766458-d37133b3-65e4-4a2a-8712-8a63b88bf050.png">
<img alt="Página inicial com modal" src="https://user-images.githubusercontent.com/76006347/212767020-315c9325-017f-4c11-bcba-2906d385a35e.png">

#### Página de Login
<img alt="Página de Login" src="https://user-images.githubusercontent.com/76006347/212766925-40a5b11c-da6b-469b-ad60-feae435e4b9f.png">

#### Página de Cadastro de Usuário
<img alt="Página de Cadastro de Usuário" src="https://user-images.githubusercontent.com/76006347/212767108-6f4f573e-d159-470c-bb56-e004826337a9.png">

#### Página de Perfil público dos Usuários
<img alt="Página de Edição de Usuário" src="https://user-images.githubusercontent.com/76006347/212767419-4c91f658-b61c-476b-a03c-998f187248b0.png">

#### Página de Perfil do Usuário logado
<img alt="Página de Perfil do Usuário logado" src="https://user-images.githubusercontent.com/76006347/212767519-fe93793a-1b7f-4874-aa65-1778ee7aeca2.png">
<img alt="Página de Perfil do Usuário logado com modal" src="https://user-images.githubusercontent.com/76006347/212767665-1fdf7125-24e4-4ff0-acec-6389e0855925.png">

#### Página de Edição de Usuário
<img alt="Página de Edição de Usuário" src="https://user-images.githubusercontent.com/76006347/212767790-5e9c6353-b25f-4b07-bf8e-5dcf34f43255.png">

### Como executar este Frontend

#### Pré-requisitos
* Possuir o Nodejs instalado;
* Estar com o backend em execução (link do repositório do mesmo no final do readme).

#### Clone o repositório
```bash
git clone https://github.com/LucasBargas/lbs_photo_gallery_frontend.git
```
#### Entre na pasta
```bash
cd lbs_photo_gallery_frontend
```
#### Instale as dependências
```bash
npm install
```
#### Configure as variáveis de ambiente
```bash
# Crie um arquivo .env.local e passe os valores
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_API_PHOTOS_URL=http://localhost:8080/uploads/images/photos
NEXT_PUBLIC_API_USERS_URL=http://localhost:8080/uploads/images/users
NEXT_PUBLIC_DOMAIN_URL=http://localhost:3000
NEXT_PUBLIC_CONFIG_IMAGES_DIR=http://localhost:8080
```

#### Execute o App
```bash
npm run dev
```

# Autor
Lucas Bargas da Silva
</br>
<https://projetoslucasbargas.vercel.app/>
</br>
<https://www.linkedin.com/in/lucas-bargas/>

Gostaria de ver o repositório do Backend deste app?
[Clique aqui](https://github.com/LucasBargas/lbs_photo_gallery_backend)
