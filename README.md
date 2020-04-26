# lolo-vue-site

## Deploy with heroku
```
heroku create lolo-vue-site --build-pack heroku/nodejs
heroku buildpacks:add https://github.com/hone/heroku-buildpack-static
git push heroku master
```
