<p align="center" width="300px">
<img src="./src/common/assets/logo.jpg"/>
</p>
<p align="center">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yaratavares/TrackIt">
  <a href="https://github.com/yaratavares/TrackIt/commits/main">
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
 <a href="#-licença">Licença</a>
</p>

## 💻 Projeto

TrackIt - é uma página desenvolvida para mobile em que o usuário pode acompanhar seu progresso em desenvolver um novo hábito!
Através das suas credenciais registradas o usuário terá uma experiência personalizada de acordo com as informações que insere. Contém as páginas: Login, Cadastro, Hábitos, Hoje e Histórico.

Décimo projeto desenvolvido no curso de Full-Stack Developer na [Driven Education](https://www.driven.com.br/).

---

## ⚙️ Funcionalidades

- Como TrackIt você pode acompanhar seus hábitos:
  - [x] na página inicial você poderá iniciar uma sessão ou cadastrar-se;
  - [x] assim que a sessão é iniciada com um novo usuário a tela de Hoje é exibida, nessa página iram constar todos os hábitos cadastrados que seram feitos nesse dia;
  - [x] é possível nessa tela acessar também o Histórico e Hábitos;
  - [x] na tela de Histórico constam todos os dias do mês, que seram pintados de acordo com seu progresso:
    - vermelho: algum hábito não foi realizado;
    - verde: todos os hábitos neste dia forma realizados;
    - amarelo: dia de hoje.
  - [x] os dias que possuem coloração, exceto o dia de hoje podem ser clicados e mostram os hábitos que estavam programados para aquele dia.
- Além de acompanhar os hábitos que você já possui, com o TrackIt você continuará se desenvolvendo.

---

## 🎨 Layout

O layout somente para Mobile da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/vlmWGAw6f8sguBNgYkN55o/TrackIt-(Copy)">
<img alt="Figma Driven Education" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Mobile

<img src="./src/common/assets/trackit.gif"/>

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

<p align="center">
<a src="https://reactjs.org/">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="badge react"/> </a> ✦ <a src="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/></a> ✦ <a src="https://styled-components.com/"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>
✦ <a src="https://axios-http.com/"><img src="https://img.shields.io/badge/Axios-6F63E7?style=for-the-badge"/></a> ✦ <a src="https://https://day.js.org/"><img src="https://img.shields.io/badge/Day.js-F35C4B?style=for-the-badge"/></a> ✦ <a src="https://github.com/wojtekmaj/react-calendar"><img src="https://img.shields.io/badge/React Calendar-B93218?style=for-the-badge"/></a> ✦ <a src="https://mhnpd.github.io/react-loader-spinner/"><img src="https://img.shields.io/badge/React Loader Spinner-000000?style=for-the-badge"/></a> ✦ <a src="https://github.com/kevinsqi/react-circular-progressbar"><img src="https://img.shields.io/badge/React Circular ProgressBar-3E98C7?style=for-the-badge"/></a>
</p>

> Veja o arquivo [package.json](./package.json)

---

## 🧜‍♀️ Autora

<a href="https://www.linkedin.com/in/yaracristinatavares/" >
 <img style="border-radius: 100px" src="https://avatars.githubusercontent.com/u/91642311?v=4" width="80px;" alt="foto"/>
 <p>Yara Tavares 🚀</p>
</a>
  
---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
