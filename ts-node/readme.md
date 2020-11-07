# build

    docker build -t hashito/ts-node .

# use

    docker run -it hashito/ts-node
    # main.ts changed
    docker run -v ./main.ts /app/src/main.ts -it hashito/ts-node
