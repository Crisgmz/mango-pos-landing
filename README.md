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

## Deploy en Coolify
Este proyecto ya está listo para desplegarse en Coolify usando GitHub.

### Opción recomendada: Dockerfile
El repositorio incluye:
- `Dockerfile`
- `nginx.conf`

Coolify puede detectar el `Dockerfile` y construir/desplegar automáticamente la app.

**Qué hace el contenedor:**
- instala dependencias
- genera el build con `npm run build`
- sirve `dist/` con Nginx
- deja configurado fallback SPA para rutas de React

### Pasos en Coolify
1. Conecta el repositorio de GitHub.
2. Crea un nuevo recurso desde ese repo.
3. Deja que Coolify use el `Dockerfile` del proyecto.
4. Expón el puerto `80`.
5. Configura el dominio que vayas a usar.
6. Haz deploy.

### Opción alternativa: Static site
Si prefieres desplegarlo como sitio estático en vez de Docker:
- Build command: `npm install && npm run build`
- Publish directory: `dist`

## Notas
- No hace falta subir `dist/` al repositorio.
- `dist/` se genera durante el build.
- Si usas rutas internas en React, `nginx.conf` ya contempla fallback a `index.html`.
