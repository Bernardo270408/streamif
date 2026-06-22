# StreamIF

## Integrantes

* **Beatriz Cristina Costa** (AQ3022153)
* **Bernardo Duarte Marcelino** (AQ3020941)

---

## Descrição do Aplicativo

O **StreamIF** é um aplicativo mobile desenvolvido em **React Native** para o gerenciamento personalizado de filmes e séries. A plataforma permite ao usuário catalogar suas mídias favoritas, acompanhar o status de visualização, fazer anotações pessoais e organizar sua lista de forma prática.

---

## Funcionalidades Implementadas

* **Cadastro Dinâmico:** Inclusão de novas séries e filmes através de um formulário em *Modal* com validação de campos e mensagens de erro.
* **Exibição Otimizada:** Listagem de mídias utilizando `FlatList` para maior performance e tela de detalhes detalhada com `ScrollView`.
* **Gerenciamento de Status:** Opção para marcar conteúdos como assistidos e remoção de mídias utilizando o método `Array.filter()`.
* **Filtros e Ordenação:** Organização dos títulos por ordem alfabética (A-Z) ou por nota de avaliação.
* **Controle e Estatísticas:** Contador dinâmico de títulos totais e conteúdos assistidos, além de um campo para anotações pessoais em cada mídia.

---

## Justificativa Arquitetural

A aplicação utiliza uma **arquitetura centralizada no estado global** (`App.js`), que atua como o orquestrador principal do sistema (controlando a lista de mídias, visibilidade de modais e navegação).

A comunicação entre os componentes segue o padrão do React:

* **Fluxo Top-Down (Props):** O componente pai envia os dados para os filhos (ex: `CatalogScreen` recebe a lista de mídias; `DetailScreen` recebe o item selecionado).
* **Fluxo Bottom-Up (Callbacks):** Os componentes filhos disparam eventos de volta para o pai (ex: `AddMediaForm` envia uma nova mídia via função `aoSalvar`; `MediaCard` dispara ações de remoção ou mudança de status).

Essa abordagem garante separação de responsabilidades, código limpo e facilidade de manutenção.

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo no terminal para rodar a aplicação localmente:

1. **Instalar as dependências:**
```bash
npm install
```

2. **Iniciar o servidor do Expo/React Native:**
```bash
npm start
```

3. **Executar no emulador ou dispositivo Android:**
```bash
npm run android
```

---

## Diário de Depuração (Bug Log)

### Bug 1: Incompatibilidade de Versões no Ambiente Local
*   **Problema:** O aluno Bernardo enfrentou um erro de *redbox* ao tentar rodar a aplicação no dispositivo físico. O sistema operacional utilizado (Arch Linux) utiliza o modelo *Bleeding Edge* (pacotes na última versão), gerando incompatibilidade com o app do Expo da Play Store.
*   **Solução:** Foi necessário isolar e configurar um ambiente de desenvolvimento estritamente local para a execução do projeto.

### Bug 2: Estilização Dinâmica (Troca de Tema)
*   **Problema:** Os *Stylesheets* do React Native são estáticos e renderizados apenas uma vez na inicialização, impossibilitando a troca de tema (claro/escuro) em tempo real.
*   **Solução:** Foi implementada uma estrutura com um wrapper `ThemeProvider` e o hook customizado `useStyles`, adaptando os componentes para receberem as cores dinamicamente baseadas no estado do tema ativo.
