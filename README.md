# website

The ACM website

## Development

```bash
$ npm install
$ make dev
```

Access the server on port `7600`.

## Production

Production requires docker.

```bash
$ make build # build the image
$ make run   # run the container
```

To publish to Heroku:

```bash
$ make deploy
```

Access the server on ports `443` and `80`.
