# Gatsby implementation for a generic docs site

## How to use

### First time setup

#### Native `yarn`

1. Run `yarn`
1. (optional) For the search index and to make the search work, run `yarn build`

#### Docker

1. Run `docker-compose up -d`
1. Run `docker-compose exec node yarn`
1. (optional) For the search index and to make the search work, run `docker-compose exec node yarn build`

### Development

#### Native `yarn`

1. Run `yarn develop`

#### Docker

1. Run `docker-compose ps node` and take note of the `:[portnumber]` e.g. `0.0.0.0:32771`
1. Run `docker-compose exec node yarn docker:develop -p [portnumber]`

### Production build

#### Native `yarn`

1. Run `yarn build`

#### Docker

1. Run `docker-compose exec node yarn build`
