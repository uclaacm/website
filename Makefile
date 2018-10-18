PORT=9000

build:
	docker build . -t uclaacm/website

run:
	docker run -e PORT=$PORT -d uclaacm/website

deploy:
	# Install the heroku CLI and log in with ucla-acm credentials
	# Run heroku container:login -a ucla-acm (equivalent to the ecr-login)
	heroku container:push web -a ucla-acm
	heroku container:release web -a ucla-acm

build-static:
	NODE_ENV=production npm run build

dev:
	WEBPACK=true npm run build-dev
