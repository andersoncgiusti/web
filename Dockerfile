# base image
FROM node:lts-slim
RUN apt-get update && apt-get upgrade -y
RUN apt-get install curl -y
ENV HOST=0.0.0.0 PORT=3000
EXPOSE ${PORT}
# criar diretorio
RUN mkdir -p /node/app
# definir diretorio de trabalho
WORKDIR /node/app
# install all dependencies
COPY package*.json ./
RUN npm install && npm audit fix
#copiar file para o diretorio
COPY server.js  ./
CMD [ "node", "." ]