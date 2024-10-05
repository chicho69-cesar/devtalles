# Creamos una etapa llamada dependencies
FROM node:20.11.0-alpine3.19 AS dependencies

WORKDIR /app
COPY package.json ./
RUN npm install


# Creamos una etapa llamada builder
FROM node:20.11.0-alpine3.19 AS builder

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run test
# RUN npm run build


# Creamos una etapa llamada prod-dependencies
FROM node:20.11.0-alpine3.19 AS prod-dependencies

WORKDIR /app
COPY package.json ./
RUN npm install --prod


# Creamos una etapa llamada runner
FROM node:20.11.0-alpine3.19 AS runner

WORKDIR /app
COPY --from=prod-dependencies /app/node_modules ./node_modules
COPY app.js ./
COPY tasks ./tasks


# Ejecutamos node app.js
CMD ["node", "app.js"]
