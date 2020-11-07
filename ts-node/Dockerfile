FROM node:15.1.0

RUN mkdir app && \
    cd app && npm init -y && \
    npm install --save typescript ts-node && \
    ./node_modules/.bin/tsc --init && \
    mkdir src
ADD ./main.ts /app/src/

CMD [ "/app/node_modules/.bin/ts-node","/app/src/main.ts" ]