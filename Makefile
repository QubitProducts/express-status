.PHONY: bootstrap test

BIN = ./node_modules/.bin

bootstrap:
	@npm install

test:
	@$(BIN)/standard
	@$(BIN)/mocha
