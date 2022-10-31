typeScriptSources := ${shell find src/ -type f}
tscOutput := build/ts/Main.js
prodBundle := dist/prod_bundle.js
testBundle := dist/test_bundle.js

all: $(prodBundle) $(testBundle) static_copy

$(tscOutput): $(typeScriptSources)
	tsc

$(prodBundle): $(tscOutput)
	rollup build/ts/Main.js --format iife --name "bundle" --file dist/prod_bundle.js

$(testBundle): $(tscOutput)
	rollup build/test/ClientTestMain.js --format iife --name "bundle" --file dist/test_bundle.js

static_copy:
	cp static/* dist/

server_test: $(tscOutput)
	node build/test/ServerTestMain.js

serve: $(tscOutput)
	node build/ts/ServerMain.js

clean:
	rm -rf dist/*
	rm -rf build/*

deploy: clean bundle static_copy
	#scp dist/* <your-url-here>:/var/www/html/