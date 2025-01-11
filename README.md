# expenses app

This app helps groups of people to manage shared expenses. <br/>
It's perfect for friends who living together or to share the expenses of a friend's party.

## apps and packages

- `backend`: a REST API with a database.
  - [Hono](https://hono.dev/)
  - [Zod](https://zod.dev/)
  - [Drizzle ORM](https://orm.drizzle.team)
  - [SQLite with Turso](https://turso.tech)
- `frontend`: a UI app
  - [Nextjs](https://nextjs.org/)
  - [Zod](https://zod.dev/)
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/). <br /> 
The mono repo is managed by Turborepo and pnpm.


### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting


### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm i
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
