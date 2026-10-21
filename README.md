# ✂️ HairDay

Aplicação web para **agendamento de cortes de cabelo**. Com ela, você escolhe uma data, vê os horários livres do dia e marca um atendimento informando o nome do cliente. Também é possível ver os agendamentos do dia, separados por período, e cancelar algum deles.

Projeto desenvolvido durante a formação **Full Stack da Rocketseat**, no módulo de JavaScript.
![preview](/src/assets/preview.png)
---

## 📋 Funcionalidades

- 📅 **Seleção de data**: a agenda e os horários são atualizados sempre que a data muda.
- 🕘 **Horários disponíveis**: de 09:00 às 21:00. Horários já ocupados ou que já passaram ficam bloqueados.
- ➕ **Novo agendamento**: escolha o horário, informe o nome do cliente e confirme.
- 🌅 **Agenda por período**: os agendamentos do dia aparecem separados em **Manhã**, **Tarde** e **Noite**.
- ❌ **Cancelamento**: remova um agendamento clicando no ícone de cancelar.
- 💾 **Persistência**: os dados ficam salvos em uma API fake criada com o `json-server`.

---

## 🧠 O que aprendi

- **Organização em módulos (ES Modules)**: o código está dividido por responsabilidade:
  - `modules/`: interação com a tela (formulário, horários, lista de agendamentos)
  - `services/`: comunicação com a API
  - `utils/` e `libs/`: dados fixos e configuração de bibliotecas
- **Consumo de API com `fetch`** usando `async/await` e os métodos `GET`, `POST` e `DELETE`, além de tratamento de erros com `try/catch`.
- **Uma API fake com `json-server`**, para simular um back-end sem precisar de um servidor de verdade.
- **Manipulação do DOM**: criação dinâmica de elementos, uso de `dataset` / `data-*` para guardar o `id` do agendamento e eventos como `onchange`, `onsubmit` e `click`.
- **Datas e horários com Day.js**: formatação, comparação entre datas (`isSame`, `isBefore`) e uso da localização `pt-br`.
- **Configuração do Webpack**: ponto de entrada e saída, `webpack-dev-server`, loaders de CSS e Babel, e os plugins `HtmlWebpackPlugin` e `CopyWebpackPlugin`.
- **Babel**, para transpilar o JavaScript moderno e manter a compatibilidade com mais navegadores.
- **Depuração com DevTools**: análise das requisições na aba *Network* (payload e status) e cuidado com os **tipos de dados**. Por exemplo, um `id` salvo como `number` em vez de `string` impede a exclusão no `json-server`.

---

## 🚀 Tecnologias

| Tecnologia | Uso |
| --- | --- |
| **HTML5** e **CSS3** | Estrutura e estilização da interface |
| **JavaScript (ES6+)** | Lógica da aplicação |
| **[Day.js](https://day.js.org/)** | Manipulação e formatação de datas |
| **[json-server](https://github.com/typicode/json-server)** | API REST fake para guardar os agendamentos |
| **[Webpack](https://webpack.js.org/)** | Empacotamento e servidor de desenvolvimento |
| **[Babel](https://babeljs.io/)** | Transpilação do JavaScript |

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado: versão 18 ou superior)
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/RafaelJuniorM/hairDay.git

# 2. Entre na pasta do projeto
cd hairDay

# 3. Instale as dependências
npm install
```

Você vai precisar de **dois terminais** abertos ao mesmo tempo:

```bash
# Terminal 1: inicia a API fake (http://localhost:3333)
npm run server
```

```bash
# Terminal 2: inicia a aplicação (http://localhost:3000)
npm run dev
```

O navegador abre sozinho em `http://localhost:3000`.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run server` | Sobe o `json-server` na porta **3333**, observando o arquivo `server.json` |
| `npm run dev` | Inicia o servidor de desenvolvimento do Webpack na porta **3000** |
| `npm run build` | Gera a versão final do projeto na pasta `dist/` |

---

## 📁 Estrutura do projeto

```
hairDay/
├── index.html              # Template HTML
├── server.json             # "Banco de dados" do json-server
├── webpack.config.js       # Configuração do Webpack
└── src/
    ├── main.js             # Ponto de entrada da aplicação
    ├── assets/             # Ícones e imagens (SVG)
    ├── libs/
    │   └── dayjs.js        # Configuração do Day.js (pt-br)
    ├── modules/
    │   ├── page-load.js    # Carregamento inicial
    │   ├── form/           # Data, horários e envio do formulário
    │   └── schedules/      # Carregar, exibir e cancelar agendamentos
    ├── services/           # Requisições à API (GET, POST, DELETE)
    ├── styles/             # Arquivos CSS
    └── utils/
        └── opening-hours.js # Horários de funcionamento
```

---

## 👨‍💻 Autor

Feito por **Rafael Junior Martins** durante a formação Full Stack da [Rocketseat](https://www.rocketseat.com.br/).

[![GitHub](https://img.shields.io/badge/GitHub-RafaelJuniorM-181717?style=flat&logo=github)](https://github.com/RafaelJuniorM)
