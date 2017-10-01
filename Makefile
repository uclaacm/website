all: run

prod-build:
	sudo docker build . -t uclaacm/website

prod-run:
	sudo docker run -p "443:443" -p "80:80" -d uclaacm/website

run-dev:
	sudo docker build . -t uclaacm/website
	sudo docker run -p "443:443" -p "80:80" -it uclaacm/website

build:
	NODE_ENV=production npm run build

build-static: build
	rm -rf public
	mkdir public
	cp -rv static/* public/
	cp -rv lib/build public/

dev:
	WEBPACK=true npm run build-dev
