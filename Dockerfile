FROM public.ecr.aws/docker/library/node:current-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]