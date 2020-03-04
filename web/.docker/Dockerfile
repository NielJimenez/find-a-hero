FROM node:12.13.1-slim

RUN apt-get update && apt-get upgrade -y

COPY . /app
WORKDIR /app

RUN npm install -g cross-env rimraf
RUN npm install
ENTRYPOINT [ "npm", "run", "deploy" ]

