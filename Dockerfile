FROM node:16.13.1-alpine as build

WORKDIR /usr/app

COPY package.json .

RUN yarn
RUN yarn cache clean

COPY . .

RUN yarn build

FROM node:16.13.1-alpine as run

WORKDIR /usr/app

COPY package.json .
COPY .stage.prod.env ./
COPY --from=build /usr/app/dist ./

RUN yarn install --production

ENTRYPOINT ["yarn", "start:prod"]