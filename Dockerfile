FROM hoppscotch/hoppscotch:latest

CMD ["sh", "-lc", "pnpm dlx prisma migrate deploy && exec node /usr/src/app/aio_run.mjs"]
