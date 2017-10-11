FROM node:8.6.0
MAINTAINER Bernhard Prott

ADD ./build.sh ./build.sh
RUN chmod 777 ./build.sh
ADD ./package.json ./package.json
ADD ./public_html ./public_html
ADD ./server.js ./server.js
RUN npm install
RUN npm install -g babel-cli browserify
CMD ./build.sh
EXPOSE 3000
CMD ["node", "server.js"]
