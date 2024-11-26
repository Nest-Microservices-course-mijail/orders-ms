# Orders Microservice

```
docker compose up -d
```

## Dev

1. Clonar el repositorio
2. Instalar las dependencias
3. Crear un archivo `.env` basado en el `env.template`
4. Levantar la base de datos `docker compose up -d`
5. Levantar el servidor de NATS

```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```

6. Ejecutar `npm run start:dev`
