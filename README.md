# gestor-financeiro

O Gestor Financeiro é uma aplicação para gerenciar suas contas. Com ele, você pode cadastrar informações como o nome da conta, valor total, quantidade de parcelas e a data de vencimento da primeira parcela. O sistema armazena todas as contas registradas e exibe detalhes importantes, como o valor de cada parcela e o vencimento das parcelas subsequentes.

## Processo de Desenvolvimento

No Gestor Financeiro, utilizei diversos recursos do Vue.js para garantir uma aplicação funcional e bem estruturada. No cadastro das contas, implementei a validação dos formulários, desabilitando o botão de cadastro enquanto os inputs não estavam corretos. A manipulação e o armazenamento das contas foram feitos utilizando o localStorage, com um service dedicado a essa função para separar responsabilidades na aplicação. Além disso, criei um service específico para lidar com a criação e manipulação das contas, facilitando a manutenção do código e a reutilização de lógicas.

Para o tratamento dos dados, desenvolvi um service responsável pela formatação e conversão de valores, garantindo flexibilidade para futuras alterações no formato dos dados. Na lista de contas, apliquei conceitos como v-if para exibir a mensagem de "sem contas" quando necessário e v-for para realizar a renderização dinâmica das contas cadastradas.

Quando um usuário deseja visualizar os detalhes de uma conta, utilizamos o Vue Router para navegar para uma nova página, passando o id da conta como parâmetro, o que permite recuperar as informações específicas daquela conta. Como a aplicação é uma SPA (Single Page Application), as rotas são usadas para gerenciar a navegação entre as diferentes páginas sem recarregar a página inteira.

Além disso, dividi algumas partes da interface em componentes Vue para melhorar a organização e reutilização do código. No aspecto visual, utilizei as tags e estilos do Vuetify para garantir uma interface responsiva.

## Frameworks Usados

- **Vue.js**: Framework JavaScript progressivo para a construção de interfaces de usuário e SPAs.

  <img src="https://vuejs.org/images/logo.png" width="100" height="100" />

- **Vuetify**: Framework de componentes baseado no Material Design que facilita a criação de interfaces modernas e responsivas.

  <img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg" width="100" height="100" />

## Como usar

### Clone o repositório em seu computador

```sh
git clone https://github.com/PHChemin/gestor-financeiro.git
```

### Instale as dependências

```sh
npm install
```

### Faça a build do projeto

```sh
npm run build
```

### Hospede a aplicação localmente

```sh
npm run serve
```

### Acesse a aplicação

Abra o navegador e entre no endereço de hospedagem

```sh
http://<seu-ip>:3000
```
