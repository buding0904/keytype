.PHONY: deploy
deploy:
	@yarn build
	@echo "vite build successed."
	@rsync -r dist/* server:/var/www/keykey/
	@echo "deploy successed."
