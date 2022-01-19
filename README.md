# TRACKIT

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yaratavares/TrackIt">
  <a href="https://github.com/yaratavares/CineFlex/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/yaratavares/TrackIt">
  </a>
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"></p>

<p align="center">
 <a href="#-sobre-o-projeto">Projeto</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
  <a href="#-executar">Executar</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## 💻 Projeto

TrackIt - é uma página desenvolvida para mobile em que o usuário pode acompanhar seu progresso em desenvolver um novo hábito!
Através das suas credenciais registradas o usuário terá uma experiência personalizada de acordo com as informações que insere. Contém as páginas: Login, Cadastro, Hábitos, Hoje e Histórico.

Décimo projeto desenvolvido no curso de Full-Stack Developer na [Driven Education](https://www.driven.com.br/).

---

## ⚙️ Funcionalidades

- O usuário pode reservar uma sessão de cinema através dos seguintes passos:
  - [x] assim que o usuário entra no site são listados todos os filmes que estão em cartaz
  - [x] ao clicar em um filme, o usuário deve ser redirecionado para a página "/sessoes/(idFilme)", sendo (idFilme) o id do filme clicado, onde são exibidos os horários
  - [x] ao clicar em uma sessão, o usuário deve ser redirecionado para a rota "/assentos/(idSessao)", onde (dSessao) é o id da sessão escolhida, os assentos podem estar:
    - indisponíveis
    - disponíveis
  - [x] quando for escolhido um assento disponível ele será selecionado, pode-se escolher mais de um
  - [x] não sendo obrigatório inserir o nome e cpf, poderá clicar em "Reservar assento(s)", o usuário será redirecionado para a rota "/sucesso". Isso fará com os assentos marcados fiquem indisponíveis para outras marcações.
  - [x] nesta tela poderá retornar para página inicial com a listagem de filmes
  - [x] a todo momento, exceto na página inicial pode-se retornar para página anterior com o botão "voltar"

---

## 🎨 Layout

O layout somente para Mobile da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/vlmWGAw6f8sguBNgYkN55o/TrackIt-(Copy)">
<img alt="Figma Driven Education" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Mobile

---

## 🚀 Como executar o projeto

Você pode somente acessar a [página](https://track-it-f0ue8uyrw-yaratavares.vercel.app/) ou instalar na sua máquina como seguem as instruções a seguir:

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação web (Front-end)

```bash
# Clone este repositório
$ git clone git@github.com:yaratavares/TrackIt.git
# Vá para a pasta da aplicação e instale as dependências
$ npm install
# Execute a aplicação em modo de desenvolvimento
$ npm run start
# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Mobile**

<p align="center">
<a src="https://reactjs.org/">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="badge react"/> </a> ✦ <a src="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/></a> ✦ <a src="https://styled-components.com/"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>
✦ <a src="https://axios-http.com/"><img src="https://img.shields.io/badge/Axios-6F63E7?style=for-the-badge"/></a> ✦ <a src="https://https://day.js.org/"><img src="https://img.shields.io/badge/Day.js-F35C4B?style=for-the-badge"/></a> ✦ <a src="https://github.com/wojtekmaj/react-calendar"><img src="https://img.shields.io/badge/React Calendar-B93218?style=for-the-badge"/></a> ✦ <a src="https://mhnpd.github.io/react-loader-spinner/"><img src="https://img.shields.io/badge/React Loader Spinner-000000?style=for-the-badge"/></a> ✦ <a src="https://github.com/kevinsqi/react-circular-progressbar"><img src="https://img.shields.io/badge/React Circular ProgressBar-3E98C7?style=for-the-badge"/></a>
</p>

> Veja o arquivo [package.json](https://github.com/yaratavares/TrackIt/package.json)

---

## 🧜‍♀️ Autora

<a href="https://www.linkedin.com/in/yaracristinatavares/" >
 <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/91642311?v=4" width="100px;" alt="foto"/>
 <p>Yara Tavares 🚀</p>
</a>
  
---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

## 💻 [Page](https://track-it-1zspg6n77-yaratavares.vercel.app/hoje)

## 🚀 Tecnologias

Projeto desenvolvido em React

Bibliotecas utilizadas:

- [Google Fonts](https://fonts.google.com/)
- [React Circular Progressbar](https://github.com/kevinsqi/react-circular-progressbar)
- [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/)
- [React Calendar](https://github.com/wojtekmaj/react-calendar#readme)
- [Day.js](https://day.js.org/)

## 📝 Projeto

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/3r8MSf9dIPuFlvZHuHTZXF/TrackIt?node-id=0%3A1). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.
