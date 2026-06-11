# Aura Monorepo Starter

A premium React + TypeScript monorepo workspace containing a **Next.js** application, a **Vite + React** client application, and a shared local UI component library, built using native `npm workspaces`.

---

## 🏗️ Architecture

```
/
├── package.json               # Monorepo workspaces definition
├── tsconfig.json              # Shared base TypeScript configurations
├── apps/
│   ├── next-app/              # Next.js 15+ Engine (App Router, Port 3000)
│   └── vite-app/              # Vite + React Dashboard (Port 5173)
└── packages/
    └── ui/                    # Shared component package (@workspace/ui)
```

---

## ⚡ Quick Start

### 1. Install & Link Workspace Dependencies
Install and configure the local symlinks automatically across all apps from the root directory:
```bash
npm install
```

### 2. Run Development Servers Concurrently
Start both the Next.js app and Vite app simultaneously with hot module replacement (HMR) enabled:
```bash
npm run dev
```
- **Next.js App**: Running at [http://localhost:3000](http://localhost:3000)
- **Vite React App**: Running at [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Build Commands

Compile all packages for production deployment (caching, type checking, and bundling):
```bash
npm run build
```
Individual build commands:
- `@workspace/ui`: `npm run build -w @workspace/ui`
- `@workspace/next-app`: `npm run build -w @workspace/next-app`
- `@workspace/vite-app`: `npm run build -w @workspace/vite-app`

---

## 🎨 Shared UI Library (`packages/ui`)

The local component package name is **`@workspace/ui`**. You can import components directly into any app using:
```typescript
import { Button } from '@workspace/ui';
```
Styles are authored using **CSS Modules** (e.g., `Button.module.css`) to ensure modularity, style encapsulation, and complete design control without relying on third-party styling frameworks.
