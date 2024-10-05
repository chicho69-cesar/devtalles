# Siempre se comienza de una imagen, en este caso node alpine
# FROM node:20.11.0-alpine3.19

# Podemos especificar la plataforma a la que vamos a compilar
# FROM --platform=linux/amd64 node:20.11.0-alpine3.19

# Podemos especificar la plataforma a la que vamos a compilar usando buildx
FROM --platform=$BUILDPLATFORM node:20.11.0-alpine3.19

# Carpeta de trabajo
WORKDIR /app

# Copiamos el package.json a la carpeta actual ./
COPY package.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el archivo de app.js a la carpeta actual ./
# COPY app.js ./

# Copiamos todo el codigo al working directory
COPY . .

# Realizar testing
RUN npm run test

# Eliminar archivos y directorios innecesarios
RUN rm -rf tests && rm -rf node_modules

# Instalar dependencias de produccion
RUN npm install --prod

# Ejecutamos node app.js
CMD ["node", "app.js"]
