FROM node:16

WORKDIR C:\Users\samad\Downloads\CloudNative_737\prac5
COPY package*.json ./

RUN npm install

COPY server.js .

EXPOSE 8080
CMD [ "node", "server.js"]
