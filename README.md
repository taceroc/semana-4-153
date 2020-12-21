# npm install para ambas carpetas

# backend_reto4: Hace referencia al backend  

# vuetify: Hace referencia al frontend de ese backend

Esta conectado a la base de datos mia (Tatiana), hay varios ususarios de prueba, 
los principales:

-email: tatiana@gmail.com \\
 contraseña: tatiana \\
 rol: Administrador \\
 Tiene acceso a todo lo de la pagina de autenticado

-email: tatianavendedor@gmail.com \\
 contraseña: tatiana \\
 rol: Vendedor \\
 No puede ver la tabla donde se listan los usuarios

-email: tatianavisitante@gmail.com \\
 contraseña: tatiana \\
 rol: Visitante \\
 No tiene acceso a /autenticado. Cuando se logue lo manda al inicio

La tabla de usuarios guarda toda la info de usuarios, sin importar el rol. Sin embargo
en la página solo se muestran los que tiene rol de Administrador, Vendedor o Almacenero

