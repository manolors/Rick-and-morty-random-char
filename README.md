# lolo-vue-site

## Deploy with Netlify
```
git clone https://github.com/manolors/Rick-and-morty-random-char.git
cd Rick-and-morty-random-char
git checkout netlify
netlify init
netlify deploy
```

## Deploy with Heroku (Express)
```
git clone https://github.com/manolors/Rick-and-morty-random-char.git
cd Rick-and-morty-random-char
git checkout heroku-express
npm install
heroku create [YOUR_APP_NAME] --buildpack heroku/nodejs --region eu
git push heroku master
```

## Deploy with Heroku (Static)
```
git clone https://github.com/manolors/Rick-and-morty-random-char.git
cd Rick-and-morty-random-char
git checkout heroku-static
npm install
heroku create [YOUR_APP_NAME] --buildpack heroku/nodejs --region eu
heroku buildpacks:add https://github.com/hone/heroku-buildpack-static
git push heroku master
```
