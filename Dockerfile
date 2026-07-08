FROM node:22-alpine

WORKDIR /app

RUN npm install -g @usebruno/cli@latest

ENV PORT=3000 \
    COLLECTION_PATH=/collections \
    BRUNO_ENV=

RUN cat > package.json <<'JSON'
{"type":"module","scripts":{"start":"node server.js"},"dependencies":{"express":"^4.19.2"}}
JSON
RUN npm install --omit=dev

COPY server.js ./server.js

RUN mkdir -p /collections

EXPOSE 3000
CMD ["npm", "start"]
