docker container run `
--name nest-app `
-w /app `
--publish 80:3000 `
# --detach `
--volume ${pwd}:/app `
# --volume "$(pwd)":/app ` Para MAC o Linux
node:20.11.0-alpine3.19 `
sh -c "npm install && npm run start:dev"
