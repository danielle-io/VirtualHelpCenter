# Virtual Help Center

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

## Mongo Atlas Setup
Instructions for Mongo Atlas:
Once logged in via the invite link navigate to Database Access to create a profile. Save the password and username.
After that has been accomplished head over to Network Access and click "Add IP Address" button in order to white list your ip
When you have pulled the project on your computer navigate to the .env_example. (Follow the instructions there)

## Workflow 
workflow ~ from **YOUR** branch:
```bash
# This will merge dev onto your branch. make sure everything is tested and working before you do the next steps. 
# only put working code on Dev, it should be working at all times.
$ git fetch origin git merge origin/dev

$ git push origin your branch name

$ git checkout dev git merge origin/dev

# this is bc the first merge only merged into ur local branch
$ git merge your branch name

# test one more time, make sure everything is working correctly. 
$ git push origin dev
```
