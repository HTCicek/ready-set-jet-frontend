FROM node:13.2.0-alpine

RUN mkdir /ready-set-jet-web
WORKDIR /ready-set-jet-web

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent

COPY . ./

EXPOSE 3000

CMD ["yarn", "start", "-a", "localhost", "-p", "3000"]