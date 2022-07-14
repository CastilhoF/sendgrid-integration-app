<p align="center">
  <a href="https://github.com/CastilhoF" target="blank"><img src="https://i.imgur.com/6jenBxp.png" width="420" alt="Castilho Logo" /></a>
  
</p>

<p align="center">


  <a href="https://twitter.com/CastilhoWylde" target="_blank"><img src="https://img.shields.io/twitter/follow/CastilhoWylde?style=social&label=Follow"></a>
</p>

<br>

## Description

[This API](https://github.com/Portal-iG/ig-bknd-counting-of-elections) as the back-end code of the national election counting system (Brazil).

## Installation

```bash
$ npm install
# or
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Deploy
```bash
# Every change is being made in the "developer" branch (git push origin developer). After making the changes, commit to the development branch before merging into the main. Commit to main and then run:

# commit and push to branch developer
$ git push origin developer

# Important!: Create pull request on GitHub to merge into main

#The api is in "Balder", on the following path:
/deploy/VAR/dominios/ig-bknd-counting-of-elections/ 

# Access Balder:
$ ssh -i ~/.ssh/chave_ig.pem ubuntu@10.0.35.122

# Enter to sudo su:
$ sudo su

# Enter domains/ig-bknd-counting-of-elections:
$ cd /deploy/VAR/dominios/ig-bknd-counting-of-elections/

# Pull from Git
$ git pull origin main

# Run the docker build via docker-compose to add changes to the container
$ docker-compose up --build -d
```

## Access Logs and bash terminal into container
```bash
# Access Logs
$ docker logs --follow "container-name"

# Access bash terminal
$ docker exec -it "container-name" /bin/bash
# or
$ docker exec -it "container-name" /bin/sh
```

## Routes Documentation

<br>

- Documentation of routes via swagger: - [Documentation]()

<br>

<a href="" target="_blank"><img  width="320" src=https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg></a>

<br>



## Rollback

```bash
# Logged into the main branch, run the pull command to ensure that the code that's in the online repository is the same as that local one.

$ git pull origin main

# To undo the merge that was done with the bad code, run the reset, as per the command below.

$ git reset --hard HEAD~1

# If you want to undo a commit, just run the command below

$ git revert HEAD^

# After the reset/revert is done, commit to the main and upload the code to the repository from the pull command.

$ git add .
$ git commit -m "commit description"
$ git push origin main

```

## Stay in touch

- Author - [Fernando Castilho](https://github.com/CastilhoF)
- Linkedin - [https://www.linkedin.com/in/fernando-castilho/](https://www.linkedin.com/in/fernando-castilho/)
- Twitter - [@CastilhoWylde](https://twitter.com/CastilhoWylde)