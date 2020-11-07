FROM node:15.1.0
COPY ./app /app/
RUN npm install -g @angular/cli && \
    cd app && npm install 
EXPOSE 80
WORKDIR /app
CMD [ "ng","serve" ,"--port=80","--host=0.0.0.0"]