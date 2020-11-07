build and start.
# build

    docker build -t hashito/angular .

# use

    docker run -it -p 80:80 hashito/angular
    # project changed
    docker run -v ./app /app -it  -p 80:80 hashito/angular
