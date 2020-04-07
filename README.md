# virtual_help_center

> UCI INF 117 Spring 2020 project for Prof. Pattis

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Workflow 
~ workflow ~ from YOUR branch:

git fetch origin git merge origin/dev

^ this will merge dev onto your branch. make sure everything is tested and working before you do the next steps. only put working code on Dev, it should be working at all times.

git push origin your branch name

git checkout dev git merge origin/dev

** this is bc the first merge only merged into ur local branch**

git merge your branch name

test one more time, make sure everything is working correctly. git push origin dev