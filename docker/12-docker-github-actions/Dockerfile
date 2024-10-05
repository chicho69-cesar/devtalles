FROM node:19-alpine3.15 as installer
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile


FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=installer /app/node_modules ./node_modules
COPY . .
RUN yarn build


FROM node:19-alpine3.15 as runner
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=installer /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]
