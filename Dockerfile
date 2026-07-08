FROM hoppscotch/hoppscotch:latest

# Run Prisma migrations and then start the Hoppscotch server
CMD ["sh", "-c", "pnpm dlx prisma migrate deploy && exec node /app/server.js"]

