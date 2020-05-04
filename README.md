# Rick and Morty random character

## Deploy with Heroku+Express
```
git clone https://github.com/manolors/Rick-and-morty-random-char.git
cd Rick-and-morty-random-char
git checkout heroku-express
heroku create vue-random-char-generator --region eu
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add https://github.com/hone/heroku-buildpack-static
git push heroku master
```