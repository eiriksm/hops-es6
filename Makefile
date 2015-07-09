build:
	./node_modules/babel/bin/babel/index.js --optional runtime src/index.js -o index.js

test:
	npm test

.PHONY: build
