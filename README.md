# Desafio Login

Projeto desenvolvido como parte da **Pós-graduação em Automação de Testes de Software**, com o objetivo de praticar a criação de testes automatizados para uma funcionalidade de login.

## Sobre o Projeto

O projeto implementa um módulo de gestão de usuários com uma função de `login` que valida credenciais contra uma lista de usuários cadastrados. A função cobre os seguintes cenários:

- Login com credenciais válidas
- Senha incorreta
- Credenciais expiradas
- E-mail não informado (`null`, `undefined` ou vazio)
- Senha não informada (`null`, `undefined` ou vazio)
- Usuário não encontrado

## Estrutura do Projeto

```
desafioLogin/
├── src/
│   └── gestaoUsuarios.js   # Módulo com a lógica de login
├── test/
│   └── gestaoUsuarios.test.js  # Testes automatizados com Mocha
├── .gitignore
├── package.json
└── README.md
```

## Tecnologias Utilizadas

- **Node.js**
- **Mocha** — framework de testes
- **Node:assert** — módulo nativo de asserções

## Como Executar

### Pré-requisitos

- Node.js instalado

### Instalação

```bash
npm install
```

### Executar os Testes

```bash
npx mocha
```
