FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g yarn

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "run", "start"]
