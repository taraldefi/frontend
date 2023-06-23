FROM node:16.13.0-alpine

#set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

ARG GITHUB_TOKEN

# install and cache app dependencies
RUN echo //npm.pkg.github.com/:_authToken=$GITHUB_TOKEN >> ~/.npmrc
RUN echo @taraldefi:registry=https://npm.pkg.github.com >> ~/.npmrc
RUN yarn install

# Removing the github token from npmrc file in below line
RUN echo > ~/.npmrc

COPY . ./

CMD ["yarn", "dev"]
