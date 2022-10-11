all: bundle static_copy

bundle: ts
	rollup build/ts/Main.js --format iife --name "bundle" --file dist/prod_bundle.js
	rollup build/test/ClientTestMain.js --format iife --name "bundle" --file dist/test_bundle.js

static_copy:
	cp static/* dist/

ts:
	tsc

server_test:
	node build/test/ServerTestMain.js

clean:
	rm -r dist/*
	rm -r build/*

deploy: clean bundle static_copy
	#scp dist/* <your-url-here>:/var/www/html/