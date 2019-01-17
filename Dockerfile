FROM node:9.3.0
LABEL maintaner="alvian524@gmail.com"

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy package json to new directory
COPY "package.json" /usr/src/app
RUN npm install

# bundle app source
COPY . /usr/src/app
RUN npm run prod:build

# Set the command to start the node server.
CMD npm run serve

# exposing port
EXPOSE 3000
