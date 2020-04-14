# Contentful-blog

> This projects is an example how to integrate contentful with nuxtjs using vuex as a state management system

## Build Setup

```bash
# set up environment file
$ cp .env.example .env
#note: don't forget to setup the CONTENTFUL_SPACE, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_MANAGEMENT_ACCESS_TOKEN vars based on your contentful configuration
In order to get the CONTENTFUL_MANAGEMENT_ACCESS_TOKEN you need to generate one api key, on the following link: https://app.contentful.com/spaces/<space_id>/api/cma_tokens

# install dependencies
$ yarn

# Import Content model
$ yarn contentful-import

# serve with hot reload at localhost:3000
$ yarn dev

```
