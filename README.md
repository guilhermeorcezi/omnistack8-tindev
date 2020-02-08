<h1 align="center">
  <img src="./github_files/tindev2.png" alt="Omnistack 10" width="700">
<br>
Omnistack 8 - TinDev
</h1>

<p align="center"> 🚀 DevRadar: Aplicação desenvolvida na 8° semana da Ominstack feito pela Rocketseat.

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Features
Utilização de API do Github e artifícios de localização com a utilização de:

- ⚛️ **React Js** — Livraria Javascript para construção de interfaces;
- ⚛️ **React Native** — Livraria que provê uma maneira eficiente de criar aplicações nativas para Android e iOS;
- 💹 **Node Js** — Web framework que permite utilizar javascript tanto no frontend quanto no backend;

## Projeto

O TinDev é um projeto para ver outros desenvolvedores e dar "like" ou "dislike" a parte da exibição de suas informações, sendo possível receber um aviso de "Match!" caso os dois usuários dêem like um no outro.

## Getting started

### Instalação - Backend
Clone o projeto em seu computador. Configure o MongoDB e crie uma arquivo **.env** para passar a string de conexão com seu `User:Senha`na propriedade MONGO_URL.  

```bash
MONGO_URL: string de conexão
```
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento) execute:
```bash
cd backend
yarn install
yarn dev
```

### Instalação - Frontend
Para iniciar o **Frontend** do React utilize os comandos:
```bash
cd frontend
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido no dia 3 de 5.  

### Mobile

Para ver a aplicação mobile com o React Native primeiro é necessário colocar o IP do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois executar os comandos:
```bash
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:19002`. Conecte seu emulador, ou teste o aplicativo por `LAN`: baixe o aplicativo *Expo* da Play Store ou App Store e em seguida escaneie o código QR.

### Insomnia 
Para testar a API, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` → `Import Data` → `From File` → e selecione o arquivo ` 	Insomnia.json` deste repositório.

## Licença

Esse projeto é licensiado pela MIT License - Veja a página da [licença](https://opensource.org/licenses/MIT) para detalhes
