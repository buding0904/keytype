.PHONY: deploy
deploy:
	@pnpm run build
	@echo "vite build successed."
	@rsync -r dist/* server:/var/www/keytype/
	@echo "deploy successed."
