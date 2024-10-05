# Descargar Imagenes
docker pull dpage/pgadmin4:8.2
docker pull postgres:15.3

# Paso 1
docker volume create postgres-db

# Paso 2
docker container run `
-d `
--name postgres-db `
-e POSTGRES_PASSWORD=123456 `
-v postgres-db:/var/lib/postgresql/data `
postgres:15.3

# Paso 3
docker container run `
--name pgAdmin `
-e PGADMIN_DEFAULT_PASSWORD=123456 `
-e PGADMIN_DEFAULT_EMAIL=superman@google.com `
-dp 8080:80 `
dpage/pgadmin4:8.2

# Paso 4
# http://localhost:8080/

# Paso 5
# Click en Servers
# Click en Register > Server
# Colocar el nombre de: "SuperHeroesDB" (el nombre no importa)
# Ir a la pestaña de connection
# Colocar el hostname "postgres-db" (el mismo nombre que le dimos al contenedor)
# Username es "postgres" y el password: 123456
# Probar la conexión

# Paso 6
docker network create postgres-net 

# Paso 7
docker network connect postgres-net 7ba
docker network connect postgres-net b03

# Paso 8
docker network inspect postgres-net

# Paso 9
# Reintentar hacer el paso 5
