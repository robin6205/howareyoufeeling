FROM node:12.18.1

WORKDIR /app

ENV PATH /app/node_moodules/.bin:$PATH

COPY . ./
RUN yarn install
RUN yarn build

CMD ["node", "server.js"]