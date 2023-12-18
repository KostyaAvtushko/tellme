FROM node:20

WORKDIR /client

COPY package.json ./

RUN npm i

COPY . .

RUN npx next build


EXPOSE 3030

CMD ["npm", "start"]