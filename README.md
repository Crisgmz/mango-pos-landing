# Mango POS Landing

Landing comercial de Mango POS.

## Stack
- Vite
- React
- TypeScript
- Tailwind CSS

## Desarrollo local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

El output de producción queda en:
```bash
dist/
```

## Deploy
Pensado para desplegarse como sitio estático en Coolify usando el repositorio Git.

### Configuración sugerida en Coolify
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Dominio: `mangopos.do`
