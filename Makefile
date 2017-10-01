PORT=9000

build:
	sudo docker build . -t uclaacm/website

run:
	sudo docker run -e PORT=$PORT -d uclaacm/website

deploy:
	heroku container:push web -a ucla-acm

build-static:
	NODE_ENV=production npm run build

dev:
	WEBPACK=true npm run build-dev
