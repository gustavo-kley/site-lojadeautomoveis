# Lorenzo Automóveis — Site profissional

Site demonstrativo da Lorenzo Automóveis, loja de veículos multimarcas em Lages/SC.
Desenvolvido em React + Vite + TypeScript com Tailwind CSS.

> Os veículos apresentados são fictícios, de demonstração, e não representam o
> estoque real da loja.

---

## Como rodar o projeto localmente

Pré-requisito: ter o [Node.js](https://nodejs.org) instalado (versão 18 ou superior).

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar o ambiente de desenvolvimento
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

Para gerar a versão final (pasta `dist/`):

```bash
npm run build
```

---

## Como alterar os dados dos veículos

Abra o arquivo **`src/data/vehicles.ts`**.

Cada veículo é um registro com os seguintes campos editáveis:

| Campo            | Descrição                                              |
|------------------|-------------------------------------------------------|
| `id`             | Identificador único (ex.: `LA-001`)                   |
| `brand`          | Marca                                                 |
| `model`          | Modelo                                                |
| `version`        | Versão                                                |
| `yearFabrication`| Ano de fabricação                                     |
| `yearModel`      | Ano do modelo                                         |
| `mileage`        | Quilometragem                                         |
| `transmission`   | Câmbio (Automático, Manual, CVT)                      |
| `fuel`           | Combustível (Flex, Gasolina, Diesel)                  |
| `category`       | Categoria (SUV, Sedan, Hatch, Picape)                 |
| `price`          | Preço em reais (número)                               |
| `color`          | Cor                                                   |
| `description`    | Descrição do veículo                                  |
| `features`       | Lista de equipamentos                                 |
| `images`         | Lista de URLs de fotos                                |
| `status`         | `Disponível`, `Reservado` ou `Vendido`                |
| `featured`       | `true` para destacar na seção de oportunidades        |
| `demo`           | `true` enquanto for demonstração, `false` para real   |

Para substituir por um veículo real, copie um dos registros, troque os dados e
defina `demo: false`.

---

## Como configurar o WhatsApp

Abra o arquivo **`src/config/business.ts`** e edite o campo `whatsappNumber`.

O número deve estar no formato internacional, **somente dígitos**:

```ts
whatsappNumber: '5549991234567', // 55 = Brasil, 49 = DDD, seguido do número
```

Enquanto o número estiver vazio (`''`), os botões de contato exibem um aviso em
vez de gerar links inválidos.

Neste mesmo arquivo você também ajusta:

- `name` — nome da loja
- `city` e `state` — localização
- `instagramUrl` — link do Instagram oficial
- `websiteDomain` — domínio futuro do site
- `heroImage` e `aboutImage` — imagens principais

---

## Como substituir as fotos

As fotos de demonstração usam imagens licenciadas do Pexels (URLs externas).

Para usar fotos reais:

1. Coloque os arquivos de imagem na pasta `public/images/`.
2. No arquivo `src/data/vehicles.ts`, troque a URL pelo caminho local:

```ts
images: ['/images/corolla-1.jpg', '/images/corolla-2.jpg'],
```

3. Para as imagens do hero e da seção sobre, edite `heroImage` e `aboutImage`
   em `src/config/business.ts`.

---

## Como publicar no Cloudflare Pages (conectado ao GitHub)

O Cloudflare Pages aceita projetos em React + TypeScript automaticamente. No
momento da publicação, ele roda o comando `npm run build`, que transforma o
código em HTML, CSS e JavaScript puro dentro da pasta `dist/`.

### Passo 1 — Enviar o projeto para o GitHub

1. Crie uma conta no [GitHub](https://github.com) caso não tenha.
2. Crie um novo repositório (ex.: `lorenzo-automoveis`).
3. Faça upload de todos os arquivos do projeto para o repositório.

### Passo 2 — Conectar ao Cloudflare Pages

1. Acesse [Cloudflare Pages](https://pages.cloudflare.com) e entre com sua conta.
2. Clique em **Create a project** → **Connect to Git**.
3. Autorize o Cloudflare a acessar seu GitHub e selecione o repositório do projeto.

### Passo 3 — Configurar o build

O Cloudflare pode detectar as configurações automaticamente, mas confirme:

| Configuração       | Valor                |
|--------------------|----------------------|
| Framework preset   | Vite                 |
| Build command      | `npm run build`      |
| Build output directory | `dist`           |
| Node version       | 18 ou superior       |

4. Clique em **Save and Deploy**.

### Passo 4 — Acompanhar a publicação

O Cloudflare vai rodar o build e publicar o site. Em poucos minutos você
receberá um link temporário (ex.: `lorenzo-automoveis.pages.dev`).

A cada novo push no GitHub, o Cloudflare publica automaticamente uma nova versão.

### Passo 5 — Configurar domínio próprio (opcional)

1. No painel do Cloudflare Pages, vá em **Custom domains**.
2. Adicione seu domínio (ex.: `lorenzoautomoveis.com.br`).
3. Siga as instruções para apontar o DNS.
4. Atualize o campo `websiteDomain` em `src/config/business.ts` com o domínio final.

---

## Estrutura do projeto

```
src/
├── components/        # Componentes da interface
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── FeaturedSection.tsx
│   ├── VehicleCatalog.tsx
│   ├── VehicleCard.tsx
│   ├── VehicleModal.tsx
│   ├── SearchBar.tsx
│   ├── AboutSection.tsx
│   ├── TrustSection.tsx
│   ├── FinanceSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── StatusBadge.tsx
│   └── WhatsAppButton.tsx
├── config/
│   └── business.ts    # Dados editáveis da empresa
├── data/
│   └── vehicles.ts    # Estoque de veículos
├── lib/
│   └── utils.ts       # Formatação BR + gerador de links do WhatsApp
├── App.tsx            # Montagem da página
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

---

## Notas

- O site não usa banco de dados nem backend. Todos os dados ficam nos arquivos
  `src/config/business.ts` e `src/data/vehicles.ts`.
- O WhatsApp só gera links quando o número está configurado.
- Os veículos de demonstração são identificados com um selo visível nos cards e
  no modal de detalhes.
- O ano no rodapé é atualizado automaticamente.
