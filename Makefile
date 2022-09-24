all: bundle static_copy

bundle: ts
	rollup build/ts/Main.js --format iife --name "bundle" --file dist/prod_bundle.js
	rollup build/test/TestMain.js --format iife --name "bundle" --file dist/test_bundle.js

static_copy:
	cp static/* dist/

ts:
	tsc

clean:
	rm -r dist/*

deploy: clean bundle static_copy
	#scp dist/* <your-url-here>:/var/www/html/