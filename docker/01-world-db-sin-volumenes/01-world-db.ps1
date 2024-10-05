docker container run `
--name world-db `
--env MARIADB_USER=cesar `
--env MARIADB_PASSWORD=cesarpassword `
--env MARIADB_ROOT_PASSWORD=rootpassword `
--env MARIADB_DATABASE=world-db `
-dp 33066:3306 `
--volume world-db:/var/lib/mysql `
--network world-db `
mariadb:10.6.16


docker container run `
--name phpmyadmin `
-d `
-e PMA_ARBITRARY=1 `
-p 8080:80 `
--network world-db `
phpmyadmin:5.2.1-apache
