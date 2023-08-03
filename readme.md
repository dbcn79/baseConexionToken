# Acerca de la Conexión

Proyecto base de conexión de base de datos. Se puede conectar tanto a MySql como a SQL Server, sólo falta configurar correctamente las variables que se encuentran en el fichero .env
Además devuelve un token mediante el endpoint /auth/login. 
 - clientId y un clientSecret (se tiene que rellenar)
 - Comprueba si estos dos valores existen en una tabla de clientes
 - Si existe devuelve un token