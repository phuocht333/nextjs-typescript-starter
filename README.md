## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- ⚡️ Less — Using less css
- ⚡️ Antd — Using antd library
- ⚡️ Tailwind CSS — CSS toolkit, bundle classes
- ⚡️ Zustand — Manage React states

### Development

To start the project locally, run:

```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 12.22.0

### Directory Structure
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.<br>
- [`components`](./src/components/) — Development React components.<br>
- [`config`](./src/config/) — Global config.<br>
- [`service`](./src/service/) — Global service, e.g. APIs request, React/Redux states,...<br>
- [`utils`](./src/utils/) — Global utilities, e.g. common functions.<br>
- [`styles`](./src/styles/[page-name]/*) — Global & pages styles. Note: import all less files of pages to variables.less<br>
- Each component will have it own local config, service & utils

### Scripts

- `npm run dev` — Starts the application in development mode at `http://localhost:3000`.
- `npm run build` — Creates an optimized production build of your application.
- `npm run export` — Creates static application from production build.
- `npm start` — Starts the application in production mode.
- `npm run type-check` — Validate code using TypeScript compiler.
- `npm run lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the `src` directory.
- `npm run commit` — Run commitizen. Alternative to `git commit`.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```

## License

MIT license
