FROM hoppscotch/hoppscotch:latest

CMD ["sh", "-lc", "pnpm dlx prisma migrate deploy"]

