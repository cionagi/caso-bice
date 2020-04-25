FROM node:12-alpine
WORKDIR /backend
COPY package.json /backend/package.json
RUN npm install
COPY . /backend
EXPOSE 8080
CMD ["npm", "run","start"]
