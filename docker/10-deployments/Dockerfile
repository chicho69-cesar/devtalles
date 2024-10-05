# Etapa para desarrollo
FROM node:20.11.0-alpine3.19 as dev
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile
CMD ["yarn", "start:dev"]


# Etapa para construir la app en development
FROM node:20.11.0-alpine3.19 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


# Etapa para hacer build de la app
FROM node:20.11.0-alpine3.19 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build


# Etapa para construir la app en production
FROM node:20.11.0-alpine3.19 as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile


# Etapa final para ejecutar la app
FROM node:20.11.0-alpine3.19 as prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]
