FROM node:current-alpine

RUN apk update; \
  apk add build-base autoconf automake libtool pkgconfig nasm git; \
  mkdir -p /app; \ 
  chown node:node /app; \
  id;
USER node
WORKDIR /app
