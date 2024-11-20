# NESTJS v10 & TYPEORM

## Uso y migraciones.

### Descripción

Configuración de TYPEORM y su cliente para control de versiones de la base de datos con migraciones.

### Configuración para usar migraciones

1. Instalar dependecias de typeORM Y drive de la base datos a usar.

```bash

$ npm install --save typeorm @nestjs/typeorm
$ npm install pg
$ npm install -D env-cmd

```

2. Crear una directorio llamado "database" en la raiz del archivo, en el directorio database creamos el archivo datasource.ts y un directorio llamado "migrations", el cual contendrá las migraciones que generaremos.

> [!IMPORTANT]
>
> mkdir es un comando de terminal usado para la creacion de carpeta.
>
> touch es un comando para crear archivos touch index.html

| Rutas            | Acción              |
| ---------------- | ------------------- |
| 'root'           | mkdir database      |
| 'root'/database/ | mkdir migrations    |
| 'root'/database/ | touch datasource.ts |

3. Agregar la siguiente configuracion a **_datasource.ts_**:

```typescript
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_PG_HOST,
  port: parseInt(process.env.DATABASE_PG_PORT, 5432),
  username: process.env.DATABASE_PG_USERNAME,
  password: process.env.DATABASE_PG_PASSWORD,
  database: process.env.DATABASE_PG_NAME,
  schema: process.env.DATABASE_PG_SCHEMA,
  logging: 'all',
  entities: ['./src/**/*.entity.ts'],
  migrations: ['./database/migrations/*-migration.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      `Error during Data Source initialization`,
      JSON.stringify(err),
    );
  })
  .finally(() => {
    console.log('finished');
  });
```

4. Ahora en el archivo **_ package.json _** en la sección **_ scripts _**, agregaremos los comandos para ejecutar el cliente de typeorm.

| Comando                    | Acción                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| typeorm:create-migration   | <small>env-cmd typeorm-ts-node-commonjs migration:create database/migrations/$npm_config_name-migration</small>                             |
| typeorm:generate-migration | <small>env-cmd typeorm-ts-node-commonjs -d database/datasource.ts migration:generate database/migrations/$npm_config_name-migration</small> |
| typeorm:run-migrations     | <small>env-cmd typeorm-ts-node-commonjs -d database/datasource.ts migration:run</small>                                                     |
| typeorm:revert             | <small>env-cmd typeorm-ts-node-commonjs -d database/datasource.ts migration:revert</small>                                                  |

### Configuración para usar migraciones

1. Crear un carpeta typeorm dentro _src_
2. Seguir la configuracion de recomendada de nestjs [RECETA SQL (TypeORM)](https://docs.nestjs.com/recipes/sql-typeorm)
