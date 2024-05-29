# Utilizar una imagen base que contenga un servidor web
FROM node:alpine

WORKDIR /app

# Copiar los archivos generados de la aplicación Angular.js al directorio del servidor web en la imagen
COPY . /app

# Copiar el archivo package.json
COPY package.json /app

RUN npm install -g @angular/cli

RUN npm install

# Comando para iniciar el servidor web cuando el contenedor se ejecute
CMD ["ng", "serve", "--host", "0.0.0.0"]