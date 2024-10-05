FROM node:20.11.0-alpine3.19 as deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile


FROM node:20.11.0-alpine3.19 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build


FROM nginx:1.25.4-alpine3.18 as prod
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
COPY assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
