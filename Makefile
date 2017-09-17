all: build

build:
	NODE_ENV=production npm run build

dev:
	WEBPACK=true npm run build-dev
