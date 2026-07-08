# Bruno self-hosted runner for Railway

Este contenedor instala Bruno CLI y levanta una pequeña API HTTP para ejecutar una colección Bruno dentro de Railway.

## Deploy en Railway

1. Sube este repo a GitHub.
2. En Railway crea un servicio nuevo desde el repo.
3. Configura variables si las necesitas:
   - `COLLECTION_PATH`: ruta de la colección dentro del contenedor. Default: `/collections`.
   - `BRUNO_ENV`: nombre del environment de Bruno a usar.
   - `BRUNO_TIMEOUT_MS`: timeout de ejecución. Default: `120000`.
4. Monta/sube tu colección Bruno en `COLLECTION_PATH` o adapta el Dockerfile para copiarla en la imagen.

## Endpoints

- `GET /health`: healthcheck.
- `POST /run`: ejecuta `bru run $COLLECTION_PATH` y devuelve stdout/stderr.

## Si tu colección está en este repo

Copia tu carpeta de colección, por ejemplo `collections/mi-api`, y cambia el Dockerfile:

```dockerfile
COPY collections/mi-api /collections
```
