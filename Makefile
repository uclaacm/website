PORT=9000

build:
	docker build . -t uclaacm/website

run:
	docker run -e PORT=$PORT -d uclaacm/website

deploy:
	heroku container:push web -a ucla-acm
	heroku container:release web -a ucla-acm

build-static:
	NODE_ENV=production npm run build

dev:
	WEBPACK=true npm run build-dev
