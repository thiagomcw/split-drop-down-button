FROM node:16-alpine

RUN apk --no-cache add bash

RUN npm install -g @vue/cli@latest @vue/cli-service@latest

#USER root

#RUN addgroup -S dev &&\
#    adduser -u 1000 -G dev -S dev

#USER dev

RUN mkdir -p /var/www/html/split-drop-down

WORKDIR /var/www/html/split-drop-down
