FROM node:alpine

WORKDIR /home/node/app

COPY . ./

RUN npm ci

CMD [ "node", "." ]