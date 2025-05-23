# 📝 Todo App

Um aplicativo de tarefas simples e moderno, feito com **React** + **Vite**. Organize suas tarefas, marque como concluídas e mantenha o foco no que importa!

![Todo App Screenshot](public/vite.svg)

## 🚀 Funcionalidades

- **Adicionar tarefas**: Crie novas tarefas rapidamente.
- **Filtrar tarefas**: Visualize todas, abertas ou concluídas.
- **Marcar como concluída**: Finalize tarefas com um clique.
- **Excluir tarefas**: Remova tarefas que não são mais necessárias.
- **Persistência local**: Suas tarefas ficam salvas no navegador (localStorage).
- **Contador dinâmico**: Veja quantas tarefas ainda faltam.

## 🖥️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS Customizado](src/fanta.css) + [Font Awesome](https://fontawesome.com/)

## 📂 Estrutura de Pastas

```
src/
  components/    # Componentes React reutilizáveis
  assets/        # Imagens e ícones
  fanta.css      # Estilo customizado
  index.css      # Estilo base
  App.jsx        # Componente principal
  main.jsx       # Ponto de entrada
```

## ⚡ Como rodar o projeto

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/todo-app.git
   cd todo-app
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```sh
   npm run dev
   ```

4. Acesse em [http://localhost:5173](http://localhost:5173)

## 🛠️ Scripts disponíveis

- `npm run dev` — inicia o app em modo desenvolvimento
- `npm run build` — gera a versão de produção
- `npm run preview` — pré-visualiza a build de produção
- `npm run lint` — executa o ESLint

## 📋 Organização dos Componentes

- [`Header`](src/components/Header.jsx): Mostra o número de tarefas abertas.
- [`Tabs`](src/components/Tabs.jsx): Filtros de visualização (Todas, Abertas, Concluídas).
- [`TodoInput`](src/components/TodoInput.jsx): Campo para adicionar novas tarefas.
- [`TodoList`](src/components/TodoList.jsx): Lista de tarefas filtradas.
- [`TodoCard`](src/components/TodoCard.jsx): Card individual de cada tarefa.

## 💾 Como funciona a persistência?

As tarefas são salvas no `localStorage` do navegador. Assim, mesmo ao fechar a página, suas tarefas permanecem salvas.

## ✨ Personalização

- Edite o arquivo [`src/fanta.css`](src/fanta.css) para alterar o visual do app.
- Ícones são fornecidos pelo [Font Awesome](https://fontawesome.com/).
