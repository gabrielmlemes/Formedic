# ForMedic 🩺

O ForMedic é uma plataforma SaaS moderna para gestão médica, desenvolvida como parte de um **desafio técnico para Desenvolvedor Front-End (Pleno/Sênior)**. O projeto foca em organização de componentes, simplicidade e clareza de código.

## 🎯 Objetivo do Projeto

Implementar uma interface de **agenda diária** funcional que permita a visualização e criação de agendamentos médicos, atendendo aos requisitos de sistemas administrativos modernos.

## ✅ Requisitos Implementados

### Obrigatórios (Concluídos)
- [x] **Lista de horários:** Visualização clara da jornada diária.
- [x] **Exibição de agendamentos:** Listagem dinâmica dos compromissos existentes.
- [x] **Criação de agendamentos:** Botão e fluxo dedicado para novos registros.

### ⭐ Diferenciais e Extras
- [x] **Modal para criação:** Interface amigável e não intrusiva.
- [x] **Validações de Formulário:** Uso de Zod e React Hook Form para garantir integridade dos dados.
- [x] **Arquitetura Escalável:** Organização clara de pastas seguindo padrões modernos do Next.js.
- [x] **Landing Page:** Página inicial polida com estética SaaS.
- [x] **Persistência Real:** Integração com Banco de Dados (PostgreSQL + Drizzle ORM) em vez de apenas dados mockados.

## 🛠️ Stack Tecnológica

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes UI:** [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Banco de Dados:** PostgreSQL (via `postgres` adapter)
- **Formulários:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## ⚙️ Configuração do Projeto

### Pré-requisitos
- Node.js 20+
- Instância do PostgreSQL

### Instalação e Execução

1. Instale as dependências:
```bash
npm install
```

2. Configure o banco de dados no `.env`:
```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/formedic
```

3. Sincronize o banco:
```bash
npm run db:push
```

4. Rode o projeto:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## 📂 Estrutura de Pastas

O projeto utiliza uma estrutura modular dentro de `src/app`:
- `(public)`: Landing Page.
- `(private)`: Área administrativa protegida (Dashboard e Agendamentos).
- `_components`, `_actions`, `_schemas`: Localização de recursos próximos ao seu contexto de uso (co-location).
