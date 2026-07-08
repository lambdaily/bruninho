# Hoppscotch self-hosted en Railway

Este repo despliega la imagen oficial All-In-One de Hoppscotch Community Edition.

## Servicios necesarios en Railway

1. Este servicio Docker desde este repo.
2. Un servicio **PostgreSQL** en Railway.

## Variables requeridas

En el servicio de Hoppscotch configura:

```env
DATABASE_URL=${{Postgres.DATABASE_URL}}
DATA_ENCRYPTION_KEY=12345678901234567890123456789012
JWT_SECRET=cambia-este-secreto-largo
SESSION_SECRET=cambia-este-secreto-largo-tambien
TOKEN_SALT_COMPLEXITY=10
ENABLE_SUBPATH_BASED_ACCESS=true
HOPP_AIO_ALTERNATE_PORT=80
```

Cuando Railway te genere el dominio público, agrega también estas variables reemplazando `https://TU-DOMINIO.railway.app`:

```env
VITE_BASE_URL=https://TU-DOMINIO.railway.app
VITE_SHORTCODE_BASE_URL=https://TU-DOMINIO.railway.app
VITE_BACKEND_API_URL=https://TU-DOMINIO.railway.app/api/v1
VITE_BACKEND_GQL_URL=https://TU-DOMINIO.railway.app/api/graphql
VITE_BACKEND_WS_URL=wss://TU-DOMINIO.railway.app/api/graphql
VITE_ADMIN_URL=https://TU-DOMINIO.railway.app/admin
WHITELISTED_ORIGINS=https://TU-DOMINIO.railway.app
REDIRECT_URL=https://TU-DOMINIO.railway.app
```

## Puerto en Railway

Para **Generate Service Domain**, usa el puerto:

```txt
80
```

## Migraciones de base de datos

Hoppscotch necesita correr migraciones Prisma antes de funcionar completamente.

En Railway puedes abrir una shell del servicio y ejecutar:

```bash
pnpm exec prisma migrate deploy
```

Si Railway no te deja abrir shell fácilmente, crea temporalmente un deploy command/custom start command para correr esa migración una vez, y luego vuelve al start normal de la imagen.

## URLs

- App: `https://TU-DOMINIO.railway.app`
- Admin: `https://TU-DOMINIO.railway.app/admin`
