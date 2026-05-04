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
├── mochawesome-report/
│   ├── mochawesome.html    # Relatório visual dos testes
│   ├── mochawesome.json    # Dados do relatório em JSON
│   └── assets/             # Recursos estáticos do relatório
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
- **Mochawesome** — gerador de relatórios HTML para Mocha
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
npm test
```

O comando executa os testes com o Mocha e gera automaticamente um relatório HTML na pasta `mochawesome-report/`.

### Visualizar o Relatório

Abra o arquivo `mochawesome-report/mochawesome.html` no navegador para visualizar o relatório detalhado com os resultados dos testes.
