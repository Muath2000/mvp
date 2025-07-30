FROM node:18

WORKDIR /app
COPY . .

RUN npm install -g ts-node typescript && npm install
EXPOSE 3000

CMD ["npm", "run", "start:backend"]
