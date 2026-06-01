<div align="center">

# 📋 AppReact — CRUD de Usuários e Contatos

**Aplicativo mobile com gerenciamento completo de usuários e contatos via API REST local**

[![React Native](https://img.shields.io/badge/React%20Native-0.83.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-55.0.8-000020?style=flat-square&logo=expo&logoColor=white)](https://expo.dev/)
[![Axios](https://img.shields.io/badge/Axios-1.13.6-5A29E4?style=flat-square&logo=axios&logoColor=white)](https://axios-http.com/)
[![JSON Server](https://img.shields.io/badge/JSON%20Server-1.0.0--beta-6f4e37?style=flat-square)](https://github.com/typicode/json-server)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-ISC-0080ff?style=flat-square)](./package.json)

</div>

---

## 📖 Visão Geral

**AppReact** é um aplicativo mobile desenvolvido com **React Native + Expo** que implementa um sistema completo de **CRUD** para duas entidades principais: **Usuários** e **Contatos**. O app consome uma API REST local simulada pelo **JSON Server**, utilizando **Axios** para as requisições HTTP e **React Navigation** para a navegação entre telas.

Desenvolvido com foco em aprendizado e prática de conceitos fundamentais do desenvolvimento mobile, como integração com APIs, gerenciamento de estado, navegação e boas práticas de estruturação de projetos.

---

## ✨ Funcionalidades

- 👤 **CRUD de Usuários** — criar, listar, editar e excluir usuários com nome, CPF, email e senha
- 📞 **CRUD de Contatos** — criar, listar, editar e excluir contatos vinculados a um usuário
- 🔗 **Relacionamento Usuário ↔ Contatos** — cada contato pertence a um usuário específico (`usuario_id`)
- 🌐 **Integração com API REST** — consumo de dados via Axios + JSON Server
- 🗺️ **Navegação entre telas** — React Navigation com Native Stack
- 📱 **Multiplataforma** — compatível com Android, iOS e Web

---

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|-----------|-----------|
| Framework Mobile | React Native 0.83.2 |
| Plataforma | Expo ~55.0.8 |
| Linguagem | JavaScript (ES2023) |
| HTTP Client | Axios ^1.13.6 |
| API Mock | JSON Server ^1.0.0-beta.13 |
| Navegação | React Navigation 7.x (Native Stack) |
| Roteamento Web | React Router DOM ^7.13.1 |
| Build Tool | Expo Dev Client |

---

## 📁 Estrutura do Projeto

```
appreact/
├── App.js                  # Entrada principal do app
├── app.json                # Configurações do Expo
├── metro.config.js         # Configuração do bundler Metro
├── jsconfig.json           # Configuração de paths do JS
├── db.json                 # Banco de dados local (JSON Server)
├── package.json
│
├── src/
│   └── screens/
│       └── index.js        # Ponto de entrada das telas
│
└── assets/
    └── images/             # Recursos de imagem do app
```

### Estrutura do banco de dados (`db.json`)

```json
{
  "usuarios": [
    { "id": "...", "nome": "...", "cpf": "...", "email": "...", "senha": "..." }
  ],
  "contatos": [
    { "id": "...", "usuario_id": "...", "nome": "...", "telefone": "...", "email": "..." }
  ]
}
```

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/)
- [Expo Go](https://expo.dev/go) no dispositivo ou emulador configurado

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/guiimanuel/appreact.git

# 2. Acesse a pasta do projeto
cd appreact

# 3. Instale as dependências
npm install
```

### Rodando a API (JSON Server)

O app depende de uma API local simulada pelo JSON Server. Rode em um terminal separado:

```bash
npx json-server db.json
```

> Por padrão, o servidor sobe em `http://localhost:3000`. Certifique-se de que a base URL no código aponta para este endereço.

> **Dispositivo físico:** use o IP da sua máquina na rede local (ex: `http://192.168.x.x:3000`) em vez de `localhost`.

### Executando o App

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Rodar no Android
npm run android

# Rodar no iOS
npm run ios

# Rodar no navegador (Web)
npm run web
```

---

## 🌐 Endpoints da API

Com o JSON Server rodando, os seguintes endpoints ficam disponíveis:

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/usuarios` | Lista todos os usuários |
| `POST` | `/usuarios` | Cria um novo usuário |
| `PUT` | `/usuarios/:id` | Atualiza um usuário |
| `DELETE` | `/usuarios/:id` | Remove um usuário |
| `GET` | `/contatos` | Lista todos os contatos |
| `GET` | `/contatos?usuario_id=:id` | Lista contatos de um usuário |
| `POST` | `/contatos` | Cria um novo contato |
| `PUT` | `/contatos/:id` | Atualiza um contato |
| `DELETE` | `/contatos/:id` | Remove um contato |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um **fork** do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3. Faça commit das alterações: `git commit -m 'feat: adiciona minha feature'`
4. Faça push para a branch: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença ISC. Consulte o arquivo [package.json](./package.json) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido por **[Guilherme Manuel](https://github.com/guiimanuel)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-guiimanuel-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/guilhermemanuel)
[![GitHub](https://img.shields.io/badge/GitHub-guiimanuel-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/guiimanuel)

---

<div align="center">

⭐ Se este projeto foi útil para você, deixe uma estrela no repositório!

</div>
