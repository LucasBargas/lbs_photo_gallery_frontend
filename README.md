## Projeto #Galeria de Fotos LBS
O projeto **#Galeria de Fotos LBS** foi desenvolvido por mim, Lucas Bargas, para estudo, com base em um conjunto de layouts que encontrei na web. Este projeto tem como objetivo apresentar uma galeria de fotos onde os usuários cadastrados podem compartilhar suas fotografias publicamente.

### Por que fiz este projeto?
Há alguns meses venho estudando com afinco tecnologias backend. Tenho focado, no momento, no Nodejs com Express e no banco de dados, MongoDB. Já tive a oportunidade de praticar estas tecnologias em outros projeto (que também estão publicamente no github), porém, até então, não havia feito uso do **Multer** que é um middleware que auxlia no upload de arquivos. Então, especialmente por este motivo, fiz esta galeria que requer uploads, no caso de fotos.
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
* Nextjs;
* Styled components;
* Hooks e Context API;
* Axios para o consumo da API Rest desenvolvida no Backend;
* Renderização de dados com SSR e SSG;
* React Icons.

### Prints do App (Versão Desktop e Mobile)

#### Página incial
<img alt="Página inicial" src="https://i.ibb.co/KN3345g/photo-gallery-home.png">
<img alt="Página inicial com modal" src="https://i.ibb.co/XV0nrWV/photo-gallery-home-modal.png">

#### Página de Login
<img alt="Página de Login" src="https://i.ibb.co/rQfsPNS/photo-gallery-login.png">

#### Página de Cadastro de Usuário
<img alt="Página de Cadastro de Usuário" src="https://i.ibb.co/r77fVJv/photo-gallery-register.png">

#### Página de Perfil público dos Usuários
<img alt="Página de Cadastro de Usuário" src="https://i.ibb.co/VpXG1gx/photo-gallery-public-profile.png">

#### Página de Perfil do Usuário logado
<img alt="Página de Perfil do Usuário logado" src="https://i.ibb.co/7gQWkjh/photo-gallery-private-profile.png">
<img alt="Página de Perfil do Usuário logado com modal" src="https://i.ibb.co/BLZnspK/photo-gallery-private-profile-modal.png">

#### Página de Edição de Usuário
<img alt="Página de Edição de Usuário" src="https://i.ibb.co/WGQx6Fh/photo-gallery-edit.png">

Gostaria de ver o repositório do Backend deste app?
[Clique aqui](https://github.com/LucasBargas/lbs_photo_gallery_backend)
