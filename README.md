# lolo-vue-site

## Deploy with Heroku
```
git clone https://github.com/manolors/Rick-and-morty-random-char.git 
cd Rick-and-morty-random-char
npm init
heroku create vue-random-char-generator --buildpack heroku/nodejs --region eu
heroku buildpacks:add https://github.com/hone/heroku-buildpack-static
git push heroku master
```
